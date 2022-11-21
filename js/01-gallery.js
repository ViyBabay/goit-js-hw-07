import { galleryItems } from './gallery-items.js';
// Change code below this line

const newGallery = document.querySelector('.gallery');
const galleryItemsMarkup = galleryItemsMarkupCreate(galleryItems);

newGallery.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

function galleryItemsMarkupCreate(pics) {
    return pics
    .map((pic) => {
      const { preview, original, description } = pic;
      return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}/>
     </a>
        </div>`;
    })
    .join("");
}

newGallery.addEventListener("click", selectPic);

function selectPic(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}", width = "800", height = "600">`
  );
    instance.show();
    
    newGallery.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        instance.close();
      }
    });
}
