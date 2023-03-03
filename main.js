var count = 0;

$("#boton").click(function() {
    count = (count + 1) % 10;
    $("#texto").text(count);
});