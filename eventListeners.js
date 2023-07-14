import { homeBtn, projectsBtn, experienceBtn } from "./domElements";
import { renderHomeTags } from "./renderTags";
export const homeBtnEventListener = () => {
  homeBtn.addEventListener('click', function () {
    contentContainer.innerHTML = '';
    renderHomeTags();
  })
}
projectsBtn.addEventListener('click', function () {
  contentContainer.innerHTML = '';

})
experienceBtn.addEventListener('click', function () {
  contentContainer.innerHTML = '';

})