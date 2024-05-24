var settingsButton = document.getElementById('settingsButton');
var modal = document.getElementById('settingsModal');
var closeButton = document.querySelector('.close');
var audio = document.querySelector('audio');

settingsButton.addEventListener('click', function() {
    modal.style.display = 'block';
    audio.play(); 
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

var volumeInput = document.getElementById('volume');
volumeInput.addEventListener('input', function() {
    audio.volume = this.value / 100; 
});

var nameForm = document.getElementById("nameForm");
var nameFormContainer = document.getElementById("nameFormContainer");
var gameContainer = document.getElementById("gameContainer");

nameForm.onsubmit = function(event) {
  event.preventDefault();
  var playerName = document.getElementById("playerName").value;
  alert("Selamat datang, " + playerName + "!");
  nameFormContainer.style.display = "none";
  gameContainer.style.display = "block";
};

// Tambahan untuk menangani tombol background
var settingsButton = document.getElementById('settingsButton');
var modal = document.getElementById('settingsModal');
var closeButton = document.querySelector('.close');
var audio = document.querySelector('audio');

settingsButton.addEventListener('click', function() {
    modal.style.display = 'block';
    audio.play(); 
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

var volumeInput = document.getElementById('volume');
volumeInput.addEventListener('input', function() {
    audio.volume = this.value / 100; 
});

// Penanganan untuk memilih latar belakang
var backgroundOptions = document.querySelectorAll('.background-option');

backgroundOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        var backgroundId = this.id;
        // Lakukan sesuatu dengan latar belakang yang dipilih, misalnya mengubah latar belakang permainan
        console.log('Selected background:', backgroundId);
    });
});

