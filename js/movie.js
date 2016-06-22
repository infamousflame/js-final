(function() {
/**
 * Define our Movie constructor function.
 * @param title
 * @param runningTimeInMinutes
 * @param year
 * @param genre
 * @param desc
 * @constructor
 */
function Movie(title, runningTimeInMinutes, year, genre, desc, checkedOut) {
    this.title = title;
    this.runningTimeInMinutes = parseInt(runningTimeInMinutes, 10) || 0;
    this.year = year;
    this.genre = genre;
    this.desc = desc || "";
    this.checkedOut = false;
}

/**
 * The movie prototype, lets you see a running time in hours and
 * a preview snippet based on the description.
 * @type {{runningTimeHours: Function, preview: Function}}
 */
Movie.prototype = {
    runningTimeHours: function runningTimeHours() {
        if (!isNaN(this.runningTimeInMinutes)) {
            return (this.runningTimeInMinutes / 60) + " hrs";
        }
    },
    preview: function preview() {
        return this.desc.slice(0, 50) + "...";
    },
    checkIn: function checkIn(){
      var d = new Date();
      // console.log((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear());
      d.setDate(d.getDate() +  Math.ceil(Math.random() * 10));
      console.log(Math.abs(this.checkOut() - d.getDate()));
      this.checkedOut = false;
      console.log(this.checkedOut);
      alert("You owe " + Math.abs(this.checkOut() - d.getDate()) * 3 + "$");

    },
    checkOut: function checkOut(){
      var d = new Date();
      console.log(d.getTime());
      this.checkedOut = true;
      return d.getDate();
    }

};

//WE MUST now stick the Movie object somewhere accessible
window.Movie = Movie;
}());
