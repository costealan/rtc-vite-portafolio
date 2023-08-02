import { homeBtn, projectsBtn, experienceBtn, contentContainer } from "./domElements";
import { renderHomeTags, renderExperienceTags, renderProjectsTemplateTags } from "./renderTags";


export const homeBtnEventListener = () => {
  homeBtn.addEventListener('click', function () {
    contentContainer.innerHTML = '';
    renderHomeTags();
  })
};
export const projectsBtnEventListener = () => {
  projectsBtn.addEventListener('click', function () {
    contentContainer.innerHTML = '';
    
    renderProjectsTemplateTags();
  })
};
export const experienceBtnEventListener = () => {
  experienceBtn.addEventListener('click', function () {
    contentContainer.innerHTML = '';
    renderExperienceTags();
  })
};