/*
Author: Elaiah S. Asperin
Created: 11 November 2021
Last Modified: 11 November 2021
Description: General script for "AI: The Inner Workings"
*/

function dropdown() {
    var x = document.getElementsByTagName("header");
    if (x[0].className === "") {
        x[0].className += "responsive";
    }
    else {
        x[0].className = "";
    }
}
