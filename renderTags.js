import { homeTemplateTags, experienceTemplateTags, projectsTemplateTags } from "./templateTags";
import { contentContainer } from "./domElements";
import { projects } from "./projectsFactory";
import { experiences } from "./experienceFactory";

export const renderHomeTags = () => {
  const homeTags = homeTemplateTags();
  contentContainer.classList.remove('projects');
  contentContainer.classList.remove('experience');
  contentContainer.classList.add('homePage');
  contentContainer.innerHTML += homeTags;
}
export const renderProjectsTemplateTags = () => {
  contentContainer.classList.remove('homePage');
  contentContainer.classList.remove('experience');
  contentContainer.classList.add('projects');
  projects.forEach(project => {
    let projectTags = projectsTemplateTags(project)
    contentContainer.innerHTML += projectTags
  })

}
export const renderExperienceTags = () => {
  contentContainer.classList.remove('homePage');
  contentContainer.classList.remove('projects');
  contentContainer.classList.add('experience');
  experiences.forEach(experience => {
    let experienceTags = experienceTemplateTags();
    contentContainer.innerHTML += experienceTags;
  })
}


