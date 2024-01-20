
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function updateImage() {
    screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function showSmallRoom() {

    if (screenWidth <= 768) {
        document.querySelector('.banner').style.backgroundImage = 'url("img/small-mobile.jpg")';
    } else {
        document.querySelector('.banner').style.backgroundImage = 'url("img/smallRoom-banner.jpg")';
    }
    document.querySelector('.head').style.opacity = '0';
    document.querySelector('.text').style.opacity = '0';
}

function hideSmallRoom() {
    // Reset the background image
    document.querySelector('.banner').style.backgroundImage = 'url("img/background-banner.jpg")';
    // Show the elements with the classes 'head' and 'text'
    document.querySelector('.head').style.opacity = '1';
    document.querySelector('.text').style.opacity = '1';
}

function showMidRoom() {
    if (screenWidth <= 768) {
        document.querySelector('.banner').style.backgroundImage = 'url("img/mid-mobile.jpg")';
    } else {
        document.querySelector('.banner').style.backgroundImage = 'url("img/midRoom-banner.jpg")';
    }
    document.querySelector('.head').style.opacity = '0';
    document.querySelector('.text').style.opacity = '0';
}

function hideMidRoom() {
    // Reset the background image
    document.querySelector('.banner').style.backgroundImage = 'url("img/background-banner.jpg")';
    // Show the elements with the classes 'head' and 'text'
    document.querySelector('.head').style.opacity = '1';
    document.querySelector('.text').style.opacity = '1';
}

function showLargeRoom() {
    document.querySelector('.banner').style.backgroundImage = 'url("img/largeRoom-banner.jpg")';
    document.querySelector('.head').style.opacity = '0';
    document.querySelector('.text').style.opacity = '0';
}

function hideLargeRoom() {
    // Reset the background image
    document.querySelector('.banner').style.backgroundImage = 'url("img/background-banner.jpg")';
    // Show the elements with the classes 'head' and 'text'
    document.querySelector('.head').style.opacity = '1';
    document.querySelector('.text').style.opacity = '1';
}

function goToPage() {
    window.location.href = "https://www.facebook.com/profile.php?id=100057029126631";
}

function scrollToSection(sectionClassName) {
    var elements = document.getElementsByClassName(sectionClassName);
    if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: 'smooth' });
    }
}

window.addEventListener('resize', updateImage);