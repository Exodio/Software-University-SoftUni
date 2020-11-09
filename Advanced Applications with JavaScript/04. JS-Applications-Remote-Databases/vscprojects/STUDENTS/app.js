//create an IIFE in order to not polute the global scope
(function () {
    //set the base url
    const baseUrl = "https://exercise-students-34c0d.firebaseio.com/";
    //list the needed dom elements in an object
    const studentsCollection = {
        studentContainerElement: document.querySelector("tbody"),

        idInputElement: document.getElementById("id"),
        firstNameInputElement: document.getElementById("firstName"),
        lastNameInputElement: document.getElementById("lastName"),
        facultyNumberInputElement: document.getElementById("facultyNumber"),
        gradeInputElement: document.getElementById("grade"),

        loadButtonElement: document.getElementById("load"),
        submitButtonElement: document.querySelector("form button"),
    }

    //set a on click functionality for loading each student in the list 
    studentsCollection.loadButtonElement.addEventListener("click", loadStudents);
    //set on click functionality for adding student to the list
    studentsCollection.submitButtonElement.addEventListener("click", addStudent);

    function addStudent(e) {
        //prevent the window from reloading
        e.preventDefault();
        //take the inputs params
        let id = studentsCollection.idInputElement.value;
        let firstName = studentsCollection.firstNameInputElement.value;
        let lastName = studentsCollection.lastNameInputElement.value;
        let facultyNumber = studentsCollection.facultyNumberInputElement.value;
        let grade = studentsCollection.gradeInputElement.value;
        //check if all params are available
        if (!id || !firstName || !lastName || !facultyNumber || !grade) {
            return;
        }
        //clear the input fields 
        studentsCollection.idInputElement.value = "";
        studentsCollection.firstNameInputElement.value = "";
        studentsCollection.lastNameInputElement.value = "";
        studentsCollection.facultyNumberInputElement.value = "";
        studentsCollection.gradeInputElement.value = "";
        //list the submitted params into an object
        let newStudentData = {
            id,
            firstName,
            lastName,
            facultyNumber,
            grade
        }
        //validate new student request in the students section and check for errors
        fetch(baseUrl + "students.json", {
                method: "POST",
                body: JSON.stringify(newStudentData)
            })
            .then(jsonMiddleware);
    }

    function loadStudents() {
        //clear the body of the listed information pre-loading
        studentsCollection.studentContainerElement.innerHTML = "";
        //validate the current request in the students section and check for errors
        fetch(baseUrl + "students.json")
            .then(jsonMiddleware)
            .then((data) => {
                if (!data) {
                    throw new Error("There are no listed students in the database!");
                }
                //loop through each student row(data) of the {{}} via object entries and sort them in ascending by ID
                for (const [id, studentInfo] of Object.entries(data).sort((a, b) => a[1].id - b[1].id)) {
                    //create main tr element
                    let trData = createElement("tr");
                    //set the special key (data-id) for each tr student
                    trData.setAttribute("data-id", id);
                    // set and append each set of data info
                    //create and append id element
                    let tdStudentId = createElement("td", [], studentInfo.id);
                    trData.appendChild(tdStudentId);
                    //create and append firstName element
                    let tdFirstName = createElement("td", [], studentInfo.firstName);
                    trData.appendChild(tdFirstName);
                    //create and append lastName element
                    let tdLastName = createElement("td", [], studentInfo.lastName);
                    trData.appendChild(tdLastName);
                    //create and append facuityNumber element
                    let tdFacultyNumber = createElement("td", [], studentInfo.facultyNumber);
                    trData.appendChild(tdFacultyNumber);
                    //create and append grade element
                    let tdGrade = createElement("td", [], studentInfo.grade);
                    trData.appendChild(tdGrade);
                    //append the new td elements to the tr container and the tr to the students collection obj
                    studentsCollection.studentContainerElement.appendChild(trData);
                }
            })
            .catch(errorHandler);
    }

    function errorHandler(errorMessage) {
        //add error message output 
        if (errorMessage.message) {
            studentsCollection.studentContainerElement.innerHTML = `Error: ${errorMessage.message}`;
        } else {
            studentsCollection.studentContainerElement.innerHTML = `Error: ${errorMessage.status} (${errorMessage.statusText})`;
        }
    }

    function createElement(elementType, classNames, textContent) {
        //create element type
        let element = document.createElement(elementType);
        // check if second pram is className and add all of the classNames into an arr
        if (classNames) {
            element.classList.add(...classNames);
        }
        //check if third param is text and set it
        if (textContent) {
            element.textContent = textContent;
        }
        //return the element 
        return element;
    }

    function jsonMiddleware(response) {

        if (response.status >= 400) {
            throw (response);
        }

        return response.json();
    }
})();