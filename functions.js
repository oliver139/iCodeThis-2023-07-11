window.onload = async e => {
  const container = document.querySelector('.container');
  container.addEventListener("click", e => {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
  });
}