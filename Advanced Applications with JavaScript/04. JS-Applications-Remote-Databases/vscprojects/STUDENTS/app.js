(function () {

    const tbody = document.getElementsByTagName("tbody")[0];
    const loadButton = document.getElementById("load");
    //form elements
    const idInput = document.getElementById("id");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const facNumInput = document.getElementById("facultyNumber");
    const gradeInput = document.getElementById("grade");
    const submitButton = document.querySelector("form button");

    loadButton.addEventListener("click", loadStudents);

    function loadStudents() {
        tbody.textContent = "";

        fetch("https://exercise-students-34c0d.firebaseio.com/students.json")
            .then(jsonResponseCatch)
            .then(data => {
                Object.entries(data)
                    .sort((a, b) => a[1].id - b[1].id)
                    .forEach(arr => {
                        const id = arr[1].id;
                        const firstName = arr[1].firstName;
                        const lastName = arr[1].lastName;
                        const facNum = arr[1].facNumber;
                        const grade = arr[1].grade;

                        //tr
                        const tr = document.createElement("tr");
                        tbody.appendChild(tr);
                        //tdId
                        const tdId = document.createElement("td");
                        tdId.textContent = id;
                        tr.appendChild(tdId);
                        //tdFirstName
                        const tdFirstName = document.createElement("td");
                        tdFirstName.textContent = firstName;
                        tr.appendChild(tdFirstName);
                        //tdLastName
                        const tdLastName = document.createElement("td");
                        tdLastName.textContent = lastName;
                        tr.appendChild(tdLastName);
                        //tdFacNum
                        const tdFacNum = document.createElement("td");
                        tdFacNum.textContent = facNum;
                        tr.appendChild(tdFacNum);
                        //tdGrade
                        const tdGrade = document.createElement("td");
                        tdGrade.textContent = grade;
                        tr.appendChild(tdGrade);
                    })
            })
            .catch(err => console.log(err))
    }

    submitButton.addEventListener("click", submitStudent);

    function submitStudent(e) {
        e.preventDefault();

        const newStudent = {
            id: idInput.value,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facNumber: facNumInput.value,
            grade: gradeInput.value
        }

        let obj = {
            method: "POST",
            body: JSON.stringify(newStudent),
        };

        if (idInput.value === "" || firstNameInput.value === "" || lastNameInput.value === "" ||
            facNumInput.value === "" || gradeInput.value === "") {
            alert("Please fill in all fields !");
            throw new Error("Empty fields!");
        };

        if (idInput.value.length > 0 && idInput.value > 0 && firstNameInput.value.length > 0 &&
            lastNameInput.value.length > 0 && facNumInput.value.length > 0 && gradeInput.value.length > 0) {
            fetch("https://exercise-students-34c0d.firebaseio.com/students.json", obj)
                .then(jsonResponseCatch)
                .then(() => {
                    idInput.value = "";
                    firstNameInput.value = "";
                    lastNameInput.value = "";
                    facNumInput.value = "";
                    gradeInput.value = "";

                    loadStudents();
                })
                .catch(errorMessage => console.log(errorMessage))
        }
    }

    function jsonResponseCatch(response) {
        if (response.status < 400) {
            return response.json();
        } else {
            throw response;
        }
    }
})();