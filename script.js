// grab all panel classes
const panels = document.querySelectorAll('.panel')

// loop through the node list
panels.forEach((panel) => {
    // listen for a click
    panel.addEventListener('click', () => {
        removeActive()
        // if clicked -> add a class of active (so also flex = 5)
        panel.classList.add("active")
    })
})

// function to remove active class from elements
function removeActive() {
    // loop through panels
    panels.forEach(panel => {
        // remove active classes from panel objects
        panel.classList.remove('active')
    })
}