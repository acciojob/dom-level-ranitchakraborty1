//your JS code here. If required.
// script.js
window.onload = function() {
    // Select the element with id 'level'
    let element = document.getElementById('level');

    // Initialize level counter
    let level = 0;

    // Traverse up the DOM tree to count the number of parent elements
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Display the result
    alert("The level of the element is: " + level);
};

