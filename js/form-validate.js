$(function() {
    $("input[class='input-fld number-input']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});