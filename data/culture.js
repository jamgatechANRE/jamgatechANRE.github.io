const GOODREADS_URL = "";

const BOOKS = [
  { title: "Letters to My Palestinian Neighbor", author: "Yossi Klein Halevi", img: "assets/culture/media/letters-palestinian-neighbor.jpg" },
  { title: "Ender's Game", author: "Orson Scott Card", img: "assets/culture/media/enders-game.jpg" },
  { title: "Old Man's War", author: "John Scalzi", img: "assets/culture/media/old-mans-war.jpg" },
  { title: "Son of Hamas", author: "Mosab Hassan Yousef", img: "assets/culture/media/son-of-hamas.jpg" },
  { title: "The Perks of Being a Wallflower", author: "Stephen Chbosky", img: "assets/culture/media/perks-of-being-a-wallflower.jpg" },
  { title: "When Nietzsche Wept", author: "Irvin D. Yalom", img: "assets/culture/media/when-nietzche-wept.jpg" }
];

const TV_SHOWS = [
  { title: "Man in the High Castle", creator: "Frank Spotnitz", img: "assets/culture/media/man-in-the-high-castle.jpg" },
  { title: "The Boys", creator: "Eric Kripke", img: "assets/culture/media/the-boys.jpg" },
  { title: "The Spy", creator: "Gideon Raff", img: "assets/culture/media/the-spy.jpg" },
  { title: "Game of Thrones", creator: "David Benioff, D.B. Weiss", img: "assets/culture/media/game-of-thrones.jpg" },
  { title: "Narcos", creator: "Chris Brancato, Carlo Bernard", img: "assets/culture/media/narcos.jpg" },
  { title: "Star Wars: The Clone Wars", creator: "George Lucas, Dave Filoni", img: "assets/culture/media/swtcw.jpg" },
  { title: "Avatar the Last Airbender", creator: "Michael Dante DiMartino, Bryan Konietzko", img: "assets/culture/media/avatar.jpg" },
  { title: "Moon Knight", creator: "Jeremy Slater", img: "assets/culture/media/moon-knight.jpg" },
  { title: "Severance", creator: "Dan Erickson", img: "assets/culture/media/severance.jpg" },
  { title: "Heroes", creator: "Tim Kring", img: "assets/culture/media/heroes.jpg" },
  { title: "Andor", creator: "Tony Gilroy", img: "assets/culture/media/andor.jpg" }
];

const MOVIES = [
  { title: "Baby Driver", creator: "Edgar Wright", img: "assets/culture/media/baby-driver.jpg" },
  { title: "Iron Man", creator: "Jon Favreau", img: "assets/culture/media/iron-man.jpg" },
  { title: "Interstellar", creator: "Christopher Nolan", img: "assets/culture/media/interstellar.jpg" },
  { title: "Dune 2", creator: "Denis Villeneuve", img: "assets/culture/media/dune-2.jpg" },
  { title: "V for Vendetta", creator: "James McTeigue", img: "assets/culture/media/v-for-vendetta.jpg" },
  { title: "The Imitation Game", creator: "Morten Tyldum", img: "assets/culture/media/imitation-game.jpg" },
  { title: "The Dictator", creator: "Larry Charles", img: "assets/culture/media/dictator.jpg" },
  { title: "Inception", creator: "Christopher Nolan", img: "assets/culture/media/inception.jpg" },
  { title: "The Shape of Water", creator: "Guillermo del Toro", img: "assets/culture/media/shape-of-water.jpg" }
];

const PODCASTS = [
  { title: "Conversations with Coleman", creator: "Coleman Hughes", img: "" },
  { title: "Ask Haviv Anything", creator: "Call Me Back", img: "" },
  { title: "Making Sense", creator: "Sam Harris", img: "" }
];

const RESTAURANTS = [
  {
    name: "Karyu",
    location: "Miami (Design District)",
    mapUrl: "https://maps.google.com/maps?q=Karyu+Miami+Design+District&t=&z=15&ie=UTF8&iwloc=&output=embed",
    img: "assets/culture/restaurants/karyu.jpg",
    url: "https://karyu-mia.com/"
  },
  {
    name: "The Mayfair Chippy",
    location: "London (Mayfair)",
    mapUrl: "https://maps.google.com/maps?q=The+Mayfair+Chippy+London&t=&z=15&ie=UTF8&iwloc=&output=embed",
    img: "assets/culture/restaurants/mayfair.jpg",
    url: "https://mayfairchippy.com/"
  },
  {
    name: "Le Soufflé",
    location: "Paris",
    mapUrl: "https://maps.google.com/maps?q=Le+Souffle+Paris&t=&z=15&ie=UTF8&iwloc=&output=embed",
    img: "assets/culture/restaurants/lesouffle.jpg",
    url: "https://www.lesouffle.fr/"
  },
  {
    name: "Corral de la Morería",
    location: "Madrid",
    mapUrl: "https://maps.google.com/maps?q=Corral+de+la+Moreria+Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed",
    img: "assets/culture/restaurants/corral-de-la-moreria.jpg",
    url: "https://www.corraldelamoreria.com/"
  },
  {
    name: "Aria",
    location: "Panama City",
    mapUrl: "https://maps.google.com/maps?q=Aria+Panama+City&t=&z=15&ie=UTF8&iwloc=&output=embed",
    img: "assets/culture/restaurants/aria.jpg",
    url: "https://ariapanama.com/"
  },
  {
    name: "Compartir",
    location: "Barcelona",
    mapUrl: "https://maps.google.com/maps?q=Compartir+Barcelona&t=&z=15&ie=UTF8&iwloc=&output=embed",
    img: "assets/culture/restaurants/compartir.jpg",
    url: "https://www.compartirbarcelona.com/"
  }
];
