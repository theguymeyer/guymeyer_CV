$.ajaxSetup({
    // Disable caching of AJAX responses
    cache: false
});

// import all sections
$(document).ready(function() {
    // Load sections
    $("#bio").load("bio.html");
    $("#serpuiExplanation").load("serpuiExplanation.html");
    $("#serpuiScreenshotCarousel").load("serpuiScreenshotCarousel.html");
    $("#serpuiCodeSamplesCarousel").load("serpuiCodeSamplesCarousel.html");
    $("#christmasDoorExplanation").load("christmasDoorExplanation.html");
    $("#pacemakerExplanation").load("pacemakerExplanation.html");
    $("#pacemakerControlsCarousel").load("pacemakerControlsCarousel.html");
    $("#capstoneCadCarousel").load("capstoneCadCarousel.html");
    $("#capstoneControlsCarousel").load("capstoneControlsCarousel.html");
    $("#wheelbarrowContent").load("wheelbarrowContent.html");
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