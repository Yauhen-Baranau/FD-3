test = () => { //INSERT — добавление новой строки
      
    var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
  
    let sp = new URLSearchParams();
    sp.append('f', 'INSERT');
    sp.append('n', 'BARANAU_FD3');
    sp.append('v', 'Привет');

    fetch(ajaxHandlerScript, { method: 'post', body: sp })
        .then( response => response.json() )
        .then( data => { console.log(data); } )
        .catch( error => { console.error(error); } );
  }



   t = ()  => { // READ — чтение строки

  var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

    let sp = new URLSearchParams();
    sp.append('f', 'READ');
    sp.append('n', 'BARANAU_FD3');

    fetch(ajaxHandlerScript, { method: 'post', body: sp })
        .then( response => response.json() )
        .then( data => { console.log(data); } )
        .catch( error => { console.error(error); } );
}



//LOCKGET — чтение строки и планирование её изменения

tt = () => {

    var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

    let sp = new URLSearchParams();
    sp.append('f', 'LOCKGET');
    sp.append('n', 'BARANAU_FD3');
    sp.append('p', ??pass)

    fetch(ajaxHandlerScript, { method: 'post', body: sp })
        .then( response => response.json() )
        .then( data => { console.log(data); } )
        .catch( error => { console.error(error); } );

}

//UPDATE — изменение заблокированной строки

tttt = () =>{

    var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

    let sp = new URLSearchParams();
    sp.append('f', 'UPDATE');
    sp.append('n', 'BARANAU_FD3');
    sp.append('p', ??pass);
    sp.append('v', -----) // значение

    fetch(ajaxHandlerScript, { method: 'post', body: sp })
        .then( response => response.json() )
        .then( data => { console.log(data); } )
        .catch( error => { console.error(error); } );

}