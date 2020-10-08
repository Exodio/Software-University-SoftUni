function filterEmployees(data, criteria) {

    let parsedData = JSON.parse(data);
    let [key, value] = criteria.split("-");

    let result = parsedData
        .filter((employee) => employee[key] === value)
        .map((employeeData, indexPosition) => `${indexPosition}. ${employeeData.first_name} ${employeeData.last_name} - ${employeeData.email}`)
        .join("\n");

    console.log(result);
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');