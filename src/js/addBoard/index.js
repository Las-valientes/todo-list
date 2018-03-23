
const addTaskFunction = require("../addTask");
const addBoardFunction = { 
    init(){
        $("#add-board-form").submit(addBoardFunction.createBoard);
       // $("#add-board-form").submit(addBoardFunction.printAddTask);
       //
    },
    createBoard(event){
        event.preventDefault();
        const { value: addTitleBoard } = document.getElementById('addTitleBoard');
        
        const $boardContainer = $('<div />').addClass('col s12 m5 board');
        const $boardCard = $('<div />').addClass('card-panel');
        const $boardText = $('<label />').text("BOARD: " + addTitleBoard).addClass('board-title');;
        
        $boardContainer.append($boardCard)
        $boardCard.append($boardText)
        $("#boards-container").append($boardContainer);

        let newTask = `
            <form class="col s12" id="todo-form">
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="todo" class="materialize-textarea"></textarea>
                        <label for="todo">Tarea</label>
                    </div>
                </div>
                <div class = "row">
                   <div class = "col s6 m12">
                                 
                           <label for="todo-date">Fecha</label>              
                           <input type = "date" class = "datepicker" id="todo-date"/>    
                                 
                     </div>

                </div>
                <button class="waves-effect waves-light btn">Agregar</button>
                
            </form>
            
        `;
        const $taskContainer = $('<div />').addClass('row');
        $taskContainer.html(newTask);
        $boardContainer.append($taskContainer);

        addTaskFunction.init();
    }
}

$(document).ready(addBoardFunction.init);
module.exports = addBoardFunction;






/*printAddTask(){
        let newTask = `
        <div class="container">
        <div class="row">
            <form class="col s12" id="todo-form">
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="todo" class="materialize-textarea"></textarea>
                        <label for="todo">Tarea</label>
                    </div>
                </div>
                <button type="submit" class="waves-effect waves-light btn">Agregar</button>
            </form>
        </div>
        </div>
        `;
        const $taskContainer = $('<div />');
        $taskContainer.html(newTask);
        $("#boards-container").append($taskContainer)
    }*/