function playNote(tecla) {
  const audio = new Audio(`./audio/${tecla}.mp3`);
  audio.play();
}