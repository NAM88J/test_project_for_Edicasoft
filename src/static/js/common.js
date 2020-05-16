$('.main__area-form-submit').on('click', function(e){
    e.preventDefault();
    var el1 = $('#id1'),
        el2 = $('#id2'),
        el3 = $('#id3');
    if (el1.val().length < 2 ) {
        el1.addClass('error');
    } else {
        el1.removeClass('error');
    }
    if (el2.val().length < 2 ) {
        el2.addClass('error');
    } else {
        el2.removeClass('error');
    }
    if (el3.val().length < 2 ) {
        el3.addClass('error');
    } else {
        el3.removeClass('error');
    }
    if (el1.val().length < 2 || el2.val().length < 2 || el3.val().length < 2) {
        alert("Send ERROR");
    } else {
        alert("Send OK");
    }
})
