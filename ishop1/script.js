

var Ishop = React.createClass({

    displayName: 'shop',


  render: function(){
       var compliteArray = [];

       this.props.products.forEach(fo)
         function fo(v,i,a) {
               var str = React.DOM.tr ({key:v.code},
                   React.DOM.td( {className:"bb"}, v.name ),
                   React.DOM.td( {className:"bb"}, v.price ),
                   React.DOM.td( {className:"bb"}, v.foto ),
                   React.DOM.td( {className:"bb"}, v.number ),
                   );
            compliteArray.push(str);   
               
}


return React.DOM.div( {className:null},
     React.DOM.h1 (null, this.props.name ),
     React.DOM.table( {className:"bb"},React.DOM.tbody (null,compliteArray)) 
)

}

   });


