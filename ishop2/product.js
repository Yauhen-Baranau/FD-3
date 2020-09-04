var Product = React.createClass ({

    displayName: 'product',
    propTypes: {
      products: React.PropTypes.array,
      
      
  },




    render: function() {
      console.log(this.props.isSelected)


     return React.DOM.tr ( {key:this.props.codef, onClick: this.props.onClick },
      
            React.DOM.td( {className: 'tab'}, this.props.name),
            React.DOM.td( {className: 'tab'}, this.props.price),
            React.DOM.td( {className: 'tab'}, this.props.url),
            React.DOM.td( {className: 'tab'}, this.props.quanity),
            React.DOM.button( {onClick:this.dell} , 'DELETE')
            )
}

})