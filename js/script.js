// Validasi form menggunakan JavaScript
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var destination = document.getElementById('destination').value;
    
    if (name === "" || email === "" || destination === "") {
        alert("Semua field harus diisi!");
    } else {
        alert("Formulir berhasil dikirim!");
    }
});

// Fitur auto slide untuk banner
var currentIndex = 0;
var banners = ["url('banner1.jpg')", "url('banner2.jpg')", "url('banner3.jpg')"];
var bannerElement = document.getElementById('banner');

function changeBanner() {
    bannerElement.style.backgroundImage = banners[currentIndex];
    currentIndex = (currentIndex + 1) % banners.length;
}

setInterval(changeBanner, 5000);  // Ganti banner setiap 5 detik
