window.addEventListener('DOMContentLoaded', async (event) => {
    await getData()
    if ($('.navbar').length > 0) {
        $(window).on("scroll load resize", function() {
            checkScroll();
        });
    }
});
const getData = async () => {
    var url = 'data.json'
    const data = await readData(url);
    const destination = data.destination;
    const destinationContainer = document.getElementById('destination-container')
    if (typeof(destinationContainer) != 'undefined' && destinationContainer != null) {
        destination.forEach(async (element) => {
            var destination = document.createElement('div')
            destination.classList.add('col-12')
            destination.classList.add('col-md-6')
            destination.classList.add('col-lg-4')
            destination.classList.add('destination-item')
            destination.innerHTML = `
            <div class="destination-image" style="background-image: url(${element.url})">
                <button class="fav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 1em;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
                <div class="destination-detail">
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                </div>
            </div>`
            destinationContainer.appendChild(destination)
        });
    }
    const culinary = data.culinary;
    const culinaryContainer = document.getElementById('culinary-container')
    if (typeof(culinaryContainer) != 'undefined' && culinaryContainer != null) {
        culinary.forEach(async (element) => {
            var food = document.createElement('div')
            food.classList.add('col-12')
            food.classList.add('col-md-6')
            food.classList.add('col-lg-4')
            food.classList.add('culinary-item')
            food.innerHTML = `
            <div class="culinary-image" style="background-image: url(${element.url})">
                <button class="fav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 1em;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                <div class="culinary-detail">
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                </div>
            </div>`
            culinaryContainer.appendChild(food)
        });
    }
}
const readData = async (url) => {
    const data = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json()).then(data => data).catch(console.log);
    return await data
}
const checkScroll = () => {
    var startY = $('.navbar').height() * 2;
    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
        $('.navbar').removeClass("navbar-dark");
        $('.navbar').addClass("navbar-light");
    } else {
        $('.navbar').removeClass("scrolled");
        $('.navbar').removeClass("navbar-light");
        $('.navbar').addClass("navbar-dark");
    }
}