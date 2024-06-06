const colors = ["green", "orange", "yellow", "blue"];
let gameseq = [];
let playerseq = [];
let level = 0;
let started = false;

$(document).keypress(() => {
  if (!started) {
    $(".title-text").text(`Level ${level}`);
    started = true;
    nextsequence();
  }
});

function nextsequence() {
  playerseq = [];
  $(".title-text").text(`Level ${++level}`);
  let randnum = Math.floor(Math.random() * 4);
  let randcolor = colors[randnum];
  gameseq.push(randcolor);
  animate(randcolor);
}

$(".box").click(function () {
  let clickedcolor = $(this).attr("id");
  animate(clickedcolor);
  playerseq.push(clickedcolor);
  verify(playerseq.length - 1);
});

function verify(index) {
  if (gameseq[index] === playerseq[index]) {
    if (gameseq.length === playerseq.length) {
      setTimeout(() => {
        nextsequence();
      }, 1000);
    }
  } else {
    level = 0;
    started = false;
    $(".title-text").text("Game Over!!!. Press a key to restart");
    $("body").addClass("color");
    setTimeout(() => {
      $("body").removeClass("color");
    }, 100);
  }
}

function animate(component) {
  $("#" + component)
    .fadeOut(100)
    .fadeIn(100);
  $("#" + component).addClass("glow");
  setTimeout(() => {
    $("#" + component).removeClass("glow");
  }, 100);
}
