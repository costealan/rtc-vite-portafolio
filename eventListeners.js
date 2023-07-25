import { homeBtn, projectsBtn, experienceBtn } from "./domElements";
import { renderHomeTags, renderExperienceTags } from "./renderTags";

export const homeBtnEventListener = () => {
  homeBtn.addEventListener('click', function () {
    contentContainer.innerHTML = '';
    renderHomeTags();
  })
}
projectsBtn.addEventListener('click', function () {
  contentContainer.innerHTML = '';
  re
})
export const experienceBtnEventListener = () => {
  experienceBtn.addEventListener('click', function () {
    contentContainer.innerHTML = '';
    renderExperienceTags();
  })
}