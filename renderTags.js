import { homeTemplateTags } from "./templateTags";
import { contentContainer } from "./domElements";

export const renderHomeTags = () => {
  const homeTags = homeTemplateTags();
  contentContainer.innerHTML += homeTags;
}


