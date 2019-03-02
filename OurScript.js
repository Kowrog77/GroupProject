var pizType;
let pizNum;
let prize =10;
let tax = 0.076;

let pizArray = ["Pepperoni", "Koen's Famous Olive", "Cheese", "Canadian Bacon", "Fish Sauce"];

function addPizza() {
    taskList = document.getElementById('piz');
    for (var i = 0; i < pizArray.length; i++) {
        taskList.innerHTML += '<option value="' + i + '" id="piz' + i + '">' + pizArray[i] + '</option>';

        // taskList.innerHTML += "<option  value = \"" +pizArray[i]+ "\">" + pizArray[i] + "</option>";
    }
}

function addNum() {
    var taskList;
    taskList = document.getElementById('qty');
    for (var j = 0; j < 10; j++) {
        taskList.innerHTML += '<option value="' +  j  + '" id="num' + (j +1) + '">' +  (j + 1) + '</option>';
        // taskList.innerHTML += "<option value = \"" +  (i + 1) + "\">" + (i+1) + "</option>" ;
    }
}

function addStats() {
    taskList = "";
    taskList = document.getElementById('summary');

}


function myFunction(element) {
    pizType=element;
       
    }

    // This is to test if the pizType takes the value or not
console.log(pizType);



addPizza();
addNum();
// document.getElementById("submit").addEventListener("click", getPizza());


// for (let i = 0; i < pizArray.length; i++) {
//     document.getElementById("piz" + i).addEventListener("click", getPizza.bind(this, i));
// }

// // for (let i = 1; i <= 10; i++) {
// //     document.getElementById("num" + i).addEventListener("click", getNum.bind(this, i));
// // }






// function getType(piztype) {
//     var element = document.getElementById("pizzaType");
//     element.value = piztype;
//     element.innerHTML = piztype;
// }
// let quantity;

// function getQty(qty) {
//     var element = document.getElementById("Quantity");
//     element.value = qty;
//     element.innerHTML = qty;
//     quantity=Number(qty);
// }

// let stotal = quantity *  prize;
// let total = stotal*tax;
// var asdasd;
// asdasd = document.getElementById('SubTotal');

// asdasd.addEventListener("click",document.getElementById('SubTotal'));
// console.log(`Total :${stotal}`);
