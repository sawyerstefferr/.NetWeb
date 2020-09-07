
$(function () {

    var a = getAnimated();
    $('#title').addClass(a);
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)

    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });
    var numChecked = 0;

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        numChecked = howManyChecked();
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
            $('#' + this.id + 'Img').addClass('animated bounceOutUp');
    });
    $('#allColors').on('click', function () {
        numChecked = 3;
        $('.form-check-input').each(function () {
            $(this).prop('checked', true);
            $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown')
        });
    });
    $('#submit').on('click', function() {
        if (numChecked == 0) {
            $('#noBalloons').toast('show');
        }
    });

    $('#redDiv').hover(function () {
        $('#title').css('color', 'red');
    });
    $('#greenDiv').hover(function () {
        $('#title').css('color', 'green');
    }); 
    $('#blueDiv').hover(function () {
        $('#title').css('color', 'blue');
    });
});
function howManyChecked() {
    return $("input:checkbox:checked").length;
}
function getAnimated() {
    var aNum = Math.floor(Math.random() * 3);
    var a = "animated ";
    switch (aNum) {
        case 0: a += "tada";
            break;
        case 1: a += "jello";
            break;
        case 2: a += "rubberBand";
            break;
    }
    return a;

}