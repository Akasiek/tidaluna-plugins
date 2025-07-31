import { fetchRandomAlbum } from "./fetchRandomAlbum";

export const removeButtonIfPresent = () => {
  document.querySelector(".luckyBtnContainer")?.remove();
}

export const insertButtonAfterHeaderTitle = (pageContainer: Element) => {
  const header = pageContainer.querySelector("h1");
  if (header) {
    header.insertAdjacentElement("afterend", getButtonContainer());
  }
}

const getButtonContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "luckyBtnContainer";

  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = `<svg viewBox="0 0 20 20"><use href="#player__shuffle"></use></svg>`;
  button.onclick = fetchRandomAlbum;

  container.appendChild(button);
  return container;
}