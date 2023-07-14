import { homeTemplateTags, experienceTemplateTags } from "./templateTags";
import { contentContainer } from "./domElements";

export const renderHomeTags = () => {
  const homeTags = homeTemplateTags();
  contentContainer.innerHTML += homeTags;
}
export const renderexperienceTags = () => {
  const experienceTags = experienceTemplateTags();
  contentContainer.innerHTML += experienceTags;
}

