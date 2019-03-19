export const show = (x: number, y: number) => {
  const copyright = document.getElementById("copyright");
  if (!copyright) {
    return
  }
  copyright.style.left = `${x}px`;
  copyright.style.top = `${y}px`;
  copyright.classList.add("show");
};
