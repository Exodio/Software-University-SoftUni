function solve(arrInput) {
    let movies = [];

    arrInput.forEach(element => {
        let lines = element.split(" ");
        let addIndex = lines.indexOf("addMovie");
        let directorIndex = lines.indexOf("directedBy");
        let dateIndex = lines.indexOf("onDate");

        if (addIndex > -1) {
            movies.push({
                name: lines.slice(addIndex + 1).join(" ")
            });
        }

        if (directorIndex > -1) {
            let name = lines.slice(0, directorIndex).join(" ");
            let director = lines.slice(directorIndex + 1).join(" ");

            movies.forEach(movies => {
                if (movies.name === name) {
                    movies.director = director;
                }
            })
        }

        if (dateIndex > -1) {
            let name = lines.slice(0, dateIndex).join(" ");
            let date = lines.slice(dateIndex + 1).join(" ");

            movies.forEach(movies => {
                if (movies.name === name) {
                    movies.date = date;
                }
            })
        }

    });

    movies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    })

}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);