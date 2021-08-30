//parte js
var play = document.getElementById('play');
var audio = document.getElementById('audio');
var count = 0;

function playpause() {
    if (count == 0) {
        count = 1;
        audio.play();
        play.innerHTML = '<img src="./assets/pause icon.png" height="20" width="20" alt="el pause pero no funca">';
    } else {
        count = 0;
        audio.pause();
        play.innerHTML = '<img src="./assets/play2 icon.png" height="20" width="20" alt="el pause pero no funca">';

    }
}



