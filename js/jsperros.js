function btnaction(identificador){
    console.log("se ha presionado el boton para la imagen id: "+identificador)
    $.get("https://api.thedogapi.com/v1/images/search?limit=1", function(response){
        $.each(response, function(index, element){
            $("#image-"+ identificador).attr("src",element.url)
        });
    })
}

$(document).ready(function() {

    $.get("https://api.thedogapi.com/v1/images/search?limit=5&page=10&order=Desc", function(response){
        console.log("El servicio CatApi ha respondido")
        console.log(response);
        

        $.each(response, function(index, element){
            
                registroHTML = "<tr>";
                registroHTML += "    <td>";
                registroHTML += "        "+index;
                registroHTML += "    </td>";
                registroHTML += "    <td>";
                registroHTML += "        <img src=\""+element.url+"\" id=\"image-"+element.id+"\" width=\"200\" height=\"auto\"    />";
                registroHTML += "    </td>";
                registroHTML += "    <td>";
                registroHTML += "        <button class=\"btn btn-info\" onclick= \"btnaction('"+element.id+"')\">Cambiar imagen</button>"
                registroHTML += "    </td>";
                registroHTML += "</tr>";

            $("#listado-perros").append(registroHTML);

            });

        
    });
});


