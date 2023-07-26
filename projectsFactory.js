//let newProject = project(img, proyecto, parrafo)
import { renderProjectsTemplateTags } from "./renderTags";

export const projects = [];

const createProject = (img, proyecto) => {
  let project = {
    img: img,
    proyecto: proyecto,
    // parrafo : parrafo,
  }
  projects.push(project)
}

const listOfProjects = () => {
  let project1 = createProject('', 'proyecto 1');
  let project2 = createProject('', 'proyecto 2');
  let project3 = createProject('', 'proyecto 3');
  let project4 = createProject('', 'proyecto 4');
  let project5 = createProject('', 'proyecto 5');
};
listOfProjects()





