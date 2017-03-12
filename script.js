var sounds = [
  "1.wav",
  "2.wav",
  "3.wav",
  "4.wav",
  "5.wav",
  "6.wav",
  "7.wav",
  "8.wav",
  "9.wav",
  "10.wav",
  "11.wav",
  "12.wav",
  "13.wav",
  "14.wav"
];

var oldSounds = [];

function playSound()
{
  //create random number
  //pick random sound from sounds array with random number
  var index = Math.floor(Math.random() * sounds.length);
  var randomSound = sounds[index];

  //create variable player and set the audio element "player" to it
  //embed the picked sound into the audio element "player's" src
  //add function for "player" to see if sound has started and ended
  //play sound
  var player = document.getElementById("player");
  player.src = randomSound;

  player.onplaying = function() //runs when media actually starts playing
  {
    document.getElementById("potato_image_div").style.pointerEvents = "none"; //div is not clickable
  }

  player.onended = function() //runs when the media has reached the end
  {
    document.getElementById("potato_image_div").style.pointerEvents = "auto"; //div is clickable
  }

  player.play();

  //splice randomSound from sounds array into var removed
  //then push that sound into oldSounds array
  var removed = sounds.splice(sounds.indexOf(randomSound), 1);
  oldSounds.push(removed[0]);

  //if all sounds played from sound array AND all sounds are now in oldSounds array
  //then move the sounds from oldSounds to sounds
  if (sounds.length === 0 && oldSounds.length === 14)
  {
    sounds = oldSounds;
    oldSounds = [];
  }
}
