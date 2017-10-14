$(document).ready(function(){
   var arregloDeObjetos = [];
   var numeroPost = 0;
   //console.log("hola");
    //var postText = $("textarea#textPost").val();
   // console.log("Estamos Listos");
    $("button#add-post").on("click", function(event){
        var postText = $("textarea#textoPost").val();
        postText=$.trim(postText);
       // console.log(postText);
        //console.log(postText.length);
            if (postText !== ""){
                console.log($("div.mi-post").length + 1);
                 var nuevoPost = { 
                    numero: $("div.mi-post").length +1,
                    contenido: postText
        };
       // console.log(postText);

        arregloDeObjetos[arregloDeObjetos.length] = nuevoPost;
        //nuevoPost++;

        var html = $("div#posts").html();

        $("div#posts").prepend(
            '<div id="mi-post-'+ nuevoPost.numero +'"+ class="container mi-post">'+
            '<div class="row" style="background-color:rgba(14, 39, 102, 0.76)">'+
            '<div class="col-lg-4">'+
                '<img src="img/kobe.jpg">'+
           '</div>'+
            '<div class="col-lg-7" >'+
                '<h3>Manuel Santos</h3>'+
                '<h3>Post #' +nuevoPost.numero+ '</h3>'+
            '</div>'+
            '<div class="col-lg-1">'+
                '<button class="btn btn-danger btn-sm post-delete" data-numero="'+ nuevoPost.numero +'">&times;</button>'+
            '</div>'+
        '</div>'+
        '<div class="row" style="background-color:rgba(14, 39, 102, 0.76)">'+
            '<div class="col-lg-12">'+
                nuevoPost.contenido+
                '<br>'+ 
            '</div>'+
        '</div>'+
        '</div>'+
        '<br>'
        );
        $("textarea#textoPost").val("");

        //$("button#close-post").click();

        $("div#exampleModal").modal("hide");

    }else{
        alert("Escribe algo");
    }
        
    });

    $("div#posts")// en que contenedor lo vamos a buscar
    .on("click", "button.post-delete",
    function(event){
        if ( confirm("Estas seguro?") ){

            var numero = $(this).data("numero");
            var miId = "div#mi-post-" + numero;
    
            console.log("Sale bye");
            $(miId).remove();
        }

    });
}); // cerrar el cuerpo del JQuery