document.addEventListener("DOMContentLoaded", function() {
  const skills = [
    { category: "Database", skill: "SQL" },
    { category: "Frontend", skill: "HTML" },
    { category: "Frontend", skill: "CSS" },
    { category: "Frontend", skill: "JavaScript" },
    { category: "Frontend", skill: "Ajax" },
    { category: "Frontend", skill: "React JS" },
    { category: "Backend", skill: "Java" }
  ];

  const skillsSlider = document.getElementById("skills");

  skills.forEach(skill => {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
    skillCard.innerHTML = `
      <h3>${skill.skill}</h3>
      <p>${skill.category}</p>
    `;
    skillsSlider.appendChild(skillCard);
  });
});
