var verticalTag = $('#verticalTag');
var projectDescription1 = $('#projectDescription1');
var projectDescription2 = $('#projectDescription2');

console.log(verticalTag, projectDescription1);


function changeVerticalTag(newText, fade) {

    $(verticalTag).text(newText);
    if (fade === 'fadeIn') {
        $(verticalTag).fadeIn();
    }
    else {
        $(verticalTag).fadeOut();
    }
}

$(document).ready(function(){
    $(window).scroll(function() {
        if (isViewportVisible(projectDescription1) === true) {
            changeVerticalTag('e-commerce', 'fadeIn');
        }
        else if (isViewportVisible(projectDescription2) === true) {
            changeVerticalTag('full stack project', 'fadeIn');
        }
        else {
            changeVerticalTag('', 'fadeOut');
        }
    });
});

function isViewportVisible(element) {
    var top_of_element = $(element).offset().top;
    var bottom_of_element = $(element).offset().top + $(element).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        return true;
    } else {
        return false;
    }
}
