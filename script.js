document.addEventListener("DOMContentLoaded", function () {
  let loader = document.querySelector("#preloader");
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  const gallery = document.querySelector(".gallery");

  window.onmousemove = (e) => {
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
  };
});
