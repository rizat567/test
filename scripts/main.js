var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
	} else {
	  myImage.setAttribute ('src','images/firefox.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');
function setUserName() {
  var myName = prompt('Пожалуйста введите ваше имя.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Добро пожаловать, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Добро пожаловать, ' + storedName;
}
myButton.onclick = function() {
    console.log('clicked')
  setUserName();
}
