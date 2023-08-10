$(function() {
    $(".datePick").datepicker({
        dateFormat: 'yy-mm-dd',
        showMonthAfterYear:true,
        changeYear: true, //콤보박스에서 년 선택 가능
        changeMonth: true,
        
    });
});