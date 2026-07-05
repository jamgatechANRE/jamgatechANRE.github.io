// ============================================================
// COURSEWORK — transcribed from my official GT transcript
// (identifiers removed; pre-registered courses excluded).
// Rendered as a searchable/sortable table on cv.html.
//
// Fields: sem (semester label), ord (chronological order for
// sorting), subj (department), num (course number), title,
// cr (earned credit hours), grade, and optional syl (a link
// to the official course syllabus PDF, used instead of OSCAR).
// Grades: A = letter grade · T = AP/transfer credit ·
// GT = transfer credit approved by GT (exam or study abroad) ·
// V = no grade (recitation / registration placeholder)
//
// AP_EXAMS (bottom of file) powers the "AP exams" toggle for
// the Pre-College Credit rows.
// ============================================================

const COURSES = [
  // ---- Pre-college credit (AP + GT exam), 2022 ----
  { sem: "Pre-College Credit", ord: 0, subj: "CS",   num: "1301", title: "Intro to Computing",            cr: 3, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "ENGL", num: "1101", title: "English Composition I",         cr: 3, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "HIST", num: "2111", title: "United States to 1877",         cr: 3, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "MATH", num: "1551", title: "Differential Calculus",         cr: 2, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "MATH", num: "1552", title: "Integral Calculus",             cr: 4, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "MATH", num: "1553", title: "Intro to Linear Algebra",       cr: 2, grade: "GT" },
  { sem: "Pre-College Credit", ord: 0, subj: "MUSI", num: "2700", title: "Intro to Music Theory",         cr: 3, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "PHYS", num: "2211", title: "Intro Physics I",               cr: 4, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "PHYS", num: "2212", title: "Intro Physics II",              cr: 4, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "PHYS", num: "2XXX", title: "Physics Elective",              cr: 3, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "SPAN", num: "2001", title: "Intermediate Spanish I",        cr: 3, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "SPAN", num: "2002", title: "Intermediate Spanish II",       cr: 3, grade: "T" },
  { sem: "Pre-College Credit", ord: 0, subj: "SPAN", num: "3XXX", title: "Spanish Elective",              cr: 3, grade: "T" },

  // ---- Fall 2022 (Faculty Honors) ----
  { sem: "Fall 2022", ord: 1, subj: "AE",   num: "1601", title: "Introduction to AE",           cr: 1, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%201601%20Syllabus-Introduction%20to%20Aerospace%20Engineering.pdf" },
  { sem: "Fall 2022", ord: 1, subj: "CHEM", num: "1310", title: "Prin of Gen Chem for Engr",    cr: 4, grade: "A" },
  { sem: "Fall 2022", ord: 1, subj: "COE",  num: "2001", title: "Statics",                      cr: 2, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/COE%202001%20Syllabus%20-%20Statistics.pdf" },
  { sem: "Fall 2022", ord: 1, subj: "ECE",  num: "3710", title: "Circuits & Electronics",       cr: 2, grade: "A" },
  { sem: "Fall 2022", ord: 1, subj: "ME",   num: "1670", title: "Intro to Engr Graphics",       cr: 3, grade: "A" },

  // ---- Spring 2023 (Faculty Honors) ----
  { sem: "Spring 2023", ord: 2, subj: "COE",  num: "3001", title: "Deformable Bodies",          cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/COE%203001%20Syllabus-Mechanics%20of%20Deformable%20Bodies%20%28303%29.pdf" },
  { sem: "Spring 2023", ord: 2, subj: "ENGL", num: "1102", title: "English Composition II",     cr: 3, grade: "A" },
  { sem: "Spring 2023", ord: 2, subj: "MATH", num: "2551", title: "Multivariable Calculus",     cr: 4, grade: "A" },
  { sem: "Spring 2023", ord: 2, subj: "MATH", num: "2552", title: "Differential Equations",     cr: 4, grade: "A" },
  { sem: "Spring 2023", ord: 2, subj: "NRE",  num: "2120", title: "Elements of NRE",            cr: 3, grade: "A" },

  // ---- Fall 2023 (Faculty Honors) ----
  { sem: "Fall 2023", ord: 3, subj: "AE",  num: "2010",  title: "Thermodyn & Fluids Fundam",    cr: 4, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%202010%20Syllabus-Thermodynamics%20and%20Fluids%20Fundamentals.pdf" },
  { sem: "Fall 2023", ord: 3, subj: "AE",  num: "2010R", title: "AE 2010 Recitation",           cr: 0, grade: "V" },
  { sem: "Fall 2023", ord: 3, subj: "AE",  num: "2220",  title: "Dynamics",                     cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%202220%20Syllabus-Dynamics.pdf" },
  { sem: "Fall 2023", ord: 3, subj: "AE",  num: "2220R", title: "AE 2220 Recitation",           cr: 0, grade: "V" },
  { sem: "Fall 2023", ord: 3, subj: "AE",  num: "2610",  title: "Intro Exper Methods AE",       cr: 1, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%202610%20Syllabus%20-%20Introduction%20to%20Experimental%20Methods%20in%20Aerospace.pdf" },
  { sem: "Fall 2023", ord: 3, subj: "AE",  num: "2611",  title: "Technical Commun for AE",      cr: 1, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2025/08/AE2611_Syllabus_Summer_2025.pdf" },
  { sem: "Fall 2023", ord: 3, subj: "CS",  num: "1371",  title: "Computing for Engineers",      cr: 3, grade: "A" },
  { sem: "Fall 2023", ord: 3, subj: "CS",  num: "1371R", title: "CS 1371 Recitation",           cr: 0, grade: "V" },
  { sem: "Fall 2023", ord: 3, subj: "ECE", num: "3741",  title: "Instrum & Electronic Lab",     cr: 1, grade: "A" },
  { sem: "Fall 2023", ord: 3, subj: "NRE", num: "4610",  title: "Plasma Phys & Fusion Engr",    cr: 3, grade: "A" },

  // ---- Spring 2024 (Faculty Honors) ----
  { sem: "Spring 2024", ord: 4, subj: "AE",   num: "3530", title: "Sys Dynamics & Vibration",   cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%203530%20Syllabus%20-System%20Dynamics%20and%20Vibrations.pdf" },
  { sem: "Spring 2024", ord: 4, subj: "AE",   num: "4699", title: "Undergraduate Research",     cr: 3, grade: "A" },
  { sem: "Spring 2024", ord: 4, subj: "ECON", num: "2105", title: "Prin of Macroeconomics",     cr: 3, grade: "A" },
  { sem: "Spring 2024", ord: 4, subj: "INTA", num: "3260", title: "Middle East Relations",      cr: 3, grade: "A" },
  { sem: "Spring 2024", ord: 4, subj: "NRE",  num: "3301", title: "Radiation Physics",          cr: 3, grade: "A" },

  // ---- Fall 2024 — Study Abroad at UC3M, Madrid (GT transfer credit) ----
  { sem: "Fall 2024 (UC3M)", ord: 5, subj: "AE",   num: "3140", title: "Structural Analysis",        cr: 3, grade: "GT", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%203140%20Syllabus-Structural%20Analysis.pdf" },
  { sem: "Fall 2024 (UC3M)", ord: 5, subj: "AE",   num: "3XXX", title: "Aerospace Engr Elective",    cr: 1, grade: "GT" },
  { sem: "Fall 2024 (UC3M)", ord: 5, subj: "HTS",  num: "2XXX", title: "Hist, Tech & Soc Elective",  cr: 2, grade: "GT" },
  { sem: "Fall 2024 (UC3M)", ord: 5, subj: "MATH", num: "3670", title: "Statistics and Applns",      cr: 3, grade: "GT" },
  { sem: "Fall 2024 (UC3M)", ord: 5, subj: "MATH", num: "3XXX", title: "Mathematics Elective",       cr: 1, grade: "GT" },
  { sem: "Fall 2024 (UC3M)", ord: 5, subj: "MSE",  num: "2001", title: "Prin & Appl - Engr Materials", cr: 3, grade: "GT" },
  { sem: "Fall 2024 (UC3M)", ord: 5, subj: "MSE",  num: "2XXX", title: "Matl Sci Engr Elective",     cr: 1, grade: "GT" },

  // ---- Spring 2025 (Faculty Honors) ----
  { sem: "Spring 2025", ord: 6, subj: "AE",   num: "3030",  title: "Aerodynamics",               cr: 4, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%203030%20Syllabus-Aerodynamics.pdf" },
  { sem: "Spring 2025", ord: 6, subj: "AE",   num: "3030R", title: "Aerodynamics Recitation",    cr: 0, grade: "V" },
  { sem: "Spring 2025", ord: 6, subj: "AE",   num: "3330",  title: "Intro AE Vehicle Perform",   cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%203330%20Syllabus-Introduction%20to%20Aerospace%20Vehicle%20Performance.pdf" },
  { sem: "Spring 2025", ord: 6, subj: "AE",   num: "3531",  title: "Ctrl Sys Analysis & Design", cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%203531%20Syllabus-Control%20System%20Analysis%20and%20Design.pdf" },
  { sem: "Spring 2025", ord: 6, subj: "AE",   num: "4699",  title: "Undergraduate Research",     cr: 1, grade: "A" },
  { sem: "Spring 2025", ord: 6, subj: "APPH", num: "1040",  title: "Sci Foundation of Health",   cr: 2, grade: "A" },
  { sem: "Spring 2025", ord: 6, subj: "NRE",  num: "3316",  title: "Radiation Protection Eng",   cr: 3, grade: "A" },

  // ---- Fall 2025 (Faculty Honors) ----
  { sem: "Fall 2025", ord: 7, subj: "AE",   num: "3610", title: "Exper Fluids & Solid Mech",    cr: 2, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%203610%20Syllabus-Experiments%20in%20Fluid%20and%20Solid%20Mechanics.pdf" },
  { sem: "Fall 2025", ord: 7, subj: "AE",   num: "4321", title: "Space System Design I",        cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2023/04/AE%204321%20-%20Syllabus%20Space%20I.pdf" },
  { sem: "Fall 2025", ord: 7, subj: "AE",   num: "4451", title: "Jet & Rocket Propulsion",      cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%204451%20Syllabus-Jet%20and%20Rocket%20Propulsion.pdf" },
  { sem: "Fall 2025", ord: 7, subj: "AE",   num: "4699", title: "Undergraduate Research",       cr: 1, grade: "A" },
  { sem: "Fall 2025", ord: 7, subj: "INTA", num: "3043", title: "Space Policy",                 cr: 3, grade: "A" },
  { sem: "Fall 2025", ord: 7, subj: "NRE",  num: "3208", title: "Nuclear Reactor Phys I",       cr: 3, grade: "A" },

  // ---- Spring 2026 (Faculty Honors) ----
  { sem: "Spring 2026", ord: 8, subj: "AE", num: "4132", title: "Finite Element Analysis",      cr: 3, grade: "A" },
  { sem: "Spring 2026", ord: 8, subj: "AE", num: "4322", title: "Space System Design II",       cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2023/04/AE%204322%20-%20Syllabus%20Space%20II.pdf" },
  { sem: "Spring 2026", ord: 8, subj: "AE", num: "4532", title: "Spacecraft Flight Dynam",      cr: 3, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%204532%20Syllabus-Spacecraft%20Flight%20Dynamics.pdf" },
  { sem: "Spring 2026", ord: 8, subj: "AE", num: "4610", title: "Dynamics & Control Lab",       cr: 2, grade: "A", syl: "https://ae.gatech.edu/sites/default/files/file/2022/12/AE%204610%20Syllabus-Dynamics%20and%20Control%20Laboratory.pdf" },
  { sem: "Spring 2026", ord: 8, subj: "AE", num: "4699", title: "Undergraduate Research",       cr: 2, grade: "A" },
  { sem: "Spring 2026", ord: 8, subj: "AE", num: "4803", title: "Special Topics",               cr: 3, grade: "A" }
];

// ============================================================
// AP / departmental exams behind the Pre-College Credit rows.
// Shown when the "ap exams" toggle is selected on cv.html.
// Fields: exam, score, cr (total GT credit awarded), equiv
// (the GT course(s) it became).
// ============================================================

const AP_EXAMS = [
  { exam: "AP Calculus BC",                  score: "5",    cr: 6, equiv: "MATH 1551 + 1552" },
  { exam: "AP Computer Science A",           score: "5",    cr: 3, equiv: "CS 1301" },
  { exam: "AP English Language & Composition", score: "5",  cr: 3, equiv: "ENGL 1101" },
  { exam: "AP Music Theory",                 score: "5",    cr: 3, equiv: "MUSI 2700" },
  { exam: "AP Physics 1",                    score: "5",    cr: 3, equiv: "PHYS 2XXX" },
  { exam: "AP Physics C: Mechanics",         score: "5",    cr: 4, equiv: "PHYS 2211" },
  { exam: "AP Physics C: E&M",               score: "5",    cr: 4, equiv: "PHYS 2212" },
  { exam: "AP Spanish Language & Culture",   score: "5",    cr: 9, equiv: "SPAN 2001 + 2002 + 3XXX" },
  { exam: "AP United States History",        score: "4",    cr: 3, equiv: "HIST 2111" },
  { exam: "GT Math Dept Exam [Linear Algebra]",               score: "Pass", cr: 2, equiv: "MATH 1553" }
];
