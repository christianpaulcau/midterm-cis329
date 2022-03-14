var movies = []

class Movie{
    constructor(title, description, duration, cast, poster, year, link){
        this.title = title
        this.description = description
        this.duration = duration
        this.cast = cast
        this.poster = poster
        this.year = year
        this.link = link
    }

    gridView(){

        var html_display = '<div class="col">'
                  +'<div class="card h-100">'
                  +'<img src="' + this.poster + '" class="card-img-top" alt="' + this.title + '">'
                  +'<div class="card-body">'
                  +'  <h5 class="card-title">' + this.title + '</h5>'
                  +'  <p class="card-text">' + this.description + '</p>'
                  +'  <p class="card-text"> Year: ' + this.year + '</p>'
                  +'  <div class="card-footer text-muted">'
                  +'    <div id="table">'
                  +     '<ul style="display:none;">'
                    +   '<li>Cast:' + this.cast + '</li>'
                    +   '<li>Duration:' + this.duration + ' minutes</li>'
                  +     '</ul>'
                  +     '<button onclick="moreInfo(this)" class="btn btn-outline-primary">More info</button>'
                    +   '</div>'
                  +'      <button class="btn btn-outline-danger" onclick="window.open("https://www.roku.com/whats-on/movies/clean?id=f4627d6f1e30500681ce883e76fd9899","_blank")">Rent</button>'
                  +'  </div>'
                  +'</div>'
                  +'</div>'
                  +'</div>'
        
        return html_display
    }

    detailedView(){

    }

    displayCasts(){
        var castToHTML = "<ul>"
        this.cast.forEach(m => {
            castToHTML += '<li>' + m + '</li>'
        });
        castToHTML += "</ul>"
        return castToHTML
    }
}

function displayMovies(){
    //title, description, duration, cast, poster, year
    var movie1 = new Movie("Clean", "A movie about guns and violence...", 120,
                        ["Adrien Brody", "Glen Fish", "John Bianco", "RZA"], "../img/clean.jpeg", 2020,
                        "https://www.roku.com/whats-on/movies/clean?id=f4627d6f1e30500681ce883e76fd9899")
    var movie2 = new Movie("Dumbledore", "Wizards... without the wardrobe.", 150,
                        ["Dumbledore", "Slytherin", "Harry Potter"], "../img/dumble.jpeg", 2023,
                        "30002")
    var movie3 = new Movie("Morbius", "Vampires gon wrong!", 113,
                        ["Dracula", "Castlevania", "Other vampires"], "../img/morbius.jpeg", 2022,
                        "30003")
    var movie4 = new Movie("Batman", "A rich man with poor life decisions.", 220,
                        ["Bats", "Men", "Villains"], "../img/batman.jpeg", 2022,
                        "30004")
    var movie5 = new Movie("Jurassic", "They all died", 138,
                        ["Dinosaurs", "Park Rangers", "Prehistoric Fish", "Others"], "../img/jurassic.jpeg", 2021,
                        "30005")

    movies.push(movie1, movie2, movie3, movie4, movie5)

    gvElement = document.getElementById('movieGrid')
    var gvMovies = ""
    movies.forEach(m => {
        gvMovies += m.gridView()
    });

    if(gvElement)
        gvElement.innerHTML = gvMovies
}

function rentMovie(mid){
    let selectedMovie = searchMovieByID(mid)
    if (!selectedMovie){
        alert("Cannot locate item.")
        return;
    }
}

function searchMovieByID(mid){
    movies.forEach(movie => {
        if (movie.id == mid){
            return movie
        }
    });
    return null
}

function moreInfo(el) {
    var x = el.previousElementSibling;
    x.style.display = 'block';
}

function newTab(link){
    var tab = window.open(link,'_blank')
    return tab
}