import massageTypes from './massage_type.mjs';

// Function to populate Swedish massage details
document.querySelector('#sweedishTime').addEventListener('change', function () {
    const selectedDuration = this.value.trim().toLowerCase(); // Normalize selected value
    const containerElement = document.querySelector('#sweedish');
    const massageDetails = massageTypes.find(
        (item) => item.massageType === 'Swedish' && item.Duration.toLowerCase().includes(selectedDuration)
    );

    if (massageDetails) {
        containerElement.innerHTML = `
            <img src="${massageDetails.image}" height="300px" width="300px" alt="${massageDetails.massageType}">
            <h2>${massageDetails.Duration} Swedish Massage</h2>
            <p>${massageDetails.description}</p>
            <p><strong>Price: $${massageDetails.price}</strong></p>
            <div class="button-box">
                <a class="book" href="services.html">Book Now</a>
            </div>
        `;
    } else {
        console.error('No matching data found for selection:', selectedDuration);
        containerElement.innerHTML = '<p>No details available for the selected option.</p>';
    }
});

// Function to populate Deep Tissue massage details
document.querySelector('#deepTissueTime').addEventListener('change', function () {
    const selectedDuration = this.value.trim().toLowerCase(); // Normalize selected value
    const containerElement = document.querySelector('#deep-tissue');
    const massageDetails = massageTypes.find(
        (item) => item.massageType === 'Deep Tissue' && item.Duration.toLowerCase().includes(selectedDuration)
    );

    if (massageDetails) {
        containerElement.innerHTML = `
            <img src="${massageDetails.image}" height="300px" width="300px" alt="${massageDetails.massageType}">
            <h2>${massageDetails.Duration} Deep Tissue Massage</h2>
            <p>${massageDetails.description}</p>
            <p><strong>Price: $${massageDetails.price}</strong></p>
            <div class="button-box">
                <a class="book" href="services.html">Book Now</a>
            </div>
        `;
    } else {
        console.error('No matching data found for selection:', selectedDuration);
        containerElement.innerHTML = '<p>No details available for the selected option.</p>';
    }
});

// Function to populate Hot Stone massage details
document.querySelector('#hotStoneTime').addEventListener('change', function () {
    const selectedDuration = this.value.trim().toLowerCase(); // Normalize selected value
    const containerElement = document.querySelector('#hot-stone');
    const massageDetails = massageTypes.find(
        (item) => item.massageType === 'Hot Stone' && item.Duration.toLowerCase().includes(selectedDuration)
    );

    if (massageDetails) {
        containerElement.innerHTML = `
            <img src="${massageDetails.image}" height="300px" width="300px" alt="${massageDetails.massageType}">
            <h2>${massageDetails.Duration} Hot Stone Massage</h2>
            <p>${massageDetails.description}</p>
            <p><strong>Price: $${massageDetails.price}</strong></p>
            <div class="button-box">
                <a class="book" href="services.html">Book Now</a>
            </div>
        `;
    } else {
        console.error('No matching data found for selection:', selectedDuration);
        containerElement.innerHTML = '<p>No details available for the selected option.</p>';
    }
});

// Function to populate Prenatal massage details
document.querySelector('#prenatalTime').addEventListener('change', function () {
    const selectedDuration = this.value.trim().toLowerCase(); // Normalize selected value
    const containerElement = document.querySelector('#prenatal');
    const massageDetails = massageTypes.find(
        (item) => item.massageType === 'Prenatal' && item.Duration.toLowerCase().includes(selectedDuration)
    );

    if (massageDetails) {
        containerElement.innerHTML = `
            <img src="${massageDetails.image}" height="300px" width="300px" alt="${massageDetails.massageType}">
            <h2>${massageDetails.Duration} Prenatal Massage</h2>
            <p>${massageDetails.description}</p>
            <p><strong>Price: $${massageDetails.price}</strong></p>
            <div class="button-box">
                <a class="book" href="services.html">Book Now</a>
            </div>
        `;
    } else {
        console.error('No matching data found for selection:', selectedDuration);
        containerElement.innerHTML = '<p>No details available for the selected option.</p>';
    }
});
