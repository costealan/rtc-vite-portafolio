//let newExperience = experience(img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link)
export const experiences = [];

const createExperience = (img, empresa, fechas, responsabilidad1, responsabilidad2, responsabilidad3, link) => {
  let experience = {
    img: img,
    empresa: empresa,
    fechas: fechas,
    responsabilidad1: responsabilidad1,
    responsabilidad2: responsabilidad2,
    responsabilidad3: responsabilidad3,
    link: link,
  }
  experiences.push(experience)
}

const listOfExperiences = () => {
  let experience1 = createExperience();
  let experience2 = createExperience();
  let experience3 = createExperience();
  let experience4 = createExperience();
  let experience5 = createExperience();
}
listOfExperiences()
