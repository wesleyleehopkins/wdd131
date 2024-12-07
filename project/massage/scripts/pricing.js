import massageTypes from './massage_type.mjs';

const swedish = document.querySelector('#sweedishTime');

const sweedishInj = function () {
    const variable = document.querySelector('#sweedish')
    if (swedish.value == '30 minute') {
        const template = `
            <img src="images/massage_30_min.webp" height="300px" width="300px">
            <h2>30 Minute Sweedish Massage </h2>
            <p>A 30-minute Swedish massage to quickly relieve stress and promote relaxation.
            </p>
                <div class="button-box">
                    <a class="book" href="services.html">Book Now</a>
                </div>
                `
        variable.innerHTML = template


    }
    else if (swedish.value == '60 minute') {
        const template = `
                        <img src="images/massage_60_min.webp" height="300px" width="300px">
                        <h2>60 Minute Sweedish Massage </h2>
                        <p>A 60-minute Swedish massage designed for deep relaxation and enhanced circulation.
                        </p>
                            <div class="button-box">
                                <a class="book" href="services.html">Book Now</a>
                            </div>
                            `
        variable.innerHTML = template


    }
    else if (swedish.value == '90 minute') {
        const template = `
                        <img src="images/massage_90_min.webp" height="300px" width="300px">
                        <h2>90 Minute Sweedish Massage </h2>
                        <p>A 90-minute Swedish massage designed for deep relaxation and enhanced circulation.
                        </p>
                            <div class="button-box">
                                <a class="book" href="services.html">Book Now</a>
                            </div>
                            `
        variable.innerHTML = template


    }
    else if (swedish.value == '120 minute') {
        const template = `
                        <img src="images/sweedish.jpg" height="300px" width="300px">
                        <h2>120 Minute Sweedish Massage </h2>
                        <p>A 120-minute Swedish massage designed for deep relaxation and enhanced circulation.
                        </p>
                            <div class="button-box">
                                <a class="book" href="services.html">Book Now</a>
                            </div>
                            `
        variable.innerHTML = template


    }

}

swedish.addEventListener('change', sweedishInj)

const deepTissue = document.querySelector('#deepTissueTime');

const deepTissueInj = function () {
    const variable = document.querySelector('#deep-tissue')
    if (deepTissue.value == '30 minute') {
        const template = `
            <img src="images/massage_30_min.webp" height="300px" width="300px">
            <h2>30 Minute Sweedish Massage </h2>
            <p>A 30-minute Swedish massage to quickly relieve stress and promote relaxation.
            </p>
                <div class="button-box">
                    <a class="book" href="services.html">Book Now</a>
                </div>
                `
        variable.innerHTML = template


    }
    else if (swedish.value == '60 minute') {
        const template = `
                        <img src="images/massage_60_min.webp" height="300px" width="300px">
                        <h2>60 Minute Sweedish Massage </h2>
                        <p>A 60-minute Swedish massage designed for deep relaxation and enhanced circulation.
                        </p>
                            <div class="button-box">
                                <a class="book" href="services.html">Book Now</a>
                            </div>
                            `
        variable.innerHTML = template


    }
    else if (swedish.value == '90 minute') {
        const template = `
                                    <img src="images/massage_90_min.webp" height="300px" width="300px">
                                    <h2>90 Minute Sweedish Massage </h2>
                                    <p>A 90-minute Swedish massage designed for deep relaxation and enhanced circulation.
                                    </p>
                                        <div class="button-box">
                                            <a class="book" href="services.html">Book Now</a>
                                        </div>
                                        `
        variable.innerHTML = template


    }

}

swedish.addEventListener('change', sweedishInj)

onchange