// ============================================================
// Shared site behavior: parallax starfield, scroll-reveal,
// the hero electron-cloud animation, and per-page canvas
// animations (<canvas class="page-anim" data-anim="...">):
//   data-anim="orbit"     — satellite orbiting a planet (work)
//   data-anim="torus"     — swirling tokamak light torus (cv)
//   data-anim="magnetar"  — rotating tilted-dipole magnetar (news)
// All canvases render at devicePixelRatio for crisp output.
// ============================================================

(function () {
  const reduced = false;
  const GOLD = "#f2b134", CYAN = "#5fd0f5";

  function sprite(rgb, size = 64) {
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const g = c.getContext("2d");
    const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gr.addColorStop(0, `rgba(${rgb},1)`);
    gr.addColorStop(0.25, `rgba(${rgb},0.5)`);
    gr.addColorStop(0.6, `rgba(${rgb},0.12)`);
    gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr;
    g.fillRect(0, 0, size, size);
    return c;
  }
  const S_CY = sprite("120,215,255"), S_BL = sprite("110,160,255"), S_WH = sprite("235,242,255"), S_OR = sprite("242,177,52");

  let scrollY = window.scrollY;
  window.addEventListener("scroll", () => { scrollY = window.scrollY; }, { passive: true });

  // render crisply on high-DPI displays
  function hidpi(cv) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const w = cv.width, h = cv.height;
    cv.style.width = w + "px";
    cv.style.height = h + "px";
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    const fx = cv.getContext("2d");
    fx.scale(dpr, dpr);
    return [fx, w, h];
  }

  // ---------- starfield ----------
  const canvas = document.getElementById("stars");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let stars = [];
    let w = 0, h = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(260, Math.floor((w * h) / 6500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.25 + Math.random() * 0.75,
        p: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.08
      }));
    }
    window.addEventListener("resize", resize);
    resize();

    function frame(t) {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const y = ((s.y - scrollY * s.z * 0.35) % h + h) % h;
        const tw = reduced ? 0.75 : 0.55 + 0.45 * Math.sin(t / 900 + s.p);
        ctx.globalAlpha = tw * (0.35 + 0.65 * s.z);
        ctx.fillStyle = s.gold ? "#f2b134" : "#cfe4ff";
        ctx.beginPath();
        ctx.arc(s.x, y, s.z * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // ---------- electron cloud (hero) ----------
  const cloud = document.getElementById("cloud");
  if (cloud) {
    const cctx = cloud.getContext("2d");
    const SIZE = 440;
    cloud.width = SIZE;
    cloud.height = SIZE;
    const ccx = SIZE / 2, ccy = SIZE / 2;

    const pts = [];
    const R = Math.random;
    for (let i = 0; i < 950; i++) {
      let r = -(Math.log(R()) + Math.log(R()) + Math.log(R())) * 24;
      r = Math.min(r, 190);
      const sgn = R() < 0.5 ? -1 : 1;
      const ct = sgn * Math.cbrt(R());
      const st = Math.sqrt(1 - ct * ct);
      const ph = R() * Math.PI * 2;
      pts.push({ x: r * st * Math.cos(ph), y: r * ct, z: r * st * Math.sin(ph), tw: R() * Math.PI * 2, core: false });
    }
    for (let i = 0; i < 320; i++) {
      let r = Math.min(-Math.log(R()) * 11, 60);
      const ct = R() * 2 - 1, st = Math.sqrt(1 - ct * ct), ph = R() * Math.PI * 2;
      pts.push({ x: r * st * Math.cos(ph), y: r * ct, z: r * st * Math.sin(ph), tw: R() * Math.PI * 2, core: true });
    }

    const tilt = 0.5, cT = Math.cos(tilt), sT = Math.sin(tilt);

    function drawCloud(t) {
      cctx.clearRect(0, 0, SIZE, SIZE);
      const g = cctx.createRadialGradient(ccx, ccy, 0, ccx, ccy, 30);
      g.addColorStop(0, "rgba(242,177,52,0.95)");
      g.addColorStop(0.4, "rgba(242,177,52,0.30)");
      g.addColorStop(1, "rgba(242,177,52,0)");
      cctx.fillStyle = g;
      cctx.beginPath();
      cctx.arc(ccx, ccy, 30, 0, Math.PI * 2);
      cctx.fill();

      const a = (reduced ? 0.6 : t * 0.00012) + scrollY * 0.003;
      const ca = Math.cos(a), sa = Math.sin(a);
      for (const p of pts) {
        const x1 = p.x * ca + p.z * sa;
        const z1 = -p.x * sa + p.z * ca;
        const y1 = p.y * cT - z1 * sT;
        const depth = (z1 * cT + p.y * sT + 190) / 380;
        const tw = reduced ? 0.8 : 0.55 + 0.45 * Math.sin(t / 800 + p.tw);
        cctx.globalAlpha = Math.max(0.05, Math.min(0.9, tw * (0.25 + 0.6 * depth)));
        cctx.fillStyle = p.core ? "#f8cf74" : "#5fd0f5";
        cctx.fillRect(ccx + x1, ccy + y1, 1.7, 1.7);
      }
      cctx.globalAlpha = 1;
      if (!reduced) requestAnimationFrame(drawCloud);
    }
    if (reduced) drawCloud(0); else requestAnimationFrame(drawCloud);
  }

  // ---------- orbit (work): satellite around a planet ----------
  function animOrbit(cv) {
    const [fx, W, H] = hidpi(cv);
    const cx = W / 2, cy = H / 2 + 4;
    const RX = W * 0.4, RY = H * 0.26, TILT = -0.28;

    function pos(a) {
      const x = Math.cos(a) * RX, y = Math.sin(a) * RY;
      return [cx + x * Math.cos(TILT) - y * Math.sin(TILT), cy + x * Math.sin(TILT) + y * Math.cos(TILT), Math.sin(a)];
    }

    function planet() {
      // atmosphere halo
      const halo = fx.createRadialGradient(cx, cy, 16, cx, cy, 30);
      halo.addColorStop(0, "rgba(95,208,245,0.18)");
      halo.addColorStop(1, "rgba(95,208,245,0)");
      fx.fillStyle = halo;
      fx.beginPath(); fx.arc(cx, cy, 30, 0, Math.PI * 2); fx.fill();
      // body with day/night terminator
      const g = fx.createRadialGradient(cx - 7, cy - 8, 2, cx, cy, 22);
      g.addColorStop(0, "#9fd0ec");
      g.addColorStop(0.35, "#4a7fb5");
      g.addColorStop(0.7, "#1d3a63");
      g.addColorStop(1, "#0a1526");
      fx.fillStyle = g;
      fx.beginPath(); fx.arc(cx, cy, 20, 0, Math.PI * 2); fx.fill();
      // specular glint
      const sp = fx.createRadialGradient(cx - 9, cy - 10, 0, cx - 9, cy - 10, 7);
      sp.addColorStop(0, "rgba(230,245,255,0.55)");
      sp.addColorStop(1, "rgba(230,245,255,0)");
      fx.fillStyle = sp;
      fx.beginPath(); fx.arc(cx - 9, cy - 10, 7, 0, Math.PI * 2); fx.fill();
    }

    function orbitPath() {
      fx.strokeStyle = "rgba(148,160,184,0.22)";
      fx.lineWidth = 1;
      fx.beginPath();
      for (let i = 0; i <= 90; i++) {
        const [x, y] = pos((i / 90) * Math.PI * 2);
        i ? fx.lineTo(x, y) : fx.moveTo(x, y);
      }
      fx.stroke();
    }

    function sat(x, y, ang, scale) {
      fx.save();
      fx.translate(x, y);
      fx.rotate(ang);
      fx.scale(scale, scale);
      // panels with faint cell lines
      const pg = fx.createLinearGradient(-13, 0, -5, 0);
      pg.addColorStop(0, "#8a6a1e");
      pg.addColorStop(0.5, GOLD);
      pg.addColorStop(1, "#c98f2a");
      fx.fillStyle = pg;
      fx.fillRect(-13.5, -2, 8.5, 4);
      fx.fillRect(5, -2, 8.5, 4);
      fx.strokeStyle = "rgba(6,10,20,0.5)";
      fx.lineWidth = 0.5;
      for (const px of [-11, -8.5, 7.5, 10]) { fx.beginPath(); fx.moveTo(px, -2); fx.lineTo(px, 2); fx.stroke(); }
      // bus with metallic gradient
      const bg = fx.createLinearGradient(-3, -3.5, 3, 3.5);
      bg.addColorStop(0, "#f2f6fd");
      bg.addColorStop(0.6, "#b9c6dd");
      bg.addColorStop(1, "#7f8ca6");
      fx.fillStyle = bg;
      fx.fillRect(-3.5, -3.5, 7, 7);
      fx.restore();
    }

    function frame(t) {
      fx.clearRect(0, 0, W, H);
      const a = reduced ? 0.8 : (t / 4200) % (Math.PI * 2);
      orbitPath();
      const [sx, sy, depth] = pos(a);
      const scale = 0.85 + 0.25 * depth;      // nearer = slightly larger
      if (depth < 0) sat(sx, sy, a + TILT, scale);
      planet();
      if (depth >= 0) {
        for (let i = 1; i <= 12; i++) {
          const [tx2, ty2] = pos(a - i * 0.045);
          fx.globalAlpha = 0.30 * (1 - i / 12);
          fx.fillStyle = CYAN;
          fx.beginPath();
          fx.arc(tx2, ty2, 1.4, 0, Math.PI * 2);
          fx.fill();
        }
        fx.globalAlpha = 1;
        sat(sx, sy, a + TILT, scale);
      }
      if (!reduced) requestAnimationFrame(frame);
    }
    if (reduced) frame(0); else requestAnimationFrame(frame);
  }

  // ---------- torus (cv): pulsing tokamak ring with swirling currents ----------
  function animTorus(cv) {
    const [fx, W, H] = hidpi(cv);
    const cx = W / 2, cy = H / 2 + 12;
    const RX = 95, RY = 34;

    function sprite(rgb, size = 64) {
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const g = c.getContext("2d");
      const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      gr.addColorStop(0, `rgba(${rgb},1)`);
      gr.addColorStop(0.25, `rgba(${rgb},0.5)`);
      gr.addColorStop(0.6, `rgba(${rgb},0.12)`);
      gr.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = gr;
      g.fillRect(0, 0, size, size);
      return c;
    }
    const S_BLUE = sprite("110,160,255"), S_PINK = sprite("255,95,205"),
      S_WHITE = sprite("235,242,255"), S_RED = sprite("255,80,90"), S_AZUL = sprite("90,150,255");
    const put = (sp, x, y, s, a) => { fx.globalAlpha = a; fx.drawImage(sp, x - s / 2, y - s / 2, s, s); };

    // swirling current filaments racing around the ring
    const swirls = [
      { sp: S_RED, w: 0.00115, ph: 0.0 },
      { sp: S_RED, w: 0.00085, ph: 2.6 },
      { sp: S_AZUL, w: -0.00135, ph: 1.2 },
      { sp: S_AZUL, w: -0.00090, ph: 4.4 }
    ];

    function ringPos(a) { return [cx + Math.cos(a) * RX, cy + Math.sin(a) * RY, (Math.sin(a) + 1) / 2]; }

    function ringPass(t, front) {
      const pulse = reduced ? 1 : 0.86 + 0.14 * Math.sin(t / 1300) + 0.04 * Math.sin(t / 331);
      for (let i = 0; i < 60; i++) {
        const a = (i / 60) * Math.PI * 2;
        if ((Math.sin(a) > 0) !== front) continue;
        const [x, y, depth] = ringPos(a);
        put(S_BLUE, x, y, (48 + 14 * depth) * pulse, 0.05 + 0.05 * depth);
        put(S_PINK, x, y, (26 + 10 * depth) * pulse, 0.10 + 0.10 * depth);
        put(S_WHITE, x, y, (9 + 5 * depth) * pulse, 0.05 + 0.10 * depth);
      }
      // swirling red / blue lights with fading tails
      for (const s of swirls) {
        const head = (reduced ? s.ph : t * s.w + s.ph);
        for (let j = 0; j < 11; j++) {
          const a = head - Math.sign(s.w || 1) * j * 0.07;
          if ((Math.sin(a) > 0) !== front) continue;
          const [x, y, depth] = ringPos(a);
          const f = 1 - j / 11;
          put(s.sp, x, y, (16 + 10 * depth) * f + 5, (0.10 + 0.22 * depth) * f);
        }
      }
    }

    function frame(t) {
      fx.clearRect(0, 0, W, H);
      fx.globalCompositeOperation = "lighter";

      ringPass(t, false);

      // central column
      const colH = 92, colTop = cy - colH + 14;
      const col = fx.createLinearGradient(0, colTop, 0, cy + 20);
      col.addColorStop(0, "rgba(120,215,255,0)");
      col.addColorStop(0.45, "rgba(120,215,255,0.18)");
      col.addColorStop(1, "rgba(160,120,255,0.09)");
      fx.fillStyle = col;
      const cw = 26 + (reduced ? 0 : 3 * Math.sin(t / 800));
      fx.fillRect(cx - cw / 2, colTop, cw, colH + 6);

      ringPass(t, true);

      fx.restore();
      fx.globalCompositeOperation = "source-over";
      fx.globalAlpha = 1;
      if (!reduced) requestAnimationFrame(frame);
    }
    if (reduced) frame(0); else requestAnimationFrame(frame);
  }

  // ---------- magnetar (news): rotating tilted dipole ----------
  function animMagnetar(cv) {
    const [fx, W, H] = hidpi(cv);
    const cx = W / 2, cy = H / 2;
    const ALPHA = 0.42, VIEW = 0.35;
    const cV = Math.cos(VIEW), sV = Math.sin(VIEW);
    const SHELLS = [44, 70, 98, 128];

    const put = (sp, x, y, s, a) => { fx.globalAlpha = a; fx.drawImage(sp, x - s / 2, y - s / 2, s, s); };

    const streams = Array.from({ length: 130 }, () => ({
      u: Math.random(), shell: SHELLS[Math.random() * SHELLS.length | 0],
      phi: Math.random() * Math.PI * 2, sp: 0.12 + Math.random() * 0.25, pole: Math.random() < 0.5 ? 1 : -1
    }));

    function toView(p, spin) {
      let x = p.x * Math.cos(ALPHA) + p.y * Math.sin(ALPHA);
      let y = -p.x * Math.sin(ALPHA) + p.y * Math.cos(ALPHA);
      let z = p.z;
      const c = Math.cos(spin), s = Math.sin(spin);
      const x2 = x * c + z * s, z2 = -x * s + z * c;
      const y3 = y * cV - z2 * sV, z3 = y * sV + z2 * cV;
      return [cx + x2, cy - y3, z3];
    }
    function lp(L, th, phi) {
      const r = L * Math.sin(th) ** 2 + 6;
      return { x: r * Math.sin(th) * Math.cos(phi), y: r * Math.cos(th), z: r * Math.sin(th) * Math.sin(phi) };
    }

    function frame(t) {
      fx.clearRect(0, 0, W, H);
      const spin = reduced ? 0.7 : t * 0.00035;
      const mAxis = toView({ x: 0, y: 1, z: 0 }, spin);
      const pulse = 0.55 + 0.45 * Math.pow(Math.abs(mAxis[2]), 3);

      fx.globalCompositeOperation = "lighter";
      for (const L of SHELLS) {
        for (let k = 0; k < 10; k++) {
          const phi = (k / 10) * Math.PI * 2;
          fx.beginPath();
          let za = 0;
          for (let i = 0; i <= 42; i++) {
            const th = 0.22 + (i / 42) * (Math.PI - 0.44);
            const [x, y, z] = toView(lp(L, th, phi), spin);
            za += z;
            i ? fx.lineTo(x, y) : fx.moveTo(x, y);
          }
          fx.strokeStyle = `rgba(120,215,255,${0.05 + 0.10 * ((za / 43 / L) + 1) / 2})`;
          fx.lineWidth = 1;
          fx.stroke();
        }
      }
      for (const pole of [1, -1]) {
        const base = toView({ x: 0, y: pole * 14, z: 0 }, spin);
        const tip = toView({ x: 0, y: pole * 150, z: 0 }, spin);
        const g = fx.createLinearGradient(base[0], base[1], tip[0], tip[1]);
        g.addColorStop(0, `rgba(235,242,255,${0.5 * pulse})`);
        g.addColorStop(0.4, `rgba(120,215,255,${0.16 * pulse})`);
        g.addColorStop(1, "rgba(120,215,255,0)");
        fx.strokeStyle = g;
        fx.lineCap = "round";
        fx.lineWidth = 7;
        fx.beginPath(); fx.moveTo(base[0], base[1]); fx.lineTo(tip[0], tip[1]); fx.stroke();
        fx.lineWidth = 2.4;
        fx.beginPath(); fx.moveTo(base[0], base[1]); fx.lineTo(tip[0], tip[1]); fx.stroke();
      }
      const T = reduced ? 0 : t * 0.001;
      for (const p of streams) {
        p.u = (p.u + (reduced ? 0 : p.sp * 0.006)) % 1;
        const th = p.pole > 0 ? 0.22 + p.u * 1.2 : Math.PI - 0.22 - p.u * 1.2;
        const [x, y, z] = toView(lp(p.shell, th, p.phi + T * 0.15), spin);
        put(S_CY, x, y, 5.5, 0.22 + 0.28 * ((z / p.shell) + 1) / 2);
      }
      put(S_WH, cx, cy, 26, 1);
      put(S_BL, cx, cy, 60 + 14 * pulse, 0.75 * pulse);
      put(S_CY, cx, cy, 120 + 30 * pulse, 0.28 * pulse);
      fx.globalCompositeOperation = "source-over";
      fx.globalAlpha = 1;
      if (!reduced) requestAnimationFrame(frame);
    }
    if (reduced) frame(0); else requestAnimationFrame(frame);
  }

  // ---------- hyperspace warp (travel) ----------
  function animHyperspace(cv) {
    const [fx, W, H] = hidpi(cv);
    const cx = W / 2, cy = H / 2;

    const stars = Array.from({ length: 300 }, () => {
      return {
        x: (Math.random() - 0.5) * W * 4,
        y: (Math.random() - 0.5) * H * 4,
        z: Math.random() * 1000 + 100
      };
    });

    const put = (sp, x, y, s, a) => { fx.globalAlpha = a; fx.drawImage(sp, x - s / 2, y - s / 2, s, s); };

    function frame(t) {
      const speed = reduced ? 0 : 8;

      fx.globalCompositeOperation = "source-over";
      // Semi-transparent black fill to create motion blur trails. 
      // After several frames, the center becomes jet black.
      fx.fillStyle = "rgba(0,0,0,0.35)";
      fx.fillRect(0, 0, W, H);

      fx.globalCompositeOperation = "lighter";

      for (let s of stars) {
        const pz = s.z;
        if (!reduced) s.z -= speed;
        if (s.z <= 1) {
          s.z = 1000 + Math.random() * 200;
          s.x = (Math.random() - 0.5) * W * 4;
          s.y = (Math.random() - 0.5) * H * 4;
          continue;
        }

        const px1 = cx + (s.x / s.z) * 200;
        const py1 = cy + (s.y / s.z) * 200;

        const px2 = cx + (s.x / pz) * 200;
        const py2 = cy + (s.y / pz) * 200;

        const size = Math.max(0.5, (1000 - s.z) / 200);

        fx.beginPath();
        fx.moveTo(px1, py1);
        fx.lineTo(px2, py2);
        fx.lineWidth = size;
        fx.strokeStyle = Math.random() > 0.8 ? "rgba(242,177,52,0.8)" : "rgba(120,215,255,0.8)";
        fx.stroke();

        if (Math.random() > 0.95) put(S_WH, px1, py1, size * 8, 0.8);
      }

      // Fade out edges radially for seamless blending
      const mask = fx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(cx, cy) * 0.95);
      mask.addColorStop(0, "rgba(0,0,0,1)");
      mask.addColorStop(0.5, "rgba(0,0,0,1)");
      mask.addColorStop(1, "rgba(0,0,0,0)");
      fx.globalCompositeOperation = "destination-in";
      fx.fillStyle = mask;
      fx.fillRect(0, 0, W, H);

      fx.globalCompositeOperation = "source-over";
      fx.globalAlpha = 1;
      if (!reduced) requestAnimationFrame(frame);
    }
    if (reduced) frame(0); else requestAnimationFrame(frame);
  }

  // ---------- hall thruster (timeline) ----------
  function animHall(cv) {
    const [fx, W, H] = hidpi(cv);
    const cx = W / 2 - 40, cy = H / 2 + 10;
    const put = (sp, x, y, s, a) => { fx.globalAlpha = a; fx.drawImage(sp, x - s / 2, y - s / 2, s, s); };

    function frame(t) {
      fx.clearRect(0, 0, W, H);
      const T = reduced ? 0 : t;

      fx.globalCompositeOperation = "source-over";

      fx.lineWidth = 15;
      fx.strokeStyle = "rgba(40,50,70,1)";
      fx.beginPath(); fx.ellipse(cx, cy, 30, 100, 0, 0, Math.PI * 2); fx.stroke();

      fx.lineWidth = 6;
      fx.strokeStyle = "rgba(100,120,150,1)";
      fx.beginPath(); fx.ellipse(cx + 5, cy, 30, 100, 0, 0, Math.PI * 2); fx.stroke();

      fx.fillStyle = "rgba(20,25,35,1)";
      fx.beginPath(); fx.ellipse(cx + 10, cy, 18, 70, 0, 0, Math.PI * 2); fx.fill();

      fx.globalCompositeOperation = "lighter";

      for (let i = 0; i < 30; i++) {
        const spread = 40 + i * 1.8;
        const length = 450 + i * 15;
        const pulse = 0.8 + 0.2 * Math.sin(T * 0.02 - i * 0.5);
        const op = Math.exp(-i * 0.15) * 0.5 * pulse;

        const g = fx.createLinearGradient(cx + 12, cy, cx + length, cy);
        g.addColorStop(0, `rgba(255,255,255,${op})`);
        g.addColorStop(0.1, `rgba(100,200,255,${op * 0.9})`);
        g.addColorStop(0.4, `rgba(20,80,255,${op * 0.5})`);
        g.addColorStop(1, "rgba(10,30,100,0)");

        fx.fillStyle = g;
        fx.beginPath();
        fx.ellipse(cx + 12, cy, 22, 85, 0, -Math.PI / 2, Math.PI / 2);
        fx.bezierCurveTo(cx + 150, cy + spread * 0.6, cx + length * 0.5, cy + spread * 1.2, cx + length, cy + spread * 2);
        fx.lineTo(cx + length, cy - spread * 2);
        fx.bezierCurveTo(cx + length * 0.5, cy - spread * 1.2, cx + 150, cy - spread * 0.6, cx + 12, cy - 85);
        fx.fill();
      }

      fx.strokeStyle = "rgba(200,240,255,0.95)";
      fx.lineWidth = 12;
      fx.beginPath(); fx.ellipse(cx + 12, cy, 22, 85, 0, 0, Math.PI * 2); fx.stroke();

      put(S_WH, cx + 25, cy, 80, 0.6);
      put(S_CY, cx + 45, cy, 160, 0.4);
      put(S_BL, cx + 80, cy, 250, 0.2);

      // Mask to fade out only the far right edge of the discharge plume
      const mask = fx.createLinearGradient(0, 0, W, 0);
      mask.addColorStop(0, "rgba(0,0,0,1)");
      mask.addColorStop(0.75, "rgba(0,0,0,1)");
      mask.addColorStop(1, "rgba(0,0,0,0)");
      fx.globalCompositeOperation = "destination-in";
      fx.globalAlpha = 1;
      fx.fillStyle = mask;
      fx.fillRect(0, 0, W, H);

      fx.globalCompositeOperation = "source-over";
      if (!reduced) requestAnimationFrame(frame);
    }
    if (reduced) frame(0); else requestAnimationFrame(frame);
  }

  // ---------- quasar (culture) ----------
  function animQuasar(cv) {
    const [fx, W, H] = hidpi(cv);
    const cx = W / 2, cy = H / 2;
    const INCL = 0.25;
    const put = (sp, x, y, s, a) => { fx.globalAlpha = a; fx.drawImage(sp, x - s / 2, y - s / 2, s, s); };

    function frame(t) {
      fx.clearRect(0, 0, W, H);
      fx.globalCompositeOperation = "lighter";
      const T = reduced ? 0 : t;

      for (const dir of [1, -1]) {
        const h = 400;
        // High-frequency sin waves + random noise for erratic, flickery pulse
        const basePulse = Math.sin(T * 0.002) * 0.4 + Math.sin(T * 0.015) * 0.3 + (Math.random() - 0.5) * 0.4;
        const w = 40 + basePulse * 8;

        const g = fx.createLinearGradient(cx, cy, cx, cy - dir * h);
        g.addColorStop(0, "rgba(255,255,255,1)");
        g.addColorStop(0.3, "rgba(100,180,255,0.9)");
        g.addColorStop(0.8, `rgba(150,50,255,${0.5 + basePulse * 0.15})`);
        g.addColorStop(1, "rgba(50,10,100,0)");

        fx.fillStyle = g;
        fx.beginPath();
        fx.moveTo(cx - w * 0.1, cy);
        fx.lineTo(cx - w, cy - dir * h);
        fx.lineTo(cx + w, cy - dir * h);
        fx.lineTo(cx + w * 0.1, cy);
        fx.fill();

        const g2 = fx.createLinearGradient(cx, cy, cx, cy - dir * h * 0.7);
        g2.addColorStop(0, "rgba(255,255,255,1)");
        g2.addColorStop(0.4, "rgba(220,240,255,0.9)");
        g2.addColorStop(1, "rgba(220,240,255,0)");

        fx.fillStyle = g2;
        fx.beginPath();
        fx.moveTo(cx - w * 0.05, cy);
        fx.lineTo(cx - w * 0.3, cy - dir * h * 0.7);
        fx.lineTo(cx + w * 0.3, cy - dir * h * 0.7);
        fx.lineTo(cx + w * 0.05, cy);
        fx.fill();
      }

      fx.globalCompositeOperation = "source-over";
      fx.fillStyle = "#020204";
      fx.beginPath(); fx.ellipse(cx, cy, 18, 18 * INCL, 0, 0, Math.PI * 2); fx.fill();

      fx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 40; i++) {
        const r = 20 + i * 2.5;
        const op = Math.exp(-i * 0.1) * 0.35;
        fx.strokeStyle = `rgba(255,200,100,${op})`;
        fx.lineWidth = 1.5;
        fx.beginPath(); fx.ellipse(cx, cy, r, r * INCL, 0, 0, Math.PI * 2); fx.stroke();

        fx.strokeStyle = `rgba(100,150,255,${op * 0.8})`;
        fx.beginPath(); fx.ellipse(cx, cy, r * 1.2, r * INCL * 1.2, 0, 0, Math.PI * 2); fx.stroke();
      }

      put(S_WH, cx, cy, 45, 0.7);
      put(S_OR, cx, cy, 90, 0.5);

      const mask = fx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(cx, cy) * 0.95);
      mask.addColorStop(0, "rgba(0,0,0,1)");
      mask.addColorStop(0.5, "rgba(0,0,0,1)");
      mask.addColorStop(1, "rgba(0,0,0,0)");
      fx.globalCompositeOperation = "destination-in";
      fx.globalAlpha = 0.8 + (Math.random() - 0.5) * 0.05; // Slightly change brightness with flickering
      fx.fillStyle = mask;
      fx.fillRect(0, 0, W, H);

      fx.globalCompositeOperation = "source-over";
      if (!reduced) requestAnimationFrame(frame);
    }
    if (reduced) frame(0); else requestAnimationFrame(frame);
  }

  // Ensure the old constellation SVG is removed and replaced by the hall thruster canvas
  // in case the browser aggressively cached the HTML file.
  document.querySelectorAll(".page-decor").forEach((el) => {
    const cv = document.createElement("canvas");
    cv.className = "page-anim";
    cv.dataset.anim = "hall";
    cv.width = 380;
    cv.height = 260;
    cv.setAttribute("aria-hidden", "true");
    cv.style.top = "10px";
    cv.style.right = "0px";
    el.replaceWith(cv);
  });

  document.querySelectorAll(".page-anim").forEach((cv) => {
    const kind = cv.dataset.anim;
    if (kind === "orbit") animOrbit(cv);
    else if (kind === "torus") animTorus(cv);
    else if (kind === "magnetar") animMagnetar(cv);
    else if (kind === "hyperspace") animHyperspace(cv);
    else if (kind === "hall") animHall(cv);
    else if (kind === "quasar") animQuasar(cv);
  });

  // ---------- scroll-reveal ----------
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
