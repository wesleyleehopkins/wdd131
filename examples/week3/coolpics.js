// Select the button by its ID and the navigation by its class
const menuButton = document.querySelector('#menu'); // Changed to '#menu' since it's an ID
const navigation = document.querySelector('.navigation');

// Add click event listener to the button
menuButton.addEventListener('click', () => {
    // Toggle the display property
    if (navigation.style.display === 'none' || navigation.style.display === '') {
        navigation.style.display = 'block'; // Show the navigation
    } else if (navigation.style.display === "block") {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'none'; // Hide the navigation
    }
});

function handleResize() {
    const menu = document.querySelector(".menu");
    if (menu) {
        if (window.innerWidth > 1000) {
            menu.classList.remove("none");
        } else {
            menu.classList.add("none");
        }
    }
}

// Function to create the viewer's HTML template
function viewerTemplate(pic, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>
    `;
}

// Event handler for viewing full-sized images
function viewHandler(event) {
    console.log('Image clicked');
    const clickedElement = event.target;
    const src = clickedElement.getAttribute('src');
    const baseName = src.split('-'); // Extract base name before '-sm'
    const fullImageName = `${baseName}-full.jpeg`;
    const viewerHTML = viewerTemplate(fullImageName, clickedElement.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}



// Function to close the viewer when the close button is clicked. this is to ensure update
function closeViewer() {
    console.log('Close button clicked');
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

// Attach event listeners to all gallery images
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', viewHandler);
});
