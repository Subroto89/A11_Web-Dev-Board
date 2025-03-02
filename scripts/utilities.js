// --------------------------------  Reuseable Functions ---------------------------------
// Function to get an elements integer value
function valueById(id){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseInt(element)
    return convertedElement;
}

// ----------------------------------------------------------------------------------------

// Function to get an element
function elementById(id){
    const element = document.getElementById(id);
    return element;
}