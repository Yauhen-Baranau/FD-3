import React from 'react';
import PropTypes from 'prop-types';
import "./ishopItem.css"

class Item extends React.Component {

    static PropTypes = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        quanity: PropTypes.number.isRequired,
        code: PropTypes.number.isRequired,
        cbSelected: PropTypes.func.isRequired,
        cbDelete: PropTypes.func,
        isSelected:PropTypes.bool,
        cbCheckMode: PropTypes.func,
    }

    itemClicked = (EO) => {
      this.props.cbSelected(this.props.code);
      this.props.cbCheckMode(0)
      }

    delete = (EO) => {
        EO=EO||window.event;
        EO.preventDefault();
        EO.stopPropagation()
        this.props.cbDelete(this.props.code)
    } 
    
    modeChekEdit1 = (EO) =>{
        EO=EO||window.event;
        EO.preventDefault();
        EO.stopPropagation()
        this.props.cbSelected(this.props.code);
        this.props.cbCheckMode(1)
    }

     render(){
       return(
            <tr className={this.props.isSelected? 'selected' : null}
                key={this.props.code} code = {this.props.code}
                onClick={this.itemClicked}>
                    <th className="tab1">{this.props.name}</th>
                    <th className="tab1">{this.props.price}</th>
                    <th className="tab1">{this.props.url}</th>
                    <th className="tab1">{this.props.quanity}</th>
                    <th className="tab1"> <button onClick={this.modeChekEdit1}>EDIT</button></th>
                    <th className="tab1"><button onClick={this.delete}>DELETE</button></th>
            </tr>
        )
    }
}

export default Item
