import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import {myEvents} from './events'
import Edit from './edit'

class MobileCompany extends React.PureComponent {
    static propTypes = {
          clients: PropTypes.array.isRequired,
          name: PropTypes.string.isRequired,
          mode: PropTypes.number

    }

    state = {
        companyName: this.props.name,
        clients: this.props.clients,
        clientStatus: 'all',
        mode: this.props.mode,
        selectedClient: null,
        selectedCode: null,
    }

    setClient = (id) => {
        this.setState({selectedCode:id})
        this.setState({mode:2})
          this.state.clients.forEach(v=>{
              if (v.id===id) 
              this.setState({selectedClient:v})
             })
    }

    deleteItem = (id) => {
       var arr = [...this.state.clients]
        arr.forEach( (v,i)=>{
           if (v.id===id) {
            //    arr.slice()
               arr.splice(i,1)
           }
       })
       this.setState({clients: arr})
    }

    editClient = (obj) => {
        // obj === {n: input, f: input, o: input, b: input, key: 5}
        
      this.setState({mode:1})
        var arr = [...this.state.clients]
        var changed = false;
        arr.forEach( (v,i) =>{
              if (v.id===obj.key){
                let newClient = {...v}
               
                   if ( v.i!=obj.i.value ) {
                      newClient.i = obj.i.value
                      arr[i]=newClient
                      changed=true
                     }
                    
                    if( v.f !=obj.f.value ) {
                        newClient.f = obj.f.value
                        arr[i]=newClient
                        changed=true
                    }
                    if ( v.o!=obj.o.value ) {
                        newClient.o = obj.o.value
                        arr[i]=newClient
                        changed=true
                    }
                    if (v.balance!= obj.b.value ){
                        newClient.balance = obj.b.value
                        arr[i]=newClient
                        changed=true
                    }
                }
             if (changed){
                  this.setState({clients:arr})
             }
        } )
    }

    saveClient = (obj) => {
        var arr = [...this.state.clients]
        var hash = {id:obj.key, f:obj.f.value, i:obj.i.value, o:obj.o.value, balance:obj.b.value, active:(obj.b.value>0)}
        arr.push(hash)
        this.setState({clients:arr})
        this.setState({mode:1})
    }



    componentDidMount = () => {
         myEvents.addListener('itemSelect', this.setClient)
         myEvents.addListener('delete' , this.deleteItem )
         myEvents.addListener('edit' , this.editClient )
         myEvents.addListener('save' , this.saveClient )
    }

    componentWillUnmount = () => {
         myEvents.removeListener('itemSelect', this.setClient)
         myEvents.removeListener('delete' , this.deleteItem )
         myEvents.removeListener('edit' , this.editClient )
         myEvents.removeAllListeners('save' , this.saveClient)
    }

   
    velc = () => {
        this.setState({companyName:'Velcom'})
}

    mst = () => {
        this.setState({companyName:'MTS'})
}

        showAll = () => {
             this.setState({clientStatus:'all'})
        }


        showActive = () => {
            this.setState({clientStatus:'active'})
        }
    
        showBlocked = () => {
            this.setState({clientStatus:'blocked'})
           
         }

         addmode = () => {
             
this.setState({mode:3})
    }

     
render(){
        console.log("MobileCompany render")


        var clients = this.state.clients.map(v=>{
            if ( (this.state.clientStatus==='all') || ((this.state.clientStatus==='blocked')&& (v.balance<=0)) || ((this.state.clientStatus==='active')&&(v.balance>0)) ) {
               return <MobileClient  key={v.id} client={v}/>
            }
                  
            })
        return(
            <div>
            <button onClick={this.velc}>Velcom</button> 
            <button onClick={this.mst}>MTS</button>
        <   div>Компания: {this.state.companyName}</div>
            <hr/>
            <button onClick={this.showAll}>ВСЕ</button><button onClick={this.showActive}>АКТИВНЫЕ</button><button onClick={this.showBlocked}>ЗАБЛОКИРОВАННЫЕ</button>
            <hr/>
            
            <table>
                <tbody>
                <tr><th>{'Имя'}</th><th>{'Фамилия'}</th><th>{'Отчество'}</th><th>{'Баланс'}</th><th>{'Статус'}</th><th>{'Редактировать'}</th><th>{'Удалить'}</th></tr> 
                {clients}
                </tbody>
            </table>
            <hr/>
            <button onClick={this.addmode}>Добавить клиента</button>
            {
               (this.state.mode>1)&&
               <Edit clients={this.state.clients} key={this.state.selectedCode} elem={this.state.selectedClient} mode={this.state.mode}/> 
            }
             
            
            </div>
        )
    }

}

export default MobileCompany;