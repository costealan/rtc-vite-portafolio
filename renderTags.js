import { homeTemplateTags, experienceTemplateTags, projectsTemplateTags } from "./templateTags";
import { contentContainer } from "./domElements";
import { projects } from "./projectsFactory";
import { experiences } from "./experienceFactory";

export const renderHomeTags = () => {
  const homeTags = homeTemplateTags();
  contentContainer.classList.add('homePage');
  contentContainer.innerHTML += homeTags;
}
export const renderProjectsTemplateTags = () => {
  contentContainer.classList.add('projects');
  projects.forEach(project => {
    let projectTags = projectsTemplateTags(project)
    console.log(project.proyecto)
    contentContainer.innerHTML += projectTags
  })

}
export const renderExperienceTags = () => {
  contentContainer.classList.add('experience');
  experiences.forEach(experience => {
    let experienceTags = experienceTemplateTags();
    contentContainer.innerHTML += experienceTags;
  })

}


