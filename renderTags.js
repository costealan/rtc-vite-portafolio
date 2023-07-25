import { homeTemplateTags, experienceTemplateTags, projectsTemplateTags } from "./templateTags";
import { contentContainer } from "./domElements";

export const renderHomeTags = () => {
  const homeTags = homeTemplateTags();
  contentContainer.classList.add('homePage');
  contentContainer.innerHTML += homeTags;
}
export const renderProjectsTemplateTags = () => {
  const projectTags = projectsTemplateTags();
  contentContainer.classList.add('projects');
  contentContainer.innerHTML += projectTags
}
export const renderExperienceTags = () => {
  const experienceTags = experienceTemplateTags();
  contentContainer.classList.add('experience')
  contentContainer.innerHTML += experienceTags;
}


