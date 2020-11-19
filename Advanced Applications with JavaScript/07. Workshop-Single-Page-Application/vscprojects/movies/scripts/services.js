const apiKey = "AIzaSyATN2kRCTHSOkWLt-_mnxj47IHFkDvTvqQ";
const databaseUrl = "https://exercise-movies.firebaseio.com";
const request = async (url, method, body) => {
    let options = {
        method,
    };

    if (body) {
        Object.assign(options, {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body),
        });
    }
    let response = await fetch(url, options);
    let data = await response.json();
    return data;
}

const authService = {
    async login(email, password) {
        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        let data = await response.json();
        localStorage.setItem("auth", JSON.stringify(data));

        return data;
    },
    getData() {
        try {
            let data = JSON.parse(localStorage.getItem("auth"));
            return {
                isAuth: Boolean(data.idToken), //checks for id
                email: data.email, //checks for logged
            };
        } catch (error) {
            return {
                isAuth: false,
                email: "",
            };
        }
    },
    logout() {
        localStorage.setItem("auth", "");
    },

    async register(email, password, repeatPassword) {
        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
                repeatPassword,
            }),
        });

        let data = await response.json();
        localStorage.setItem("auth", JSON.stringify(data));

        return data;
    },
}

const movieService = {
    async add(movieData) {
        let requestResponse = await request(`${databaseUrl}/movies.json`, "POST", movieData);
        return requestResponse;
    },

    async getAll() {
        let requestResponse = await request(`${databaseUrl}/movies.json`, "GET");

        return Object.keys(requestResponse).map(key=> ({key, ...requestResponse[key]}));
    },

    async getOne(id){
        let requestResponse = await request(`${databaseUrl}/movies/${id}.json`, "GET");

        return requestResponse;
    }
}