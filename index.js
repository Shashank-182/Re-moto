
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }
        document.querySelector('.carousel-images').style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, 5000);

    showSlide(currentIndex);

    // Ensure that the buttons exist before adding event listeners
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    } else {
        console.error('Navigation buttons not found.');
    }
});


function showSidebar() {
    document.getElementById("sidenav").style.width = "250px";
}

function hideSidebar() {
    document.getElementById("sidenav").style.width = "0";
}

function validate() {
    const name = document.getElementById('username').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const errorMessage = document.getElementById('error-message');
    
    const nameRegex = /^[A-Za-z\s]+$/; 
    const mobileRegex = /^[0-9]{10}$/; 

    if (!nameRegex.test(name)) {
        errorMessage.textContent = "Please enter a valid name (letters and spaces only).";
        return false;
    }

    if (!mobileRegex.test(mobile)) {
        errorMessage.textContent = "Please enter a valid mobile number (10 digits).";
        return false;
    }

    errorMessage.textContent = "";
    alert("Registration successful!");
    return true;
}


