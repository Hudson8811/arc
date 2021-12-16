document.addEventListener("DOMContentLoaded", () => {
  const audioButton = document.getElementById("audio-button"),
    audioPlayer = document.getElementById("audio-player");

  const isPlaying = (audio) => !audio.paused;

  audioButton.addEventListener("click", (e) => {
    if (audioButton.classList.contains("active")) {
      audioButton.classList.remove("active");
      audioPlayer.pause();
    } else {
      audioButton.classList.add("active");
      audioPlayer.play();
    }
  });

  setTimeout(() => {
    if (isPlaying(audioPlayer)) {
      audioButton.classList.add("active");
    } else {
      audioButton.classList.remove("active");
    }
  }, 100);
});
