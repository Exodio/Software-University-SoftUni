const apiKey = "AIzaSyATN2kRCTHSOkWLt-_mnxj47IHFkDvTvqQ";

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
            })
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
}