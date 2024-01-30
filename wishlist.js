// // Get the button with the ID "printable"
var printButton = document.getElementById("printable");
// Add an event listener to the print button, calling the printView function when clicked
printButton.addEventListener("click", printView);


// Get the button with the ID "addIt"
var addButton = document.getElementById("addIt");
// Add an event listener to the add button, calling the addTheThing function when clicked
addButton.addEventListener("click", addTheThing);

// Initialize an empty array to store the wishlist items
var myList = [];
// Get the element with the ID "wishList"
var myListArea = document.getElementById("wishList");
// Function to handle adding a new item to the wishlist
function addTheThing() {
    var theThing = document.getElementById("iWant");
    addToTheList(theThing);
    resetInput(theThing);
}
// Function to add a new item to the wishlist
function addToTheList(thingToAdd) {
    myList.push(thingToAdd.value);
    var newListItem = document.createElement("li");
     // Set the content of the new list item to the last added item in the array
    newListItem.innerHTML = myList[myList.length - 1];
       // Append the new list item to the wishlist
    myListArea.appendChild(newListItem);
}
// Function to reset the value of an input element
function resetInput(inputToReset) {
    inputToReset.value = "";
}
// Function to handle the print view
function printView() {
    var listPage = document.getElementById("listPage");
    var formArea = document.getElementById("formArea");
    // Set the display style of the formArea to "none" to hide it
    formArea.style.display = "none";

    // Add the "print" class to the listPage element
    listPage.className = "print";

    // Clear the content of the wishlist area
    myListArea.innerHTML = "";

     // Sort the wishlist items
    myList.sort();
// Loop through the sorted wishlist items and add them to the wishlist area
    for (var i = 0; i < myList.length; i++) {
        wishList.innerHTML += "<li>" + myList[i] + "</li>";
    }

    // Automatically open the Print dialog box
    //window.print();
}