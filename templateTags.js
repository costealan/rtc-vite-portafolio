import { projects } from "./projectsFactory";

export const homeTemplateTags = () => {
  return `
<img src="" alt="foto mia">
<h2>Alan Coste</h2>
<h3>Programación fullstack</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ut eaque rem dolor magni est tempora at
  eligendi, nemo, omnis quisquam veniam error suscipit libero pariatur voluptatem distinctio iure ipsum!</p>
<div class="social">
  <img src="" alt="instagram">
  <img src="" alt="linkedin">
</div>
`
};

// const createExperience = (img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link)
export const experienceTemplateTags = () => {
  return `
 <div class="jobContainer">
   <img src="${img}" alt="${empresa}">
   <h3>${empresa}</h3>
   <h4>${fechas}</h4>
   <ul>
     <li>${responsabilidad1}</li>
     <li>${responsabilidad2}</li>
     <li>${responsabilidad3}</li>
   </ul>
   <a href="${link}">Sitio oficial de ${empresa}</a>
 </div>
 `
};

// const createProject = (img, proyecto, parrafo)
export const projectsTemplateTags = (project) => {
  return `
<div class="projectContainer">
  <img src="" alt="imagen del proyecto">
  <h3>Nombre del proyect</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem neque, officiis natus accusantium iste
    tenetur
    ad inventore numquam suscipit culpa. Temporibus, laudantium? Sapiente reprehenderit consequatur voluptate
    similique acc
    usantium veniam perspiciatis.</p>
</div>
`
}

export const renderAllProjects = () => projects.forEach(project => projectsTemplateTags(project))
