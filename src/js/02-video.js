const throttle = require("lodash.throttle");
const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

function timeStamp(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.on("timeupdate", throttle(timeStamp, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
