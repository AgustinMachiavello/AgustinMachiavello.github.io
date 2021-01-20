function changeVerticalTag(newText, fade) {
    var verticalTag = $('#verticalSectionInfo');
    $(verticalTag).text(newText);
    if (fade === 'fadeIn') {
        $(verticalTag).fadeIn();
    }
    else {
        $(verticalTag).fadeOut();
    }
}

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

$(document).ready(function(){
    var verticalTag = $('#verticalSectionInfo');
    var verticalTagTriggers = $('.vertical-tag-trigger');
    console.log(verticalTag, verticalTagTriggers);

    // Change vertical left label text based if an element is visible
    $(window).scroll(function() {
        var someTagIsVisible = false;
        verticalTagTriggers.each(
            function (i) {
                var tagElement = $(this)[0];
                if (isViewportVisible(tagElement) == true) {
                    someTagIsVisible = true;
                    changeVerticalTag(tagElement.dataset.text, 'fadeIn');
                }
            }
        );
        /*
        if (!someTagIsVisible) {
            changeVerticalTag('', 'fadeOut');
        }*/
    });
});

function OnwindowClick(elem , action){
    $(document).on('click',function(e){
        if (!$(elem).is(e.target))
        {
            action();
        }
    });
}

OnwindowClick('#menuLinks', function(){
    // Hide menu if clicked outside
    $('#menuLinks').collapse('hide');
 });
