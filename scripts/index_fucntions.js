$(window).scroll(function () {

    // dont run on phones
    if ($(window).width() > 600) {

        if ($(window).scrollTop() >= $("#bio").height() * 1.05) {
            console.log("FIXED");
            $("#sectionSelector").css("position", "fixed");
            $("#sectionSelector").css("top", "8%");
            $("button").css("display", "block");
        } else {
            console.log("STATIC");
            $("#sectionSelector").css("position", "static");
            $("#sectionSelector").css("top", "8%");
            $("button").css("display", "block");
        }
    }
})