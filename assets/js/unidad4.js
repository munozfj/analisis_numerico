function armar_tabla()
{
  var cantidad=document.getElementById("cantidad").value;
  var tabla_valores=document.getElementById("tabla_valores");
  var i;

  //Dibujar la tabla
  var cadena_virtual=
  "<table class='table table-striped' > "+

    /* Cabecera */
    "<thead> "+
      "<tr> "+
        "<th> n </th> "+
        "<th>Xn </th> "+
        "<th>Yn </th> "+
        "<th>Xn * Yn </th> "+
        "<th>(Xn)^2 </th> "+
        "<th>Y'n = B x + A</th> "+
        "<th>Yn - Y'n </th> "+
        "<th>E=(Yn-Y'n)^2 </th> "+
      "</tr> "+
    "</thead> "+

    /* Cuerpo */
    "<tbody> ";
      

      for(i=0;i<cantidad;i++)
      {
        cadena_virtual = cadena_virtual + 
        "<tr> "+
        "<td>" + i+"</td> "+
        "<td><input type='text' size='2' maxlength='2' > </td> "+
        "<td><input type='text' size='2' maxlength='2' > </td> "+
        "<td><input type='output'> </td> "+
        "<td><input type='output'>  </d> "+
        "<td><input type='output'> </td> "+
        "<td><input type='output'>  </td> "+
        "<td><input type='output'> </td> "+
        "</tr> ";
      }

  cadena_virtual = cadena_virtual + 
      
    "</tbody> "+
 
    /* Pie */
    "<tfoot> "+
      "<tr> " +
        "<td>Total</td> "+
        "<td>Xn </td> "+
        "<td>Yn </td> "+
        "<td>Xn * Yn </td> "+
        "<td>(Xn)^2 </td> "+
        "<td>Y'n = B x + A</td> "+
        "<td>Yn - Y'n </td> "+
        "<td>E=(Yn-Y'n)^2 </td> "+
      "</tr> "+
    "</tfoot>"+
  "</table>";

  //Dibujar la tabla
  tabla_valores.innerHTML=cadena_virtual;

  //alert("Estoy en el JS "+ cadena_virtual);

}
