document.addEventListener("DOMContentLoaded", () => {
  const galleryLinks = Array.from(document.querySelectorAll(".gallery-section .image-grid a"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.querySelector(".lightbox-close");
  const prevButton = document.querySelector(".lightbox-prev");
  const nextButton = document.querySelector(".lightbox-next");

  if (!galleryLinks.length || !lightbox || !lightboxImage) return;

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;
    const link = galleryLinks[currentIndex];
    const image = link.querySelector("img");

    lightboxImage.src = link.getAttribute("href");
    lightboxImage.alt = image ? image.alt : "";
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  function showNext() {
    const nextIndex = (currentIndex + 1) % galleryLinks.length;
    showImage(nextIndex);
  }

  function showPrev() {
    const prevIndex = (currentIndex - 1 + galleryLinks.length) % galleryLinks.length;
    showImage(prevIndex);
  }

  galleryLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showImage(index);
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  nextButton.addEventListener("click", showNext);
  prevButton.addEventListener("click", showPrev);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowRight") showNext();
    if (event.key === "ArrowLeft") showPrev();
  });
});