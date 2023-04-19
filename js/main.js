"use strict";

let btn1 = document.getElementsByClassName("btn1")
let btn2 = document.getElementsByClassName("btn2")
let btn3 = document.getElementsByClassName("btn3")
let btn4 = document.getElementsByClassName("btn4")

$(btn1).mouseenter(function () { 
    $(btn1).addClass("animate__jello");
});
$(btn1).mouseleave(function () { 
    $(btn1).removeClass("animate__jello");
});

$(btn2).mouseenter(function () { 
    $(btn2).addClass("animate__jello");
});
$(btn2).mouseleave(function () { 
    $(btn2).removeClass("animate__jello");
});

$(btn3).mouseenter(function () { 
    $(btn3).addClass("animate__jello");
});
$(btn3).mouseleave(function () { 
    $(btn3).removeClass("animate__jello");
});

$(btn4).mouseenter(function () { 
    $(btn4).addClass("animate__jello");
});
$(btn4).mouseleave(function () { 
    $(btn4).removeClass("animate__jello");
});
