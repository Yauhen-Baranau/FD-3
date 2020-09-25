import React from 'react';
import PropTypes from 'prop-types';
import './ishopBlock.css';
import Item from './ishopItem';
import Product from './product'
import Edit from './editBlock';


class Ishop extends React.Component {
     static PropTypes = {
        mode: PropTypes.number.isRequired,
        brend: PropTypes.string.isRequired,
        items:PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              price: PropTypes.number.isRequired,
              url: PropTypes.string.isRequired,
              quanity: PropTypes.number.isRequired,
              code: PropTypes.number.isRequired,
            })
           )   
    };

    state = {
       itemsArr: this.props.items,
       selectedItemCode: 0,
       forCardSelected: null,
       mode: this.props.mode

    };
       itemSelect = (code) => { // выбераем товар по id
        console.log('выбран элемент с кодом '+ code);
        this.setState({selectedItemCode:code})
        this.showCard(code)
        }

        itemDelete = (code) => { //фильтруем удаленный товар
        var filt = this.state.itemsArr.filter( v=> v.code!=code)
        this.setState({itemsArr:filt})
        this.setState({forCardSelected: null})
        }

        showCard = (code) => { // фильтр для карточки товара
        var filt = this.state.itemsArr.filter(v=> v.code==code)
        console.log(filt[0])
        this.setState({forCardSelected:filt[0]})
        }

        checkMode = (num) => {
            this.setState({mode:num})
        }

       rename = (elem) => {
      var newArray = JSON.parse(JSON.stringify(this.state.itemsArr));
      for(var i =0; i<newArray.length; i++){
          if(newArray[i].code===this.state.selectedItemCode){
              newArray[i].name=elem.name
              newArray[i].price=elem.price
              newArray[i].url=elem.url
              newArray[i].quanity=elem.quanity
              newArray[i].code=elem.code
              break
          }
    }
    console.log(elem)
      this.setState({itemsArr:newArray})
       }

 render () {
       
        var products=this.state.itemsArr.map( v =>
        <Item name={v.name}
              price={v.price} 
              url={v.url}
              quanity={v.quanity} 
              key={v.code}
              isSelected={v.code==this.state.selectedItemCode}
              code={v.code}
              cbSelected={this.itemSelect}
              cbDelete={this.itemDelete}
              cbCheckMode={this.checkMode}
        />
        );
  
       return(

        <div>
            <h1>{this.props.brend}</h1>

            <table className="tab">
                <tbody>{products}</tbody>
            </table>

            { ( (this.state.forCardSelected!==null) && (this.state.mode===0) )?
            <div>
            <Product elements = {this.state.forCardSelected}/>
            </div>
            : null
            }

            { ( (this.state.forCardSelected!==null) && (this.state.mode===1) )?
              <div>
               <Edit elements = {this.state.forCardSelected} rename={this.rename} cbCheckMode={this.checkMode} />
              </div>
               :
               null
            }
            
            
        </div>  
         )
       
    }

}

export default Ishop

