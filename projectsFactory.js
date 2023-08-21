
import { renderProjectsTemplateTags } from "./renderTags";

export const projects = [];

const createProject = (proyecto, layout, img, text) => {
  let project = {
    proyecto: proyecto,
    layout: layout,
    img: img,
    text: text,
  }
  projects.push(project)
}

const listOfProjects = () => {
  let project1 = createProject('Mamut en NYCity', 'layout1', './assets/mamut.cuadrado.jpg', "En un giro del tiempo, un majestuoso mamut emergió en pleno Times Square, deslumbrando a la multitud moderna. Sus ojos reflejaban asombro y curiosidad mientras exploraba la metrópolis brillante. La ciudad y la antigüedad convergieron, recordándonos la eterna conexión con la historia. Un encuentro fugaz pero inolvidable entre dos épocas distintas.");
  let project2 = createProject('Carrera de astronautas', 'layout2', './assets/astronautas-horizontal.jpg', 'En la vastedad del espacio, Armstrong y Aldrin decidieron una carrera única: brincos lunares. Con gravedad reducida, como chavos en trampolín, compitieron por diversión. Aldrin arrancó rápido, pero Armstrong emparejó. Aterrizó con un brinco épico, ganando por narices. Celebraron como colegas, no rivales, con high-fives flotantes y risas cósmicas. Un recordatorio de que incluso en lo desconocido, la camaradería prevalece. Esa carrera quedó marcada en la historia como un paso ligero hacia la humanidad estelar.');
  let project3 = createProject('Marilyn Monroe futurista', 'layout3', './assets/marilyn-vertical.jpg', 'En los 60, Marilyn Monroe sorprendió al posar en un set futurista espacial. Su belleza icónica brilló como las estrellas. Años después, su imagen influyó en Haim Saban, creador de Power Rangers. El glamour y la conexión espacial de Monroe encendieron la chispa. Así, los héroes multicolores nacieron, uniendo galaxias contra el mal. En un giro de destino, la musa de los 60 inspiró la acción y el poder de los 90, dejando su huella en dos eras distintas.');
  let project4 = createProject('Pay de manzana', 'layout1', './assets/pay-cuadrada.jpg', 'En una cocina olvidada cerca de Chernóbil, reposaba un pay de manzana apetitoso, un recordatorio silencioso de un pasado radiante. Parecía inofensivo, tentando a los curiosos. Sin embargo, era un retrato tragicómico de la tragedia nuclear. Sus manzanas, una vez frescas, habían absorbido la radiación del desastre. Las migajas eran testigos de la soledad y el miedo. La apariencia dulce escondía la amargura de la realidad. Como un cuadro maldito, el pastel atestiguaba el desorden atómico, un monumento a lo que fue y nunca volverá a ser.');
  let project5 = createProject('Oso filósofo', 'layout2', './assets/oso-horizontal.jpg', 'El oso, con aire filosófico, contemplaba el horizonte como un sabio. Justo cuando la escena se volvía épica, una ardilla curiosa apareció y el oso saltó asustado. La ardilla le guiñó un ojo y el oso, de repente, se unió a una coreografía de baile espontáneo, convirtiendo la reflexión en una divertida danza con la naturaleza.');
};
listOfProjects()





