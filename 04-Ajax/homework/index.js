
// data y status
// data que me devuelvo el request get, el array de objetos (todo, lo cual solo necesitaba los nombres)
// status es el estado
// gat recibe un callback que se ejecuta una vez que termine el get

$("#boton").click(function(){
    $.get("http://localhost:5000/amigos", function(data){
        
    for (let i=0; i < data.length;i++){
    $('#lista').append('<li>' + data[i].name + '<li>');
    }
    });
});

$("#search").click(function(){
    let inputValue = $('#input').val();
    $.get("http://localhost:5000/amigos/${inputValue}", function(data){
        let span = document.querySelector('#amigos');
        span.innerHTML =data.name;

    });
});

$("#delete").click(function(){
    let inputValue = $('#inputDelete').val();
    $.ajax({
        url: 'http://localhost:5000/amigos/${inputValue}',
        type: 'DELETE',
        success: function (result){
            $('body').append('<span>Tu amigo fue borrado con exito</span>');
        }

    })
});