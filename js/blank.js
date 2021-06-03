// Get the URL
const queryString = window.location.search; 

// Get the arguments
const urlParams = new URLSearchParams(queryString);

// Get the colour (to change background)
if (urlParams.get('colour')) {
    var colour = urlParams.get('colour') // Prioritise UK spelling :P
} else if (urlParams.get('color')){
    var colour = urlParams.get('color') // Accept US spelling
} else {
    var colour = "000"
}

// Change the background colour
document.body.style.backgroundColor = "#"+colour;