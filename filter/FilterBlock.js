var FilterBlock = React.createClass ({

    displayName: 'FilterBlock',

    propTypes: {
        wordList: React.PropTypes.array.isRequired,
    },

 
    getInitialState: function() {
        return { text:'', check:false};
      },


    TextChanged: function(EO) {
        this.setState({text:EO.target.value});
       },

    restart: function(){
        this.setState({text:'', check:false})
        
        },

        

     isCheck: function(EO){
         if (EO.target.checked){
             this.setState({check: true})
             } else {
            this.setState({check: false})
         }
     },  
        
   render: function() {

    

    //var listCode = this.props.wordList.map(v=> React.DOM.p(null, v))
 function compareFIO(a,b) {
        if ( a.str<b.str )  return -1;
        if ( a.str>b.str )  return 1;
        return 0;
      } 

    var filterCode = this.props.wordList.filter(v=> v.str.indexOf(this.state.text) !== -1)

    if (this.state.check) {
        filterCode.sort(compareFIO)
    }

    var listCode = filterCode.map(v=> React.DOM.p({key: v.code} , v.str))
    
    
    return React.DOM.div(
        null,
        React.DOM.input({type:"checkbox", checked: this.state.check, onChange:this.isCheck}),
        React.DOM.input({type: 'text', value: this.state.text, onChange:this.TextChanged, }),
        React.DOM.button({onClick:this.restart}, "сброс"),
        React.DOM.div( {className:'bord'},listCode)) 
}
});
           



