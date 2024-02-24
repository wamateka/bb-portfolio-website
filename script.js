new Splide("#activities-Splide", {
  type: "loop",
  drag: "free",
  arrows: false,
  fixedHeight: "75vh",
  perPage: 1,
  perMove: 1,
  snap: true,
  gap: "1.6rem",
  padding: "6vw",
  pagination: "",
  autoScroll: {
    speed: 0.4,
  },
  breakpoints: {
    1000: {
      padding: "3vw",
      fixedHeight: "50vh",
      autoScroll: {
        speed: 0.2,
      },
    },
  },
}).mount(window.splide.Extensions);

new Splide("#awards-Splide", {
  type: "loop",
  drag: "free",
  arrows: false,
  fixedHeight: "80vh",
  perPage: 3,
  snap: true,
  gap: "1.6rem",
  padding: "3.5vw",
  pagination: "",
  autoScroll: {
    speed: 0.7,
  },
  breakpoints: {
    950: {
      perPage: 2,
      fixedHeight: "65vh",
      autoScroll: {
        speed: 0.5,
      },
    },
    600: {
      perPage: 1,
      autoScroll: {
        speed: 0.2,
      },
    },
  },
}).mount(window.splide.Extensions);
