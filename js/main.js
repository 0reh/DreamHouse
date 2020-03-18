let video = document.getElementById('video');
let buttonPlayMain = document.querySelector('.btn-play-main');
let btnPlayPause = document.getElementById('play-pause');
let stopBtn = document.getElementById('stop');
let muteBtn = document.getElementById('mute');
let progress = document.getElementById('progress');

if (video) {
  video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        buttonPlayMain.classList.add('button-main-hidden');
        btnPlayPause.classList.add('pause');
    } else {
        video.pause();
        buttonPlayMain.classList.remove('button-main-hidden');
        btnPlayPause.classList.remove('pause');
    }
  });
}

if(buttonPlayMain) {
  buttonPlayMain.addEventListener('click', function () {
    if(video.paused) {
      video.play();
      buttonPlayMain.classList.add('button-main-hidden');
      btnPlayPause.classList.add('pause');
    }
  });
}

if(btnPlayPause) {
  btnPlayPause.addEventListener('click', function() {
    if(video.paused) {
      btnPlayPause.classList.remove('play');
      btnPlayPause.classList.add('pause');
      buttonPlayMain.classList.add('button-main-hidden');
      video.play();
    } else {
      btnPlayPause.classList.remove('pause');
      btnPlayPause.classList.add('play');
      buttonPlayMain.classList.remove('button-main-hidden');
      video.pause();
    }
  });
}

if(stopBtn) {
  stopBtn.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    buttonPlayMain.classList.remove('button-main-hidden');
    btnPlayPause.classList.remove('pause');
  });
}

if(muteBtn) {
  muteBtn.addEventListener('click', function () {
    if (video.muted == false) {
        muteBtn.classList.remove('mute-on');
        muteBtn.classList.add('mute-off');
        video.muted = true;
    } else {
      muteBtn.classList.remove('mute-off');
      muteBtn.classList.add('mute-on');
      video.muted = false;
    }
  });
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger').toggleClass('active');
      $('body').toggleClass('lock');
  });
  $('.header__burger').click(function(event) {
      $('.menu-desktop').toggleClass('active');
  });

  $("#menu-desktop").on("click", "a", function(event) {
      event.preventDefault();
      let id = $(this).attr('href'),
          top = $(id).offset().top - 0 + 'px';
      $('body,html').animate({ scrollTop: top }, 900);
  });

  $("#menu-desktop.active").on("click", "a", function(event) {
      event.preventDefault();
      let id = $(this).attr('href'),
          top = $(id).offset().top - 0 + 'px';
      $('body,html').animate({ scrollTop: top }, 900);
  });
});
