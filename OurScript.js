let piztype;
let piztype2;
let qty;
let qty2;

pizArray = ["Pepperoni", "Koen's Famous Olive", "Cheese", "Canadian Bacon", "Fish Sauce"];


function addPizza() {
    taskList = document.getElementById('piz');
    for (var i = 0; i < (pizArray.length); i++) {
        taskList.innerHTML += "<option value = \"" +pizArray[i]+ "\">" + pizArray[i] + "</option>";
    }
}

function addNum() {
    taskList = document.getElementById('qty');
    for (var i = 0; i < 10; i++) {
        taskList.innerHTML += "<option value = \"" +  (i + 1) + "\">" + (i+1) + "</option>" ;
    }
}

addPizza();
addNum();

function getType(piztype) {
    let element1 = document.getElementById("pizzaType");
    element1.value = piztype;
    element1.innerHTML = piztype;
    piztype2=piztype;
}
function getQty(qty) {
    let element2 = document.getElementById("Quantity");
    element2.value = qty;
    element2.innerHTML = qty;
	qty2 = qty;
}

//let name = "Kirsten Markley";
//let Tel = "417 123 4567";
let price = 10;



//qty = getElementById(''); // get qty value





function displayOut() {
    if (isNaN(qty2) || !piztype2 )
    {
        window.alert("Please Choose Pizza and Quantity");
        document.getElementById('_quantity').innerHTML += '<span style="color:red">*</span>';
        document.getElementById('_type').innerHTML += '<span style="color:red">*</span>';
    }
    else
    {
        document.getElementById('name').innerHTML = 'Kirsten Markley';
        document.getElementById('phone').innerHTML = '417 123 4567';
        document.getElementById('_quantity').innerHTML = 'Pizza Type: ';
        document.getElementById('_type').innerHTML = 'Quantity: ';
        let tax = 0.076;
        out1 = document.getElementById("SubTotal");
        let subtotal = (qty2 * 10);
        out1.innerHTML = ("SubTotal: $" + subtotal);
        out2 = document.getElementById("Tax");
        let taxTotal = (subtotal * tax);
        out2.innerHTML = ("Tax: $" + taxTotal.toFixed(2));
        out3 = document.getElementById("Total");
        let total = (subtotal * taxTotal);
        out3.innerHTML = ("Total: $" + total.toFixed(2));
    }
    
}

document.getElementById("submit").addEventListener("click", displayOut); // Event listener when clicking order button