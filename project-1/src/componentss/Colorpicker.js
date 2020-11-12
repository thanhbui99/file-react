import React,{ Component} from 'react';
class Colorpicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      color : ['red','green','blue','#EEE']
    }
  }
  showColor(color){
    return {
      backgroundColor : color
    }
  }
  onhandleClick(color){
    this.props.onre(color)
  }
  render(){
    var eleColor = this.state.color.map((color,index)=>{
      return (
        <span
         key={index}
         style={this.showColor(color)}
         onClick={()=>{this.onhandleClick(color)}}
         ></span>
      )
    })
    return <div className="Colorpicker">
         <div>
           <div>danh sach</div>
           <br />
           {eleColor}
         </div>
    </div>
  }
}
export default Colorpicker;
