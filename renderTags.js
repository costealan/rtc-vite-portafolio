import { homeTemplateTags, experienceTemplateTags, projectsTemplateTags } from "./templateTags";
import { contentContainer } from "./domElements";
import { projects } from "./projectsFactory";

export const renderHomeTags = () => {
  const homeTags = homeTemplateTags();
  contentContainer.classList.add('homePage');
  contentContainer.innerHTML += homeTags;
}
export const renderProjectsTemplateTags = () => {
  contentContainer.classList.add('projects');
  projects.forEach(project => {
    let projectTags = projectsTemplateTags()
    contentContainer.innerHTML += projectTags
  })

}
export const renderExperienceTags = () => {
  const experienceTags = experienceTemplateTags();
  contentContainer.classList.add('experience')
  contentContainer.innerHTML += experienceTags;
}


