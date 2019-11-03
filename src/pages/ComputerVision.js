import React from 'react'

import $ from "jquery";
class ComputerVision extends React.Component {
  render() {
      $("#Home").removeClass("active");
      $("#AboutMe").removeClass("active");
    $("#ComputerVision").addClass("active")
    return <h1>ComputerVision</h1>
  }
}
export default ComputerVision