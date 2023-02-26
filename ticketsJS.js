//I'm not going to try and take credit for this - I get how it all works but I had to use W3 schools to get it
var popup = document.getElementById("popup");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  popup.style.display = "block";
}

span.onclick = function() {
popup.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == popup) {
		popup.style.display = "none";
	}
}


//This took me ages so please appreciate it
//const fs = require("fs");
var ticket = document.querySelector('#Ticket_Container');
var num = 0;
var idnum = 0;

par = document.getElementById("scrollBox");

function newTicket(){
	num += 1;
	idnum += 1;
	var ticket_clone = ticket.cloneNode(true);
	ticket_clone.id = "Ticket_Container" + idnum.toString();
	if (num < 20){
		children = par.children;
		prevtic = children[children.length - 1];
		
		var cloneChildren = ticket_clone.children;
		cloneChildren[2].setAttribute("onclick","deleteTicket(" + ticket_clone.id + ")");
		cloneChildren[2].style.visibility = "visible";
		
		prevtic.after(ticket_clone);
		var newMadeTicket = document.getElementById(ticket_clone.id);
		newMadeTicket.children[0].children[0].children[1].children[0].children[0].setAttribute("onclick", "changeAdult(\"" + "Ticket_Container" + idnum.toString() + "\")");
		newMadeTicket.children[0].children[0].children[1].children[1].children[0].setAttribute("onclick", "changeChild(\"" + "Ticket_Container" + idnum.toString() + "\")");
		newMadeTicket.children[0].children[0].children[1].children[2].children[0].setAttribute("onclick", "changeFamily(\"" + "Ticket_Container" + idnum.toString() + "\")");
		changeAdult("Ticket_Container" + idnum.toString())
		//update price included in changeAdult()
	} else {
		alert("You may not buy more than 20 tickets at once");
		num = num - 1;
	}
}

function deleteTicket(ticket){
	var parent = ticket.parentNode;
	parent.removeChild(ticket);
	num = num - 1;
	updatePrice();
}

function changeAdult(parentId){
	var newMadeTicket = document.getElementById(parentId);
	newMadeTicket.children[0].children[0].children[0].innerHTML = "Adult Ticket";
	newMadeTicket.setAttribute("data-type", "adult");
	newMadeTicket.children[1].innerHTML = "£10.00";
	updatePrice();
}

function changeChild(parentId){
	var newMadeTicket = document.getElementById(parentId);
	newMadeTicket.children[0].children[0].children[0].innerHTML = "Child Ticket";
	newMadeTicket.setAttribute("data-type", "child");
	newMadeTicket.children[1].innerHTML = "£7.00";
	updatePrice();
}

function changeFamily(parentId){
	var newMadeTicket = document.getElementById(parentId);
	newMadeTicket.children[0].children[0].children[0].innerHTML = "Family Ticket";
	newMadeTicket.setAttribute("data-type", "family");
	newMadeTicket.children[1].innerHTML = "£15.00";
	updatePrice();
}

function updatePrice(){
	var price = 0;
	var tickets = document.getElementById("scrollBox").children;
	for (let i = 0;i < tickets.length; i++){	
		type = tickets[i].getAttribute("data-type")
		switch(type){
			case "adult":
				price = price + 10;
				break;
			case "child":
				price = price + 7;
				break;
			case "family":
				price = price + 15;
				break;
		}
	}
	document.getElementById("price").innerHTML = ("Total: £" + price.toString() + ".00");
}

function addName(){
	
}

function test_alert(x){
	alert(x);
}