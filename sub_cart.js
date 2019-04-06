"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Emmanuel Cortes Castaneda
   Date: 4.3.19  

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

// Upon the window loading up the setupCart function will be ran
window.onload = setupCart;

function setupCart() {
      // Stores a collection of elements belonging to the addButton class
      var addButtons = document.getElementsByClassName("addButton");

      for (var i = 0; i < addButtons.length; i++) {
            // Every time the addButtons collection is clicked then the addItem function will be ran
            addButtons[i].onclick = addItem;
      }

      function addItem(e) {
            // Stores the element next to the event that is being targeted
            var foodItem = e.target.nextElementSibling;
            // Stores the id of the foodItem variable
            var foodID = foodItem.getAttribute("id");
            // Creates copies of the foodItem element and all of its descendants 
            var foodDescription = foodItem.cloneNode(true);
            // Stores the element with the id of cart
            var cartBox = document.getElementById("cart");
            var duplicateOrder = false;


            for (var n = cartBox.firstChild; n = n.nextElementSibling; n !== null) {
                  // If the id of the node is strictly equal to the foodID variable then the code within will run
                  if (n.id === foodID) {
                        duplicateOrder = true; 
                        n.firstElementChild.textContent++;
                        break;
                  }
            }

            // If the duplicateOrder is still false then the code within the if statement will run
            if (duplicateOrder === false) {
                  var orderCount = document.createElement("span");
                  orderCount.textContent = "1";
                  foodDescription.insertBefore(orderCount, foodDescription.firstChild);
                  cartBox.appendChild(foodDescription);
            }
      }
}