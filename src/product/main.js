const root = document.body;
const allImages = document.querySelectorAll("img");
const overlayer = document.createElement("div");
overlayer.classList.add("overlayer");

allImages.forEach((item) => item.addEventListener("click", imagesHandler));
function imagesHandler(Event) {
  let currentImage = document.createElement("img");
  currentImage.src = Event.target.src;
  currentImage.className = "overlayer-img";

  root.appendChild(overlayer);
  root.appendChild(currentImage);

  overlayer.addEventListener("click", () => {
    currentImage.remove();
    overlayer.remove();
  });
}
