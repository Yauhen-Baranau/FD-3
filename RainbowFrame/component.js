import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  state = {
      colors:null,
      color: null,
}



componentWillMount = () => {
        let colors = this.props.colors;
        var color = colors.shift()
        console.log(color+' выбрался цвет')
        console.log(colors+' массив с цветами стал таким')
        this.setState({color:color, colors: colors})
    };

 render() {
    
  
 
    return (

<div style={{border:"solid 10px "+this.state.color,padding:"12px", textAlign:"center" }}>
      { (this.props.colors.length ===0)?
          this.props.children:
      <RainbowFrame colors={this.state.colors}>{this.props.children}</RainbowFrame>

      }
   
</div>  

    );
  }

}

export default RainbowFrame;

