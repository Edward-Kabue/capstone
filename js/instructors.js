const instructorsContainer = document.querySelector(".instructors-container");

const instructors = [
  {
    id: 1,
    name: "Abhishek Muk",
    title: "Product Lead",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusamus",
    image: "css/assets/jpg/abhishekmuk.jpeg",
  },
  {
    id: 2,
    name: "Anaand esdelvalle",
    title: "Software Engineer",
    description:
      "Dolores vero facilis odio animi error necessitatibus, soluta odit dicta.",
    image: "css/assets/jpg/anaandresdelvalle.jpeg",
  },
  {
    id: 3,
    name: "Evelyn watts",
    title: "Creative Lead",
    description:
      "Tenetur deleniti illum maxime consequuntur quam, eius, ducimus voluptate!",
    image: "css/assets/jpg/evelynwatts.jpeg",
  },
  {
    id: 4,
    name: "David wacht ",
    title: "Product Manager",
    description: "Earum veritatis iure vitae ullam saepe soluta sint natus non",
    image: "css/assets/jpg/davidwachtendonk.jpeg",
  },
  {
    id: 5,
    name: "caroline Hynes",
    title: "Software Engineer",
    description:
      "Est perspiciatis perferendis impedit quo. Libero, iusto. Eveniet, ipsa",
    image: "css/assets/jpg/carolinehynes.jpeg",
  },
  {
    id: 6,
    name: "charles li",
    title: "Software Engineer",
    description:
      "Recusandae officiis odit voluptates, aliquam, alias ipsam aperiam quas",
    image: "css/assets/jpg/charlesli.jpeg",
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
instructorsContainer.innerHTML = codeForInstructors(instructors);
function codeForInstructors(instructors) {
  return instructors.map((i) => codeForInstructor(i)).join("");
}
