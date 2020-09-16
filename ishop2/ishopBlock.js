var IshopBlock = React.createClass ({
   
    displayName: 'ishopBlock',
    propTypes: {
        products: React.PropTypes.array.isRequired,
    },

    getInitialState: function() {
        return {
          selected: 0,
          items : this.props.products,
        };
      },

  pushSate: function (EO) {
    EO=EO||window.event;
    EO.preventDefault();
   this.setState({selected:EO.currentTarget.getAttribute("data-id")})
  },

del: function(EO){
      EO=EO||window.event;
      EO.preventDefault();
      EO.stopPropagation()

      if (EO.target.getAttribute('data-but-id')===this.state.selected){
        var filt = this.state.items.filter( v=> v.code!=this.state.selected)
        this.setState({items:filt})
      }
},



render: function(){
//table
    var nameStr = React.DOM.tr ( null,
      React.DOM.td(  {className: 'tab'}, "NAME" ),
      React.DOM.td(  {className: 'tab'}, "PRICE" ),
      React.DOM.td(  {className: 'tab'}, "URL" ),
      React.DOM.td(  {className: 'tab'}, "QUANITY" ),
      React.DOM.td(  {className: 'tab'}, "DELETE" ),
      );    

    var str = this.state.items.map(v =>
     React.createElement(Product, {
      
      key:v.code,
      code:v.code, 
      name:v.name,
      price: v.price,
      url: v.url, 
      quanity: v.quanity, 
      onClick: this.pushSate, 
      isSelected: (this.state.selected==v.code),
      cbDel: this.del} 
      )
      );
      
      return React.DOM.div( null,
            React.DOM.h1 (null, this.props.name),
           React.DOM.table( null,React.DOM.tbody (null, nameStr, str)) 
       )
},

})



