$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })
})

$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        const novaTarefa = $(".form-input").val();

        const tarefa = $("ul li")
        .toArray()
        .some((li) => $(li).text() === novaTarefa);
        if (tarefa) {
            alert("Esta tarefa ja existe na lista.");
            return;
        }

        const listaTarefas = $(`<li class="has-marker">${novaTarefa}</li>`);
        $(listaTarefas).appendTo("ul");
        $(".form-input").val("");
    });

    $("ul").on("click", "li", function () {
        $(this).toggleClass("strike-through");
    });
});