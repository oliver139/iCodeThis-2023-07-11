window.onload = async e => {
  const msgbar = document.getElementById("msgbar");
  const closeMsg = document.getElementById("closeMsg");

  const hideMsg = () => {
    msgbar.addEventListener("transitionend", e => {
      msgbar.remove();
    }); 
    msgbar.classList.add("hide");
  }

  const timer = setTimeout(() => {
    hideMsg();
  }, 5000);

  closeMsg.addEventListener("click", e => {
    clearTimeout(timer);
    hideMsg();
  });
}