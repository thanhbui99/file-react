import React,{ Component} from 'react';
import './App.css';
import Reset from './componentss/Reset'
import Colorpicker from './componentss/Colorpicker';
import Result from './componentss/Result'
import FontSize from './componentss/FontSize'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      color : 'blue',
     size  : 15
    }
    this.setColor = this.setColor.bind(this);
  } 
  setColor(params){
    console.log(params);
             this.setState({
               color : params
             })
  }
  render(){
    return <div className="App">
           <div className="main">
           <Colorpicker color={this.state.color} onre={this.setColor}/>  
           <br />       
            <FontSize />
            <br />
            <Reset /> 
            <br />
            <Result color = {this.state.color}/>
           </div>
    </div>
  }
}
export default App;
