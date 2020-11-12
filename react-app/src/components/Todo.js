import React, { Component } from 'react';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.handlebutton = this.handlebutton.bind(this);
    this.state = {
      color:'white',
      isActive : true
    }
  }
  handlecolor = (value) => {
    const newValue = value.target.value;
    this.setState({ color : newValue });
    
  }
   handlebutton = (text)=>{ 
     alert(text);
   }
   onSetState = () => {
     this.setState(
      { isActive : !this.state.isActive }
     );
   }
  render() {
    const {todos} = this.props;
    const {color,isActive} = this.state;

    return (
      <div className="Todo">
         <style>
       { `
            .bg{ 
              background : ${color};
                              
         }
        `}
      </style>
           {todos.map(({name,price,id,status}) => {
            let result = '';
            if(isActive === status)
            {
              result = <div key={id} className="bg">
              <p>Mẫu : {name}</p>
              <p>Giá: {price}</p>        
              <button onClick={()=>{this.handlebutton(name)}}>Check ngay</button>
              </div>  
            }
             return  result;       
           })}
           <div>
             <input onChange={this.handlecolor.bind(this)} />
          <button onClick={this.onSetState} > hàng     {isActive === true ?'đã đi khách':'đang rạng háng chờ khách'}</button>
           </div>
      </div>
    );
  }
}

export default Todo;
