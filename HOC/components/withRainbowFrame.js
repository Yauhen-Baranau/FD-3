import React from 'react';

function withRainbowFrame(color){
  
    return function(Component) {
      
        return props =>  (
          
          <div style={{border:"solid 10px "+color[1],padding:"12px", textAlign:"center" }}>
            
            <Component {...props} />
         
          </div>
        );
      };
}


export {withRainbowFrame}