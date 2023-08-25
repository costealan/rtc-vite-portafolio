//let newExperience = experience(img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link)
import { renderExperienceTags } from "./renderTags";
export const experiences = [];

const createExperience = (img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3) => {
  let experience = {
    img: img,
    empresa: empresa,
    fechas: fechas,
    responsabilidad1: responsabilidad1,
    responsabilidad2: responsabilidad2,
    responsabilidad3: responsabilidad3,
  }
  experiences.push(experience)
}

const listOfExperiences = () => {
  let experience1 = createExperience("/logo1.jpg", "X", "2018-2019", "Ventas", "", "");
  let experience2 = createExperience("/logo2.jpg", "fotografía gastronómica", "2020-2021", "Fotografo de producto", "Cocinar y food stylist", "prop stylist");
  let experience3 = createExperience("/logo3.jpg", "Pasta artesanal", "2021-2022", "Desarrollo de recetas", "Preparación de la pasta", "Marketing");
  let experience4 = createExperience("/logo4.jpg", "AC social media", "2021-2022", "Planeación de contenido", "Creación de contenido audiovisual", "");
  let experience5 = createExperience("/logo5.jpg", "Y", "2018-2019", "Fotografía de arquitectura", "", "");
}
listOfExperiences()
