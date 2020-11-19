const routes = {
    "home": "home-template",
    "login": "login-form-template",
    "register": "register-form-template",
    "add-movie": "add-movie-template",
    "details": "details-movie-template",
};

const router = async (pathName) => {
    let [path, id] = pathName.split("/");
    let app = document.getElementById("app");
    let templateData = authService.getData();

    switch (path) {
        case "home": 
        templateData.movies = movieService.getAll();
        break;
        case "logout":
            authService.logout(); //local storage 
            return navigate("home");
            case "details":
                let movieDetails = await movieService.getOne(id);
                Object.assign(templateData, movieDetails);
            break;
        default:
            break;
    }
    let templateId = routes[path];

    let template = Handlebars.compile(document.getElementById(templateId).innerHTML);
    app.innerHTML = template(templateData);
}

const navigate = (path) => {
    history.pushState({}, "", path); //changes the url

    router(path); //visualize the inner content
}