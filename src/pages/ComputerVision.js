import React from 'react'
import $ from "jquery";
import ComputerV from "./computerVision/ComputerV"
class ComputerVision extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      stopVideo:false
    } 
  }

  handleClick=(e)=>{

    this.setState({
      stopVideo: !this.state.stop
    })
    console.log("statew",this.state.stop);
  }
  
  
  render() {
      $("#Home").removeClass("active");
      $("#AboutMe").removeClass("active");
    $("#ComputerVision").addClass("active")
    return (
    <div>
    <h1>ComputerVision</h1>
   
    <button onClick={this.handleClick} >Start/Stop</button>
     <ComputerV stopVideo ={this.state.stopVideo}/>
    </div>
      )
  }
}
export default ComputerVision