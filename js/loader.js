const overlay = document.getElementById("overlay");

export const loader = (state) => {
  if (state) {
    overlay.style.display = "flex";
  } else {
    overlay.style.display = "none";
  }
};
