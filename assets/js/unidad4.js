function lineal()
{
  var cantidad=document.getElementById("cantidad").value;
  var tabla_valores=document.getElementById("tabla_valores");
  alert("Estoy en el JS "+ cantidad);
  
  //Dibujar la tabla
  tabla_valores.innerHTML="  <table> "+
             "<thead> "+
               " <tr> "+
                   " <th>Product</th> "+
                   " <th>Inflation Rate</th> "+
                   " <th>Note</th> "+
               " </tr> "+
           " </thead> "+
 /*
            <tbody>
                <tr>
                    <td>Coke® Inflation Index</td>
                    <td>7.23%</td>
                    <td>Yeah, its about $2/bottle now</td>
                </tr>
                <tr>
                    <td>Gas Inflation Index</td>
                    <td>6.94%</td>
                    <td>Such a pain at the pump!</td>
                 </tr>

            </tbody>
            */
 
           " <tfoot> "+
               " <tr><td >Copyright &#9400 2011 Infosoft International Inc</td>"+
             "   </tr>"+
          "  </tfoot>"+
        "</table>";

}