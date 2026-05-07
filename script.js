const enterButton = document.getElementById("enterMaison");

if (enterButton) {
  enterButton.addEventListener("click", () => {
    document.body.classList.add("entered");
    setTimeout(() => {
      document.getElementById("inside")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1500);
  });
}
