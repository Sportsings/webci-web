function mostrarInformacion(opcion) {
  var informacionDiv = document.getElementById("informacion");
  informacionDiv.style.display = "block";
  
  var contenido = "";
  if (opcion === "structServer") {
    contenido = "<div \"des\">"+
    "<p id=\"parrafo\">"+
    "Esta es la estructura que se usa para crear los servidores webs cuyos datos son: <br>"+
    "<li>int server_fd</li><li>int new_socket</li><li>int valread</li><li>int client_socket</li><li>struct sockaddr_in address</li><li>struct sockaddr_in client_address</li><li>socklen_t client_address_length</li><li>int opt</li><li>int addrlen</li><li>int error</li><li>int port</li><li>int buffer_size</li><br>"+
    "La forma en la que se declara la struct es: <br><br><center><b>struct Server servidor</b></center><br>"+
    "Normalmente si se va a crear un servidor web que envie o trabaje con varias paginas html se declara la variable de tipo <em>struct Server</em>"+
    "</p>"+
    "<h2>Funciones de struct Server</h2>"+
    "<p>"+
    "Las funciones para trabajar con struct server son: <br><br>"+
    "<b>start_server_file(&servidor);</b><br><br>Esta funciòn se encargara de inicializar todos los datos de la estructura Server pero datos que deben estar inicializados antes o en la funciòn main son: <b>servidor.port = 8080;</b> y <b>servidor.buffer_size = 4024;</b> Esta funciòn solo recive un parametro que es una variable de la struct Server. La otra funciòn es: <br><br><b>listen_server_file(&servidor, \"index.html\");</b><br><br>Esta funciòn se encarga de escuchar las solicitudes al servidor y recive dos parametros uno que es una variable de la estructura Server y el segundo es la pagina html a enviar. La palabra file es de que estas funciones trabajan con archivos html y tambien son las funciones principales a usar."+
    "</p>"+
    "</div>";
  } else if (opcion === "otrasFunciones") {
    contenido = "Estas funciones trabajan con la estructura Server: "+
    "<br><br><b>listen_server()</b><br>"+
    "Esta funcion recive dos una es una variable de la struct Server y el otro es el codigo html o js que se va a enviar: <br><br><b>"+
    "listen_server(&servidor,\"HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\nCodigo html o javascript\");</b><br>"+
    "<br><b>send_response_inst();</b>"+
    "<br>Esta funcion es exactamente igual a la mencionada anteriormente solo con la diferencia de que en el segundo parametro va el codigo html o js directamente: <br><br><b>"+
    "send_response_inst(&servidor,\"Codigo html o js\");";
  } else if (opcion === "funcionesGet") {
    contenido = "<center><h2>get_response()</h2></center>La funciòn <b>get_response();</b> es una funcion importante ya que devuelve la respuesta recivida y sera de vital importancia para saber qie hacer. Esta funciòn nos permitiria tabajar con datos enviados por formularios directamente y hacer cualquier cosa con ellos.<center><h2>Otras funciones</h2></center>"+
    "<b>search_words()</b><br><br>"+
    "Esta funcion es para buscar palabras dentro de un texto con saltos de lineas lleva dos parametros: uno es el texto al que va a buscar y el. segundo la palabra a encontrar"+
    "<br><br><b>get_POST()</b><br><br>"+
    "Esta funciòn es igual a <b>search_words()</b> es lo mismo solo cambia el nombre o no? solo con la exepciòn de que la funcion <b>search_words()</b> para funcionar bien necesita estar una funcion antes la cual es: <b>split_lines()</b> cuyo unico parametro es el texto en el que se va a buscar.<br><br><b> split_lines(total_text);<br>search_words(total_text,text_search);</b><br><br> Lo contrario de <b>get_POST()</b> que no es necesario y se puede utilizar especificamente para buscar variables o datos enviados por formularios. Otra diferemcia es la cantidad de parametros que son 4 los cuales son: el primero es el texto a buscar el cual seria la respuesta enviada al servidor la cual se puede usar la funciòn <b>get_response()</b> el segundo parametro es el texto a buscar o el nombre del fomulario es decir si en un formulario hay un input llamado username el nombre o variable para enviar el nombre en el segundo parametro tendriamos que porner el nombre: <b>get_POST(get_response(),\"user=\". . .);</b> siempre seguido con el signo igual para evitar problemas los otros dos parametros son dos tipos int los cuales son uno es el inicio de donde se va a devolver el resultado se recomienda siempre sea despues del signo igual es decir si nuestra variable <b>'user='</b> si esta tiene una longitud de 5 el inicio seria 5 y el fin seria el final hasta donde se copiara, aun podria ver problemas con este ùltimo.<br><br><b>get_POST(get_response(),\"user=\",5,30);</b><br><br>"+
    "<b>save_response()</b><br><br>"+
    "Esta funciòn es para guardar en un archivo llamado: 'data_response.txt' las respuestas enviadas por el navegador y solo recive como parametro la funciòn <b>get_response()</b><br><br><b>save_response(get_response());</b>"+
    "";
  } else if (opcion === "plataform") {
    contenido = "<center><h2>get_platform()</h2></center>Esta funciòn tiene dos parametros un es el texto que en este caso seria <b>get_response()</b> y el segundo parametro es un int un numero el cual puede ser 7, 5 o 8 el numero 7 es para Android, 5 para Linux y 8 para Windows y la funcion devuelve la plataforma deacorde al numero y sino la encuentra devuelve WEB_ERROR<br><br><b>get_platform(get_response(),7);</b><br><br>";
  } if(opcion === "emails"){
    contenido = "La struct smtp_email tiene los siguientes datos: "+
    "<br><br><li>char smtp_url[V];</li><li>char user_smtp[V];</li><li>char password_smtp[V];</li><li>char mail_from[V];</li><li>char recipient[V];</li><li>char payload_text[SMTP_TEXT];</li><br><br>"+
    "<b>smtp_url</b> es la url del servidor SMTP<br><br><b>user_smtp</b> es el nombre del servidor SMTP <br><br><b>password_smtp</b> es la contraceña del servidor SMTP<br><br><b>mail_from</b> es su correo o el correo el cual de donde se va a enviar el correo<br><br><b>recipient</b> es el correo del que va a recivir el correo<br><br><b>payload_text</b> es el contenido del correo que se va a enviar<br><br>"+
    "En este caso si se usan todos y para declarar esta estructura es: <b>smtp_email Email</b> y la unica funciòn que la usa es: <br><br><b>send_email()</b><br><br>Esta funciòn recive como unico parametro una variable de la estructura smtp_email pero antes de usar esa estructura y funciòn necesitara tener un servidor SMTP para poder enviar los correos.";
  } else if(opcion === "macros"){
    
    contenido = "Estas son las macros mas usadas o las que normalmente mas se usarian: <br><br>"+
    "<li>ERROR</li><li>OK</li><li>WEB_TRUE</li><li>WEB_FALSE</li><li>WEB_OK</li><li>WEB_ERROR</li><br><br> Estas macros las que mas devuelven las funciònes cuando se envia un error es <b>WEB_ERROR</b> y algunas funciones cuando se envian las cosas bien devuelven <b>WEB_OK</b> y las macros <b>OK</b>, <b>WEB_TRUE</b> y <b>WEB_FALSE </b> son valores similares a los booleanos porque <b>OK</b> y <b>WEB_TRUE</b> son true y <b>WEB_FALSE</b> es false";
  }
  informacionDiv.innerHTML = contenido;
}
