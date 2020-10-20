class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
        this.loggedUsers = [];
    }

    register(username, password, repeatPassword, email) {

        if (username === "" || password === "" || repeatPassword === "" || email === "") {

            throw new Error("Input can not be empty");
        }

        if (password !== repeatPassword) {

            throw new Error("Passwords do not match");
        }

        if (this._users.find(user => user.name === username)) {

            throw new Error("This user already exists!");
        }

        this._users.push({
            username,
            email,
            password,
        });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {

        if (!this._users.find(registeredUser => registeredUser.username === username)) {

            throw new Error("There is no such user");
        }

        if (this._users.find(registeredUser => registeredUser.username === username && registeredUser.password === password)) {
            this.loggedUsers.push(username); //we save the logged in user

            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {

        if (!this._users.find(registeredUser => registeredUser.username === username)) {

            throw new Error("There is no such user");
        }

        if (this._users.find(registeredUser => registeredUser.username === username && registeredUser.password === password)) {
            this.loggedUsers = this.loggedUsers.filter(loggedUsers => loggedUsers !== username); //we remove the logged in user from the logged in list

            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {

        if (!this._users.find(user => user.username === username) || !this.loggedUsers.includes(username)) {
            throw new Error("You have logged out successfully");
        }

        if (question === "") {
            throw new Error("Invalid question");
        }

        this._questions.push({ //We add the new question to the questions array with the question details
            question,
            submitter: username,
            id: this._id,
            answers: [],
        });

        this._id++; //We save the id number of the question
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {

        if (!username) { //!this._users.find(x => x.username === username) || !this.loggedUsers.includes(username)
            throw new Error("You should be logged in to post answers");
        }

        if (answer === "") {
            throw new Error("Invalid answer");
        }

        if (this.id) { //questionId >= this.id || questionId < 1
            throw new Error("There is no such question");
        }

        let questionReference = this._questions.find(question => question.id === questionId);

        questionReference.answers.push({
            responder: username,
            answer,
        });

        return "Your answer has been posted successfully";
    }

    showQuestions() {
        return this._questions.reduce((questionsAcc, curr) => {

            return questionsAcc += `Question ${curr.id} by ${curr.submitter}: ${curr.question}` +

                curr.answers.reduce((answersAcc, curr) => {

                    return answersAcc += `\n---${curr.responder}: ${curr.answer}`
                }, "") + "\n";

        }, "").trim();
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions());