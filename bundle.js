(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
        const $todoBntDelete = $('<button type="button"/>').addClass("btn right").text('x').click(deleteFunction);

        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoCard.append($todoBntDelete);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);
        
        app.counter = app.counter + 1;
    },
    counter: 0
};

$(document).ready(app.init);


},{"./delete":2,"./progress-bar":3}],2:[function(require,module,exports){
const deleteFunction = (e) => { 
    e.preventDefault();
    console.log(e.target);
    
     $(e.target).parent().remove();
     //console.log($(this).parent())
    //alert("casi borra");
  
}

module.exports = deleteFunction;

},{}],3:[function(require,module,exports){
const progressBar = {
  "hola": "adios"
}

module.export = progressBar;

},{}]},{},[1]);
