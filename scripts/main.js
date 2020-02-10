$.ajaxSetup({
    // Disable caching of AJAX responses
    cache: false
});

// import all sections
$(document).ready(function() {
    // Load sections
    $("#bio").load("views/bio.html");
    $("#serpuiExplanation").load("views/serpuiExplanation.html");
    $("#serpuiScreenshotCarousel").load("views/serpuiScreenshotCarousel.html");
    $("#serpuiCodeSamplesCarousel").load("views/serpuiCodeSamplesCarousel.html");
    $("#christmasDoorExplanation").load("views/christmasDoorExplanation.html");
    $("#pacemakerExplanation").load("views/pacemakerExplanation.html");
    $("#pacemakerControlsCarousel").load("views/pacemakerControlsCarousel.html");
    $("#capstoneCadCarousel").load("views/capstoneCadCarousel.html");
    $("#capstoneControlsCarousel").load("views/capstoneControlsCarousel.html");
    $("#wheelbarrowContent").load("views/wheelbarrowContent.html");
});
$('.carousel').carousel({
    interval: false
});


// lock side nav options with scroll
$(window).scroll(function() {
    if ($(window).scrollTop() >= $("#bio").height() * 1.05) {
        $(".sectionSelector").css("position", "fixed");
        $(".sectionSelector").css("top", "8%");
        $("button").css("display", "block");
    } else {
        $(".sectionSelector").css("position", "static");
        $(".sectionSelector").css("top", "8%");
        $("button").css("display", "block");
    }
})

// nav options functions
function goTo(elemID) {
    var elem = document.getElementById(elemID);
    elem.scrollIntoView();
    console.log('Going to:', elemID);
}