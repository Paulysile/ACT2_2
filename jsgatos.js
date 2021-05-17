$(document).ready(function() {

    $.get("https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc", function(response){
        console.log("El servicio CatApi ha respondido")
        console.log(response);

        $.each(response, function(index, element){
            
            registoHTML = "<tr>";
            registoHTML += "    <td>";
            registoHTML += "        "+index;
            registoHTML += "    </td>";
            registoHTML += "    <td>";
            registoHTML += "        <img src=\""+element.url+"\" id=\"image-"+element.id+"\" with=\"200\" height=\"auto\"    />";
            registoHTML += "    </td>";
            registoHTML += "    <td>";
            registoHTML += "        <button class=\"btn btn-info\">Cambiar imagen</button>"
            registoHTML += "    </td>";
            registoHTML += "</tr>";

            $("#listado-gatos").append(registroHTML);

        });
    });
});
