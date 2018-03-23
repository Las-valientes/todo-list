const deleteFunction = require("../delete");
const editFunction = require("../edit");


const addTask = {
    init() {
        $('#todo-form').submit(addTask.addTodo);
        
    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');
        const { value: todoDate } = document.getElementById('todo-date');
        
        let todoId = `todo-${addTask.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m12 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);

        const $todoDate =  $('</br> <label />').attr('for', todoId).text("Deadline: " + todoDate);

        $todoText.attr('contentEditable', false);

        const $btnEditable = $('<button type="button"/>').addClass("btn-small right").text("edit").click(editFunction);

        const $todoBntDelete = $('<button type="button"/>').addClass("btn-small right").text('x').click(deleteFunction);

        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoCard.append($todoDate);
        $todoCard.append($todoBntDelete);
        $todoCard.append($btnEditable);

        
        $todoContainer.append($todoCard);
        console.log($("#boards-container").children());
        
        $("#boards-container").children().append($todoContainer)
 
        addTask.counter = addTask.counter + 1;

    },
    counter: 0
};


module.exports = addTask;



