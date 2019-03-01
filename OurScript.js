let pizType;

let pizArray = ["Pepperoni", "Koen's Famous Olive", "Cheese", "Canadian Bacon", "Fish Sauce"];

function addPizza() {
    taskList = document.getElementById('piz');
    for (var i = 0; i < pizArray.length; i++) {
        // taskList.innerHTML += '<option value="' + pizArray[i] + '" id="piz' + i + '">' + pizArray[i] + '</option>';
        taskList.innerHTML += "<option  value = \"" +pizArray[i]+ "\">" + pizArray[i] + "</option>";
    }
}

function addNum() {
    // taskList = "";
    taskList = document.getElementById('qty');
    for (var i = 0; i < 10; i++) {
        taskList.innerHTML += "<option value = \"" +  (i + 1) + "\">" + (i+1) + "</option>" ;
    }
}

function addStats() {
    taskList = "";
    taskList = document.getElementById('summary');

}

function getPizza(num) {

}

function getNum(num) {

}

addPizza();
addNum();

// for (let i = 0; i < pizArray.length; i++) {
//     document.getElementById("piz" + i).addEventListener("click", getPizza.bind(this, i));
// }

// for (let i = 0; i <= 10; i++) {
//     document.getElementById("num" + i).addEventListener("click", getNum.bind(this, i));
// }

// document.getElementById("submit").addEventListener("click", );

function getType(piztype) {
    var element = document.getElementById("pizzaType");
    element.value = piztype;
    element.innerHTML = piztype;
}
function getQty(qty) {
    var element = document.getElementById("Quantity");
    element.value = qty;
    element.innerHTML = qty;
}


