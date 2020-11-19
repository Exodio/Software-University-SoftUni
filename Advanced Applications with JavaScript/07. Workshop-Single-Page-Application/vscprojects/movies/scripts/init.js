function addEventListeners() {
  let navigationTemplate = Handlebars.compile(document.getElementById("navigation-template").innerHTML);
  let movieCardTemplate = Handlebars.compile(document.getElementById("card-movie-template").innerHTML);

  Handlebars.registerPartial("navigation-template", navigationTemplate);
  Handlebars.registerPartial("card-movie", movieCardTemplate);

  navigate("home");
}

function navigateHandler(e) {
  e.preventDefault();

  if (!e.target.tagName != "A") { //checks for anchor tag
    return;
  }

  let url = new URL(e.target.href);
  navigate(url.pathname.slice(1));
}

function onLoginSubmit(e) {
  e.preventDefault();

  let formData = new FormData(document.forms["login-form"]);
  let email = formData.get("email");
  let password = formData.get("password");

  authService.login(email, password)
    .then(data => {
      navigate("home");
    });
}

function onRegisterSubmit(e) {
  e.preventDefault();

  let formData = new FormData(document.forms["register-form"]);
  let email = formData.get("email");
  let password = formData.get("password");
  let repeatPassword = formData.get("repeatPassword");

  if (password !== repeatPassword) {
    return;
  }

  authService.register(email, password, repeatPassword)
    .then(data => {
      navigate("home");
    });
}

function onAddMovieSubmit(e) {
  e.preventDefault();

  let formData = new FormData(document.forms["add-movie-form"]);
  let title = formData.get("title");
  let description = formData.get("description");
  let imageUrl = formData.get("imageUrl");

  if (title.value === "" || description.value === "" || imageUrl.value === "") {
    return;
  }

  movieService.add({
      title,
      description,
      imageUrl,
    })
    .then(response => {
      navigate("home");
    })
}

addEventListeners();