() => {

    $('#search').val("Enter Name or Description");
    var keyword;
    $('#submit').click(
        $.post('localhost:3000', () => $('#search').val())
        
    );

}
    