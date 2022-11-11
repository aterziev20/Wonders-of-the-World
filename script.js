document.addEventListener("DOMContentLoaded", function () {
  // preloader

  let loader = document.querySelector("#preloader");
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  // onmousemove effect

  const gallery = document.querySelector(".gallery");
  const moving = document.querySelector(".movingWindow");

  moving.addEventListener("mousemove", (e) => {
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

  // On click of image make information visible

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

  // close information

  previewBox.forEach((close) => {
    close.querySelector(".fa-xmark").onclick = () => {
      close.classList.remove("active");
      preveiwContainer.style.display = "none";
    };
    window.onkeyup = (event) => {
      if (event.keyCode == 27) {
        if ((preveiwContainer.style.display = "none")) {
          for (let i = 0; i < previewBox.length; i++) {
            previewBox[i].classList.remove("active");
          }
        }
      }
    };
  });

  // Arrows to see next or previous image

  let previousInfo = document.querySelector("#leftArrow");
  let nextInfo = document.querySelector("#rightArrow");

  previousInfo.onclick = () => {
    if (previewBox[0].classList.contains("active")) {
      previewBox[0].classList.remove("active");
      previewBox[13].classList.add("active");
    } else if (previewBox[1].classList.contains("active")) {
      previewBox[1].classList.remove("active");
      previewBox[0].classList.add("active");
    } else if (previewBox[2].classList.contains("active")) {
      previewBox[2].classList.remove("active");
      previewBox[1].classList.add("active");
    } else if (previewBox[3].classList.contains("active")) {
      previewBox[3].classList.remove("active");
      previewBox[2].classList.add("active");
    } else if (previewBox[4].classList.contains("active")) {
      previewBox[4].classList.remove("active");
      previewBox[3].classList.add("active");
    } else if (previewBox[5].classList.contains("active")) {
      previewBox[5].classList.remove("active");
      previewBox[4].classList.add("active");
    } else if (previewBox[6].classList.contains("active")) {
      previewBox[6].classList.remove("active");
      previewBox[5].classList.add("active");
    } else if (previewBox[7].classList.contains("active")) {
      previewBox[7].classList.remove("active");
      previewBox[6].classList.add("active");
    } else if (previewBox[8].classList.contains("active")) {
      previewBox[8].classList.remove("active");
      previewBox[7].classList.add("active");
    } else if (previewBox[9].classList.contains("active")) {
      previewBox[9].classList.remove("active");
      previewBox[8].classList.add("active");
    } else if (previewBox[10].classList.contains("active")) {
      previewBox[10].classList.remove("active");
      previewBox[9].classList.add("active");
    } else if (previewBox[11].classList.contains("active")) {
      previewBox[11].classList.remove("active");
      previewBox[10].classList.add("active");
    } else if (previewBox[12].classList.contains("active")) {
      previewBox[12].classList.remove("active");
      previewBox[11].classList.add("active");
    } else if (previewBox[13].classList.contains("active")) {
      previewBox[13].classList.remove("active");
      previewBox[12].classList.add("active");
    }
  };
  nextInfo.onclick = () => {
    if (previewBox[0].classList.contains("active")) {
      previewBox[0].classList.remove("active");
      previewBox[1].classList.add("active");
    } else if (previewBox[1].classList.contains("active")) {
      previewBox[1].classList.remove("active");
      previewBox[2].classList.add("active");
    } else if (previewBox[2].classList.contains("active")) {
      previewBox[2].classList.remove("active");
      previewBox[3].classList.add("active");
    } else if (previewBox[3].classList.contains("active")) {
      previewBox[3].classList.remove("active");
      previewBox[4].classList.add("active");
    } else if (previewBox[4].classList.contains("active")) {
      previewBox[4].classList.remove("active");
      previewBox[5].classList.add("active");
    } else if (previewBox[5].classList.contains("active")) {
      previewBox[5].classList.remove("active");
      previewBox[6].classList.add("active");
    } else if (previewBox[6].classList.contains("active")) {
      previewBox[6].classList.remove("active");
      previewBox[7].classList.add("active");
    } else if (previewBox[7].classList.contains("active")) {
      previewBox[7].classList.remove("active");
      previewBox[8].classList.add("active");
    } else if (previewBox[8].classList.contains("active")) {
      previewBox[8].classList.remove("active");
      previewBox[9].classList.add("active");
    } else if (previewBox[9].classList.contains("active")) {
      previewBox[9].classList.remove("active");
      previewBox[10].classList.add("active");
    } else if (previewBox[10].classList.contains("active")) {
      previewBox[10].classList.remove("active");
      previewBox[11].classList.add("active");
    } else if (previewBox[11].classList.contains("active")) {
      previewBox[11].classList.remove("active");
      previewBox[12].classList.add("active");
    } else if (previewBox[12].classList.contains("active")) {
      previewBox[12].classList.remove("active");
      previewBox[13].classList.add("active");
    } else if (previewBox[13].classList.contains("active")) {
      previewBox[13].classList.remove("active");
      previewBox[0].classList.add("active");
    }
  };
});
