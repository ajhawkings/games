// Get the URL
const queryString = window.location.search; 
 // Get the arguments
const urlParams = new URLSearchParams(queryString);
// Get the colour (to change background)
var colour = urlParams.get('color') // Accept US spelling
var colour = urlParams.get('colour') // Prioritise UK spelling :P
console.log(colour)
// Change the background colour
document.body.style.backgroundColor = "#"+colour;



