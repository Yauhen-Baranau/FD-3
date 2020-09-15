var IshopBlock = React.createClass ({
   
    displayName: 'ishopBlock',
    propTypes: {
        products: React.PropTypes.array.isRequired,
    },

    getInitialState: function() {
        return {selected: 0};
      },
    
  pushSate: function (EO) {
    EO=EO||window.event;
    EO.preventDefault();
    this.setState({selected:EO.currentTarget})
    console.log(this.state.selected)
  },

     //    dell: function(){
//     //  EO.stopPropagation()
//     this.state.selected.parentNode.removeChild(this.state.selected)
//     // this.setState({selected:null})
//     // console.log(EO.currentTarget.parentNode.removeChild(EO.currentTarget))
// },
     
render: function(){

  //table
    var nameStr = React.createElement(Product, {name:'NAME',
     price:'PRICE', url:'URL', quanity:'QUANITY', k:55 })    

    var str = this.props.products.map(v =>
     React.createElement(Product, {
      
      key:v.code,
      code:v.code, 
      name:v.name,
      price: v.price,
      url: v.url, 
      quanity: v.quanity, 
      onClick: this.pushSate, 
      isSelected: (this.state.selected===v.code),
      
      } 
      )
      );

           return React.DOM.div( null,
            React.DOM.h1 (null, this.props.name),
           React.DOM.table( null,React.DOM.tbody (null, nameStr, str)) 
       )
  },

})



