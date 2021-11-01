import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
	gallery: document.querySelector(".gallery"),
};

const createItemMarkup = ({ preview, original, description }) =>
	`<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				alt="${description}"
			/>
		</a>
	</div>`;

const renderGalleryMarkup = galleryItems => {
	refs.gallery.innerHTML = [...galleryItems]
		.map(item => createItemMarkup(item))
		.join("");
};

renderGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link");
lightbox.options.captionsData = "alt";
