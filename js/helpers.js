
(function () {

  function elementId(input){
    return document.getElementById(input).value;
  }

  function getName(input){
    var genreInputs = document.getElementsByName(input);
    var genre;
    for (var i = 0; i < genreInputs.length; i++) {
      var genreInput = genreInputs[i];
      if (genreInput.checked) {
          genre = genreInput.value;
        }
      }
      return genre;
  }

  function randomNum(input){
      return Math.ceil(Math.random() * input);

  }

  function e(elementType, text, attributes, styles) {
      var newElement = document.createElement(elementType);
      newElement.textContent = text;

      //set the attributes on the tag
      for (var attr in attributes) {
          if (attributes.hasOwnProperty(attr)) {
              newElement.setAttribute(attr, attributes[attr]);
          }
      }

      //set the styles
      for (var style in styles) {
          if (styles.hasOwnProperty(style)) {
              newElement.style[style] = styles[style];
          }
      }

      return newElement;
  }

  window.e = e;
  window.getName = getName;
  window.elementId = elementId;
  window.randomNum = randomNum;

}());
