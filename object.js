var studentMamun = {
    id: "IT-14011",
    name: 'Mamun'
}

var studentBristy = {
    id: "IT-16060",
    name: 'Bristy'
}

studentMamun.department = "ICT"

var stringyfiedStudent = JSON.stringify(studentMamun);
console.log(studentMamun);
console.log(studentBristy.id);

var arrayOfStudents = [];
arrayOfStudents.push(studentMamun)
arrayOfStudents.push(studentBristy);
arrayOfStudents.push({
    id: 1234,
    name: "Arisha"
});
console.log(arrayOfStudents);

arrayOfStudents.map(function (student) {
    console.log(student.name);
});


var varsity = {
    name: "MBSTU",
    departments: ["ICT", "CSE", "TE", "BGE"],
    buildings: [
        {
            name: "1st Academic Building",
            location: "road no 1"
        },
        {
            name: "Multipurpose Building",
            location: "road no 3"
        }
    ]
}

console.log(varsity);

var departmentArray = varsity.departments;
departmentArray.map(function (dept) {
    console.log(dept);
});

var buildingArray = varsity.buildings;
console.log(buildingArray);
buildingArray.map(function (item) {
    console.log(item.name);
});