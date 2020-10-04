import React from 'react';

import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
      };

    render(){

        let arr = this.props.text.split('<br />').join('<br/>').split('<br>').join('<br/>');
        var a = arr.split('<br/>')
        
           
       var compliteArr = []

         a.forEach((v,i) => {
            if(i) 
              compliteArr.push(<br key={i}/>);
            compliteArr.push(v);
        });

        return (
        <div>{compliteArr}</div>
        )
    }

}

export default BR2JSX;

