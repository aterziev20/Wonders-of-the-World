document.addEventListener("DOMContentLoaded", function () {
  // preloader

  let loader = document.querySelector("#preloader");
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  // onmousemove effect

  const gallery = document.querySelector(".gallery");

  window.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth;
    const yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth;
    const maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1.5;
    const panY = maxY * yDecimal * -1.1;

    gallery.animate(
      {
        transform: `translate(${panX}px, ${panY}px)`,
      },
      {
        duration: 8000,
        fill: "forwards",
        easing: "ease",
      }
    );
  });

  // On click of image make another div visible

  let preveiwContainer = document.querySelector(".info");
  let previewBox = preveiwContainer.querySelectorAll(".image-info");

  document.querySelectorAll(".gallery .tile").forEach((product) => {
    product.onclick = () => {
      preveiwContainer.style.display = "flex";
      let name = product.getAttribute("data-name");
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
        }
      });
    };
  });

  // close info

  previewBox.forEach((close) => {
    close.querySelector(".fa-xmark").onclick = () => {
      close.classList.remove("active");
      preveiwContainer.style.display = "none";
    };
    window.onkeyup = (event) => {
      if (event.keyCode == 27) {
        close.classList.remove("active");
        preveiwContainer.style.display = "none";
      }
    };
  });

  // Arrows to see different image

  const left = document.getElementById("leftArrow");
  const right = document.getElementById("rightArrow");

  left.addEventListener("click", () => {
    if (target > 1) {
      target + 1;
    }
  });
  right.addEventListener("click", () => {
    if (target < 1) {
      images.length++;
    }
  });
});
