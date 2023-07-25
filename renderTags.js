import { homeTemplateTags, experienceTemplateTags } from "./templateTags";
import { contentContainer } from "./domElements";

export const renderHomeTags = () => {
  const homeTags = homeTemplateTags();
  contentContainer.innerHTML += homeTags;
}
export const renderExperienceTags = () => {
  const experienceTags = experienceTemplateTags();
  contentContainer.innerHTML += experienceTags;
}


