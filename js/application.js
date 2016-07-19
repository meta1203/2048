// Wait till the browser is ready to render the game (avoids glitches)
var gMan = null;
window.requestAnimationFrame(function () {
  gMan = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
