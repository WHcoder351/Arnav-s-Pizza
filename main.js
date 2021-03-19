var pizzas = ["Pepperoni","Cheese","Veg","Margherita","Hawaiian","Supreme(Veg)", "Supreme(Meat)"];
function getmenu(){
var Hdat;
Hdat = "<ol class = 'menulist'>"
pizzas.sort();
    for(var i = 0;i<pizzas.length;i++){
        Hdat=Hdat+ '<li>' + pizzas[i] + '</li>'
    }
    Hdat=Hdat+"</ol>"
    document.getElementById("menu_list").innerHTML = Hdat;
}
function add_item(){
    var Hdat;
    var item = document.getElementById("add_item").value;
    pizzas.push(item);
    pizzas.sort();
    Hdat = "<section class = 'cards'> "
    for(var i=0;i<pizzas;i++){
        Hdat = Hdat+"<div class = 'card' >" + "<img src = 'images/pizzaImg.png/>' " + pizzas[i]+"</div>" 
    }
    Hdat = Hdat+"</section>"
    document.getElementById("display_addmenu").innerHTML = Hdat;
}