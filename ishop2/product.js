var Product = React.createClass ({

    displayName: 'product',

    propTypes: {
  cbDel: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
 
      },

      render: function() {
        

     return React.DOM.tr ( {
          key: this.props.code,
          onClick: this.props.onClick, 
         'data-id': this.props.code,
          className: this.props.isSelected? "rr" : null, 
         },
      
              React.DOM.td( {className: 'tab'}, this.props.name),
              React.DOM.td( {className: 'tab'}, this.props.price),
              React.DOM.td( {className: 'tab'}, this.props.url),
              React.DOM.td( {className: 'tab'}, this.props.quanity),
              React.DOM.td( {className: 'tab'}, React.DOM.button( {onClick:this.props.cbDel, "data-but-id":this.props.code}, 'DELETE'))
            )
}

})