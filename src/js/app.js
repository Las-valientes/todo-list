const deleteFunction = require("./delete");
const progressBarFunction = require("./progress-bar");


const app = {
    init() {
        $('#todo-form').submit(app.addTodo);
    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');
        
        let todoId = `todo-${app.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);
        const $todoBntDelete = $('<button type="button"/>').addClass("btn right").text('x').click(app.removeTodo);

        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoCard.append($todoBntDelete);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);
        
        app.counter = app.counter + 1;
        console.log($todoBntDelete);
    },
    counter: 0,
    removeTodo(e) {
        e.preventDefault();
         $(this).parent().remove();
         console.log($(this).parent())
       }
};

$(document).ready(app.init);