var popupBackground = document.getElementsByClassName("form-popup")[0];
let popup = document.getElementsByClassName("form-popup--inner")[0];
let formClose = document.getElementsByClassName("form-close")[0];
let showPopupButton = document.querySelectorAll("span.gb-button-text.show-popup");

formClose.addEventListener('click', function(){
  closePopup();
});

for (var i = 0; i < showPopupButton.length; i++) {
	showPopupButton[i].addEventListener('click', function(){
	  openPopup();
	});
}

popupBackground.addEventListener('click', function(){
  var isClickInside = popup.contains(event.target);
  if (!isClickInside) {
    closePopup();
  }
});

function closePopup(){
  popupBackground.classList.remove("is-active");
}

function openPopup(){
  popupBackground.classList.add("is-active");
}