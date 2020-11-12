import React,{ Component} from 'react';
class result extends Component{
  setstyle(){
    return {
      color:this.props.color
    }
  }
  render(){
    return <div className="Result">
         <div
         id='content'
         style={this.setstyle()}
         >Noi dung
         </div>
    </div>
  }
}
export default result;
