import { projects } from "./projectsFactory";

export const homeTemplateTags = () => {
  return `
<img src="" alt="foto mia">
<h2>Alan Coste</h2>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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
   <img src="" alt="empresa">
   <div>
   <a href="">Empresa</a>
   <h4>Puesto</h4>
   </div>
   <ul>
     <li></li>
     <li></li>
     <li></li>
   </ul>
 </div>
 `
};

// const createProject = (img, proyecto, parrafo)
export const projectsTemplateTags = (project) => {
  return `
<div class="projectContainer">
  <img src="./hamburguesa.jpg" alt="${project.proyecto}">
  <h1>${project.proyecto}</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem neque, officiis natus accusantium iste
    tenetur
    ad inventore numquam suscipit culpa. Temporibus, laudantium? Sapiente reprehenderit consequatur voluptate
    similique acc
    usantium veniam perspiciatis.</p>
</div>
`
}


