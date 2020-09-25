import React from 'react';
import PropTypes from 'prop-types';

class Edit extends React.Component {
    static PropTypes = {
        elements: PropTypes.object.isRequired,
        rename: PropTypes.func.isRequired,
        cbCheckMode: PropTypes.func.isRequired,
    }

    state={
        name:this.props.elements.name,
        price:this.props.elements.price,
        url:this.props.elements.url,
        quanity:this.props.elements.quanity,
        code:this.props.elements.code,
        }

    changeV = (EO) => {
         switch ( EO.target.name ) {
            case '1':
                this.setState({name:EO.target.value})
                break;
            case '2':
                this.setState({price:EO.target.value})
                break;
            case '3':
                this.setState({url:EO.target.value})
                break;
            case '4':
                this.setState({quanity:EO.target.value})
                break;    
            }
            this.setState({code:this.props.elements.code})
        }

    save = ()=>{
    this.props.rename(this.state)
    this.props.cbCheckMode(0)
    }

    cancelCheckMode = (EO) => {
        EO=EO||window.event;
        EO.preventDefault();
        EO.stopPropagation()
        this.props.cbCheckMode(0)
    }

    render() {
        return(
           <div>
                <h2>Edit Existing product</h2>
                <span>ID {this.props.elements.code}</span><br/>
                <label>Product name:
                <input type='text'defaultValue={this.props.elements.name} name={1} onChange={this.changeV}/></label><br/>
                <label>Price:
                <input type='text'defaultValue={this.props.elements.price} name={2} onChange={this.changeV}/></label><br/>
                <label>URL:
                <input type='text'defaultValue={this.props.elements.url} name={3} onChange={this.changeV}/></label><br/>
                <label>Quanity:
                <input type='text'defaultValue={this.props.elements.quanity} name={4} onChange={this.changeV}/></label><br/>
                <button onClick={this.save}>SAVE</button><button onClick={this.cancelCheckMode}>CANCEL</button>
                
            </div> 
        )
    }
}

export default Edit