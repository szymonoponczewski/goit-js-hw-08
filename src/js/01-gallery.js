import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  const listEl = `
  <li>
    <a class="gallery__item" href="${image.original}">
      <img class="gallery__image"
        src="${image.preview}"
        alt="${image.description}"
         />
    </a>
    </li>
  `;
  galleryEl.insertAdjacentHTML("beforeend", listEl);
});

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
});

const lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionDelay: 250,
});
