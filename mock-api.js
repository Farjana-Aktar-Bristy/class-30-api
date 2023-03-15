var todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    }
]

var orderedList = document.getElementById("todos");

todos.map(function (todo) {
    var list = document.createElement("li");
    var todoText = document.createTextNode(todo.title + "  " + todo.completed);
    list.appendChild(todoText);
    orderedList.appendChild(list);
});