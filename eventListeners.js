import { homeBtn, projectsBtn, experienceBtn } from "./domElements";
import { renderHomeTags, renderexperienceTags } from "./renderTags";
export const homeBtnEventListener = () => {
  homeBtn.addEventListener('click', function () {
    contentContainer.innerHTML = '';
    renderHomeTags();
  })
}
projectsBtn.addEventListener('click', function () {
  contentContainer.innerHTML = '';
  renderexperienceTags();
})
experienceBtn.addEventListener('click', function () {
  contentContainer.innerHTML = '';

})