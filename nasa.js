
$(".botao").on("click",function(){
    
    let input = document.querySelector('.data').value;
    console.log(input);
    buscaImagem(input);
  
});

    
    function buscaImagem(input){
        const url = `https://api.nasa.gov/planetary/apod?api_key=wMrARwfxakmR9TeyL5R7DW38EQdVDGcXYoIsF0TX&date=${input}`
        $.ajax({
            'url':url,
            "success":function(resultado){
                if(resultado.media_type == "image"){
                    console.log(resultado)
                    $("video").addClass("oculto"),
                    $(".foto").html(`<img src=${resultado.hdurl} alt ="">`)
                    
                } else {
                    console.log(resultado)
                    $(".foto").addClass("oculto"),
                    $(".video").html(`<iframe src=${resultado.hdurl} frameborder="0" allowfullscreen></iframe>`);
                }
              
                $(".nome").html(`<h1 >${resultado.title}</h1>`);
                $(".text").html(`<p >${resultado.explanation}</p>`);
                $(".data").html(`<h3 >${resultado.date}</h3>`);
            }
        }) 
    }

