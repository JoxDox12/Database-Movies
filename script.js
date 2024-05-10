class Movie{
    constructor(title, genre, director, year){
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.year = year;
    }
}

document.querySelector('#movie-form').addEventListener('submit', addMovie)
function addMovie(e){
    e.preventDefault()
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const director = document.querySelector('#director').value;
    const year = document.querySelector('#year').value;

    const movie = new Movie(title, genre, director, year);
    addMovieToList(movie);
}

addMovieToList = (Movie) => {
    const output = document.getElementById('put');
    const row = document.createElement('tr');
    row.innerHTML = "<td>"+Movie.title+"</td> <td>"+Movie.genre+"</td> <td>"+Movie.director+"</td> <td>"+Movie.year+"</td>"
    output.appendChild(row);
}

