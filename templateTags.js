import { projects } from "./projectsFactory";

export const homeTemplateTags = () => {
  return `
<img src="/retrato.jpg" alt="foto mia">
<h2>Alan Coste</h2>
<p>Este sitio es un demo de como hacer una SPA con vanilla Javascript CSS y HTML, muestro mi cv y conceptos de dirección de arte con IA</p>
<div class="social">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png?20200512141346 " alt="instagram">
  <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="linkedin">
</div>
`;
};

// const createExperience = (img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link)
export const experienceTemplateTags = (experience) => {
  console.log(experience);
  return `
 <div class="jobContainer">
   <img src="${experience.img}" alt="${experience.empresa}">
   <div>
   <a href="">${experience.empresa}</a>
   <h4>${experience.fechas}</h4>
   </div>
   <ul>
     <li>${experience.responsabilidad1}</li>
     <li>${experience.responsabilidad2}</li>
     <li>${experience.responsabilidad3}</li>
   </ul>
 </div>
 `;
};

// const createProject = (img, proyecto, parrafo)
export const projectsTemplateTags = (project) => {
  return `
<div class="${project.layout}">
 <img src="${project.img}" alt="${project.proyecto}">
  <h1>${project.proyecto}</h1>
  <p>${project.text}</p>
</div>
`;
};
