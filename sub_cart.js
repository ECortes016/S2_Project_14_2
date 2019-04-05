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
      var addButtons = document.getElementsByClassName("addButton");

      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }

      function addItem(e) {
            var foodItem = e.target.nextElementSibling;

            var foodID = document.getElementById("foodItem").value;
            var foodDescription = foodItem.cloneNode(true);

            var cartBox = document.getElementById("cart");

            var duplicateOrder = false;

            for (var i = 0; i < cartBox.length; i++) {
                  if (i.cartBox) {

                  } else {

                  }
            }
      }
}