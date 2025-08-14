/* Current Year */
document.getElementById("year").textContent = new Date().getFullYear();

/* Audio Button */
const cornerButton = document.getElementById('cornerButton');

cornerButton.addEventListener('click', () => {
  cornerButton.classList.toggle('clicked');
});