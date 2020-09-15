var Product = React.createClass ({

    displayName: 'product',

    propTypes: {
    products: React.PropTypes.array,
      },

      render: function() {
      return React.DOM.tr ( {
       
      key: this.props.code,
      onClick: this.props.onClick, 
      disabled:this.props.isSelected,
      'data-id': this.props.code,
     
     
       },
      
            React.DOM.td( {className: 'tab'}, this.props.name),
            React.DOM.td( {className: 'tab'}, this.props.price),
            React.DOM.td( {className: 'tab'}, this.props.url),
            React.DOM.td( {className: 'tab'}, this.props.quanity),
            React.DOM.button( {onClick:this.dell} , 'DELETE')
            )
}

})