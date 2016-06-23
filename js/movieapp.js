
var list = document.createElement("ul");
var movieArray = [];
var button = document.getElementById("addMovie");
var check = document.getElementById("check");
var listElement;
var dailyFee = 3;
var movieDetails = document.getElementById("movieDetails");
document.getElementById("movieForm").style.visibility = "hidden";
document.getElementById("check").style.visibility = "hidden";
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

function movieDetailsFun(title, runningTimeInMinutes, year, genre, desc, checkedOut){
  var titleE = e("h1", title, "", "");
  var runningTimeInMinutesE = e("h2", "Running time: " + runningTimeInMinutes + " Minutes", "", "");
  var yearE = e("h2", "Year released: " + year, "", "");
  var genreE = e("h2", "Genre: " + genre, "", "");
  var descE = e("p", desc, "", "");

  movieDetails.appendChild(titleE);
  movieDetails.appendChild(runningTimeInMinutesE);
  movieDetails.appendChild(yearE);
  movieDetails.appendChild(genreE);
  movieDetails.appendChild(descE);

  if(checkedOut){
    document.getElementById("check").innerHTML = "checkIn";
    document.getElementById("check").setAttribute("checkVal", "checkin");
    document.getElementById("check").style.visibility = "visible";
  }else{
    document.getElementById("check").innerHTML = "checkOut";
    document.getElementById("check").setAttribute("checkVal", "checkOut");
    document.getElementById("check").style.visibility = "visible";
  }
}
document.getElementById("checkIn").style.visibility = "hidden";
document.getElementById("checkOut").style.visibility = "hidden";

list.addEventListener("click", function(evt){
  var target = evt.target.attributes.movieID.textContent;
  document.getElementById("description").innerHTML = movieArray[target].desc;
  document.getElementById("movieForm").style.visibility = "hidden";
  document.getElementById("movieDetails").style.display = "block";
  movieDetails.innerHTML = "";
  movieDetailsFun(movieArray[target].title, movieArray[target].runningTimeInMinutes, movieArray[target].year, movieArray[target].genre, movieArray[target].desc, movieArray[target].checkedOut);


  console.log(movieArray[evt.target.attributes.movieID.textContent].checkedOut);
  // if(movieArray[evt.target.attributes.movieID.textContent].checkedOut){
  //   document.getElementById("checkIn").style.visibility = "visible";
  //
  // }else{
  //   document.getElementById("checkOut").style.visibility = "visible";
  // }


  check.addEventListener("click", function(){
    if(check.attributes.checkVal.textContent == "checkOut"){
      movieArray[evt.target.attributes.movieID.textContent].checkOut();
      check.innerHTML = "checkIn";
      check.setAttribute("checkVal", "checkIn");
    }else{
      movieArray[evt.target.attributes.movieID.textContent].checkIn();
      check.setAttribute("checkVal", "checkOut");
      check.innerHTML = "checkOut";

    }
  });



  // alert(movieArray[evt.target.attributes.movieID.textContent].desc);
});


button.addEventListener("click", function(){
  document.getElementById("movieForm").style.visibility = "visible";
  document.getElementById("checkIn").style.visibility = "hidden";
  document.getElementById("checkOut").style.visibility = "hidden";
  movieDetails.innerHTML = "";
  check.style.visibility = "hidden";
});




document.getElementById("list").appendChild(list);
