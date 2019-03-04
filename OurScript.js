let piztype;
let qty;


pizArray = ["Pepperoni", "Olive", "Cheese", "Bacon", "Ham"];


function addPizza() {
    taskList = document.getElementById('piz');
    for (var i = 0; i < (pizArray.length); i++) {
        taskList.innerHTML += "<option value = "+ pizArray[i] +">" + pizArray[i] + "</option>";
    }
}

function addNum() {
    taskList = document.getElementById('qty');
    for (var i = 0; i < 10; i++) {
        taskList.innerHTML += "<option value = " +  (i + 1) + ">" + (i+1) + "</option>" ;
    }
}

addPizza();
addNum();

let name = "Kirsten Markley";
let Tel = "417-123-4567";
let price = 10;



function displayOut() {
    pizzaType = document.getElementById("piz");
    pizzaType = pizzaType.value;
    qty = document.getElementById("qty");
    qty = qty.value;
   document.getElementById("summary").innerHTML = ('<br><h3 id ="Thankyou"></h3><br> <div>Order Info:</div><br> <div class="row"> <div class="col-sm"> <p>Name: </p> </div> <div class="col-sm"> <p>' + name + '</p> </div> </div> <div class="row"> <div class="col-sm"> <p>Phone Number: </p> </div> <div class="col-sm"> <p>' + Tel + '</p> </div> </div> <div class="row"> <div class="col-sm"> <p>Pizza Type: </p> </div> <div class="col-sm"> <p id="pizzaType"></p> </div> </div> <div class="row"> <div class="col-sm"> <p>Quantity: </p> </div> <div class="col-sm"> <p id= "qty2"></p> </div> </div> <div class="row"> <div class="col-sm"> <p>Subtotal: </p> </div> <div class="col-sm"> <p id="SubTotal"></p> </div> </div> <div class="row"> <div class="col-sm"> <p>Tax: </p> </div> <div class="col-sm"> <p id ="Tax"></p> </div> </div> <div class="row"> <div class="col-sm"> <p>Total: </p> </div> <div class="col-sm"> <p id ="Total"></p> </div>');

    document.getElementById("Thankyou").innerHTML = ("Thank You!");
    document.getElementById("pizzaType").innerHTML = (pizzaType);
    document.getElementById("qty2").innerHTML = (qty);
	let tax = 0.076;
    let subtotal = (qty * 10);
    document.getElementById("SubTotal").innerHTML = ("$" + subtotal);
	let taxTotal = (subtotal * tax);
	let taxTotal2 = taxTotal.toFixed(2);
	document.getElementById("Tax").innerHTML = ("$" + taxTotal2);
	let total = (subtotal + taxTotal);
	total = total.toFixed(2);	 
	document.getElementById("Total").innerHTML = ("$" + total);
}

document.getElementById("submit").addEventListener("click", displayOut); // Event listener when clicking order button