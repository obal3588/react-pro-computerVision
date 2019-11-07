

import React, { Component } from 'react'
import Info from "./Info"


export class ImageHistory extends Component {
handler=()=>{
  this.props.clearImages();
}

  
  render() {
    // <Info item={item} />


    const all =this.props.images.map((item,key)=>{
      const temp=item.map((x,y)=>{
           const face= x.map((n,z)=>{
              return <li>{n}</li>

            })
            return <ul>{face}</ul>
        })
      return <li>{temp}</li>
    })
console.log("t",this.props.images)
    return (
      <div>
        <ul>
       {all}
       </ul>
       <button onClick={this.handler}> clear</button>
      </div>
     
    )
  }
}

export default ImageHistory
