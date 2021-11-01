import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
	gallery: document.querySelector(".gallery"),
};

const createItemMarkup = ({ preview, original, description }) =>
	`<div class="gallery__item">
		<a class="gallery__link" href="${preview}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</div>`;

const renderGalleryMarkup = galleryItems => {
	refs.gallery.innerHTML = [...galleryItems]
		.map(item => createItemMarkup(item))
		.join("");
};

const onClickGallery = e => {
	e.preventDefault();

	const lightbox = basicLightbox.create(
		`<img src="${e.target.dataset.source}">`
	);
	lightbox.show();

	document.addEventListener(
		"keydown",
		e => {
			if (e.key === "Escape") lightbox.close();
		},
		{ once: true }
	);
};

renderGalleryMarkup(galleryItems);

refs.gallery.addEventListener("click", onClickGallery);
