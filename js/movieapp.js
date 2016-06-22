
var list = document.createElement("ul");
var movieArray = [];
var button = document.getElementById("addMovie");
var checkOut = document.getElementById("checkOut");
var checkIn = document.getElementById("checkIn");

var listElement;
var dailyFee = 3;
document.getElementById("movieForm").addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(getName("genre"));
  var movie = new Movie(elementId("movieTitle"), elementId("runTime"), elementId("release"), getName("genre"), elementId("description"));
  //var listElement = e("li", (movie.title + " | " + movie.runningTimeHours() + " hours " + " | " + movie.year), {rel: movie.preview()}, "");
  movieArray.push(movie);
  movieArray.sort(function (a, b) {
    var titleA = a.title.toLowerCase();
    var titleB = b.title.toLowerCase();
    if (titleA < titleB) {
        return -1;
    } else if (titleA > titleB) {
        return 1;
    }
    return 0;
  });

    list.innerHTML = "";

      movieArray.forEach(function (val) {
        list.appendChild(e("li", (val.title + " | " + val.runningTimeHours() + " hours " + " | " + val.year), {movieID: movieArray.indexOf(val)}, ""));

      });



  //list.appendChild(listElement);
  document.getElementById("movieForm").reset();
});
document.getElementById("checkIn").style.visibility = "hidden";
document.getElementById("checkOut").style.visibility = "hidden";

list.addEventListener("click", function(evt){
  document.getElementById("genre").innerHTML = movieArray[evt.target.attributes.movieID.textContent].genre;
  document.getElementById("description").innerHTML = movieArray[evt.target.attributes.movieID.textContent].desc;
  document.getElementById("movieForm").style.visibility = "hidden";
  document.getElementById("movieDetails").style.display = "block";

  console.log(movieArray[evt.target.attributes.movieID.textContent].checkedOut);
  if(movieArray[evt.target.attributes.movieID.textContent].checkedOut){
    document.getElementById("checkIn").style.visibility = "visible";

  }else{
    document.getElementById("checkOut").style.visibility = "visible";
  }
  checkIn.addEventListener("click", function(){
    movieArray[evt.target.attributes.movieID.textContent].checkOut();
    document.getElementById("checkIn").style.visibility = "hidden";
    document.getElementById("checkOut").style.visibility = "visible";

  });
  checkOut.addEventListener("click", function(){
    movieArray[evt.target.attributes.movieID.textContent].checkIn();
    document.getElementById("checkIn").style.visibility = "visible";
    document.getElementById("checkOut").style.visibility = "hidden";

  });

  alert(movieArray[evt.target.attributes.movieID.textContent].desc);
});


button.addEventListener("click", function(){
  document.getElementById("movieForm").style.visibility = "visible";
  document.getElementById("checkIn").style.visibility = "hidden";
  document.getElementById("checkOut").style.visibility = "hidden";

});



document.body.appendChild(list);
