
// Mobile Navigation

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// WhatsApp Product Ordering

function orderProduct(productName) {

    // Replace with your WhatsApp number
    let phoneNumber = "919791378372";

    let message = "Hello Sri Andal Foods! I am interested in ordering " +
                  productName + ". Please share the price and details.";

    let whatsappURL = "https://wa.me/" + phoneNumber +
                      "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("active");

    });

});

