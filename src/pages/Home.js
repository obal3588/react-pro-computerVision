import React from 'react'
import $ from "jquery";


class Home extends React.Component {


  render() {
 
    $("#AboutMe").removeClass("active");
    $("#ComputerVision").removeClass("active");
    $("#Home").addClass("active")
    return <h1>Home</h1>
  }
}
export default Home