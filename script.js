const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

// Handle click event on menu button
hamburger.addEventListener("click", () => {
  console.log("clicked");
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("show");

  //   const classMenu = mobileMenu.classList;
  //   if (classMenu.contains("hide")) {
  //     classMenu.replace("hide", "show");
  //     disableScroll();
  //   } else if (classMenu.contains("show")) {
  //     classMenu.replace("show", "hide");
  //     enableScroll();
  //   }
  //   // Handle click event on links from mobile menu;
  //   const links = mobileMenu.querySelectorAll("a");
  //   links.forEach((l) =>
  //     l.addEventListener("click", () => {
  //       hamburger.classList.remove("open");
  //       classMenu.replace("show", "hide");
  //       enableScroll();
  //     })
  //);
});

function disableScroll() {
  document.body.classList.add("unscrollable");
}
function enableScroll() {
  document.body.classList.remove("unscrollable");
}

/* eslint-disable no-unused-vars */

const instructors = [
  {
    id: 1,
    name: "Azerty Uiop",
    title: "Lead at London Philarmonic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus",
    image: "images/instructors/instructor1.jpg",
  },
  {
    id: 2,
    name: "Qwertz Danablu",
    title: '"The Saxophon King"',
    description:
      "Dolores vero facilis odio animi error necessitatibus, soluta odit dicta.",
    image: "images/instructors/instructor2.jpg",
  },
  {
    id: 3,
    name: "Jane Doe",
    title: '"Mrs. Violin"',
    description:
      "Tenetur deleniti illum maxime consequuntur quam, eius, ducimus voluptate!",
    image: "images/instructors/instructor3.jpg",
  },
  {
    id: 4,
    name: "Guillermo Whatever",
    title: '"Guitar Hero"',
    description: "Earum veritatis iure vitae ullam saepe soluta sint natus non",
    image: "images/instructors/instructor4.jpg",
  },
  {
    id: 5,
    name: "Hans Somename",
    title: '"Piano Master"',
    description:
      "Est perspiciatis perferendis impedit quo. Libero, iusto. Eveniet, ipsa",
    image: "images/instructors/instructor5.jpg",
  },
  {
    id: 6,
    name: "Eve Anonymous",
    title: '"The Angel\'s Voice"',
    description:
      "Recusandae officiis odit voluptates, aliquam, alias ipsam aperiam quas",
    image: "images/instructors/instructor6.jpg",
  },
];

function codeForInstructor(instructor) {
  return `<article class="instructor">
    <div class="img-container">
    <img src="${instructor.image}" alt="Photo of the instructor named ${instructor.name}">
   </div>
    <div class="instructor-text">
        <h3 class="instructor-name">${instructor.name}</h3>
        <h4 class="instructor-title">${instructor.title}</h4>
        <div class="separator"></div>
        <p class="instructor-description">${instructor.description}</p>
    </div>
</article>`;
}

function codeForInstructors(instructors) {
  return instructors.map((i) => codeForInstructor(i)).join("");
}
