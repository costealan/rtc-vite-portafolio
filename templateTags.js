import { projects } from "./projectsFactory";

export const homeTemplateTags = () => {
  return `
<img src="./public/leon-cuadrada.jpg" alt="foto mia">
<h2>Alan Coste</h2>
<p>¡Hola! Soy un entusiasta aprendiz de programación y amante de la fotografía y la música. Aquí, en esta plataforma, canalizo mi creatividad con la ayuda de la inteligencia artificial para crear cautivadores mockups. Exploro la intersección entre el arte digital y la tecnología, mientras sigo mi pasión por el código, la expresión visual y la innovación</p>
<div class="social">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png?20200512141346 " alt="instagram">
  <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="linkedin">
</div>
`
};

// const createExperience = (img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link)
export const experienceTemplateTags = (experience) => {
  console.log(experience)
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
 `
};

// const createProject = (img, proyecto, parrafo)
export const projectsTemplateTags = (project) => {
  return `
<div class="${project.layout}">
 <img src="${project.img}" alt="${project.proyecto}">
  <h1>${project.proyecto}</h1>
  <p>${project.text}</p>
</div>
`
}


