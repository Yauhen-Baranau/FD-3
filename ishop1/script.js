

var Ishop = React.createClass({

    displayName: 'shop',


  render: function(){
       var compliteArray = [];

       this.props.products.forEach(fo)
         function fo(v,i,a) {
               var str = React.DOM.tr ({key:v.code},
                   React.DOM.th( {className:"bb"}, v.name ),
                   React.DOM.th( {className:"bb"}, v.price ),
                   React.DOM.th( {className:"bb"}, v.foto ),
                   React.DOM.th( {className:"bb"}, v.number ),
                   );
            compliteArray.push(str);   
            console.log(compliteArray)    
}

return React.DOM.div( {className:null},
     React.DOM.h1 ({className:null}, this.props.name ),
     React.DOM.table( {className:"bb"}, compliteArray ) 
)

}

   });


