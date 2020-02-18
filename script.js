console.log('hello world');


for (let i = 0; i < 10; i++) {

	console.log('i love nijeh');
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}