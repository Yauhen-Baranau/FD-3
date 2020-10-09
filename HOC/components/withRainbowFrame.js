import React from 'react';




// function withRainbowFrame(color){
  
//     return function(Component) {
      
//         return props =>  (
          
//           <div style={{border:"solid 10px "+color[1],padding:"12px", textAlign:"center" }}>
            
//             <Component {...props} />
         
//           </div>
//         );
//       };
// }


function withRainbowFrame(color){
  
    return function(Component) {

      class RainbowFrames extends React.Component {
     
        state = {
            colors:null,
            color: null,
      }
      
      UNSAFE_componentWillMount = () => {
              let colorsArr = color;
              var colorFirst = colorsArr.shift()
              this.setState({color:colorFirst, colors: colorsArr})
          };
      
       render() {
             
        return (
               <div style={{border:"solid 10px "+this.state.color,padding:"12px", textAlign:"center" }}>
                 {
                    (this.state.colors.length===0)?
                  <Component {...this.props} />:
                  <RainbowFrames {...this.props} >{this.props.children}</RainbowFrames>
                 }
               </div>  
              );
        }
      }
      return RainbowFrames
}

}


export {withRainbowFrame}