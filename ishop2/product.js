var Product = React.createClass ({

    displayName: 'product',

    propTypes: {
  cbDel: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
 
      },

     call: function(EO){
      EO=EO||window.event;
      EO.preventDefault();
      this.props.onClick(this.props.code)
     },

      delete: function(EO){
        EO=EO||window.event;
        EO.preventDefault();
        EO.stopPropagation()
      this.props.cbDel(this.props.code)
      },

render: function() {
        
        return React.DOM.tr ( {
          key: this.props.code,
          onClick: this.call, 
         'data-id': this.props.code,
          className: this.props.isSelected? "rr" : null, 
         },
      
              React.DOM.td( {className: 'tab'}, this.props.name),
              React.DOM.td( {className: 'tab'}, this.props.price),
              React.DOM.td( {className: 'tab'}, this.props.url),
              React.DOM.td( {className: 'tab'}, this.props.quanity),
              React.DOM.td( {className: 'tab'}, React.DOM.button( {onClick:this.delete, "data-but-id":this.props.code}, 'DELETE'))
            )
}

})