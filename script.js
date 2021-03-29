window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads > div");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
  pads.forEach((pad, i) => {
    pad.addEventListener("click", function() {
      sounds[i].currentTime = 0;
      sounds[i].play();

      createBubble(i);
    })
  })

  const createBubble = (i) => {
    const visual = document.querySelector('.visual');

    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.animation = "pop 1s ease"
    bubble.style.backgroundColor = colors[i];

    bubble.addEventListener('animationend', function() {
      visual.removeChild(bubble)
    })
  };
});