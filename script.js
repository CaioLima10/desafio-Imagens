function carregar(){
    var texto = window.document.getElementById("texto")
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date();
    var hora = data.getHours();
 
    msg.innerHTML = `Agora São ${hora}:00 Hrs`;

    if(hora >= 0 && hora < 12){
        img.src = "./fotos/manhã.jpg"
        document.body.style.backgroundColor = "rgb(1, 65, 1);"
      
      }else if(hora >= 13 && hora < 18){
        img.src = "./fotos/tarde.jpg"
        document.body.style.backgroundColor = "rgb(4, 4, 116)"

      }else{
        img.src = "./fotos/noite.jpg"
        document.body.style.backgroundColor = "black"
        texto.style.color = "white"
      }
}