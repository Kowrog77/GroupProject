

let pizArray = ["Pepperoni", "Koen's Famous Olive", "Cheese", "Canadian Bacon", "Pineapple"];

function addPizza() {
    taskList = "";
    taskList = document.getElementById('piz');
    for (var i = 0; i < pizArray.length; i++) {
        taskList.innerHTML = '<option value="' + pizArray[i] + '" id="piz' + i + '">' + pizArray[i] + '</option>';
    }
}

function addNum() {
    taskList = "";
    taskList = document.getElementById('qty');
    for (var i = 0; i < pizArray.length; i++) {
        taskList.innerHTML = '<option value="' +  (i + 1) +'" id="num' + (i + 1) + '">' + (i + 1) +'</option>';
    }
}

addPizza();
addNum();