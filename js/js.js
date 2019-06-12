$("ul").on("click", "li", function() {
    $(this).toggleClass("completado");
});

$("ul").on("click", "li span", function() {
    $(this)
        .parent()
        .fadeOut(500, function() {
            $(this).remove();
        });
    event.stopPropagation();
});

$("input").keypress(function(event) {
    if (event.which == 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append(
            '<li><span><i class="fa fa-trash"></i></span>' + newTodo + "</li>"
        );
    }
});

$("h1 i").on("click", function() {
    $("input").fadeToggle();
});