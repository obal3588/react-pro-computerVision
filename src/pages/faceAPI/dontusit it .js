import React, { Component } from 'react';
import { div } from '@tensorflow/tfjs-core';
import $ from "jquery";
const CallAPI = props => {
console.log("pr",props)
const file =props;
    let subscriptionKey = "d56a00a55f9c44c9a0372880cfa969da";
    
    let uriBase ="https://reconface.cognitiveservices.azure.com/face/v1.0/detect";

    // Request parameters.
    var params = {
        "returnFaceId": "true",
        "returnFaceLandmarks": "true",
        "returnFaceAttributes":
            "age,gender,headPose,smile,facialHair,glasses,emotion," +
            "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };

    var postRec = new XMLHttpRequest(); 
    var url="https://reconface.cognitiveservices.azure.com/face/v1.0/detect?"+ $.param(params); 
    postRec.open("POST",url,true); 
    
    postRec.setRequestHeader("Content-Type", "application/octet-stream");
    postRec.setRequestHeader("Ocp-Apim-Subscription-Key", "d56a00a55f9c44c9a0372880cfa969da"); 
    
    postRec.send(file); 

    postRec.onreadystatechange = function (response) {
              
        if (this.readyState == 4 && this.status == 200) { 
            var obj = JSON.parse(this.responseText)
            console.log(obj);
          
            var oleft = document.getElementById("imgx").offsetLeft -100; 
            var otop = document.getElementById("imgx").offsetTop -60; 
            var faceRec = document.createElement('div')
            
            var fc = document.getElementById('face')
            var fet = document.getElementById("features")
            
            console.log(obj)
            obj.forEach((obj) => {
          
                var faceRec = document.createElement('div')
                var points = document.createElement('span')
                faceRec.style.left =  oleft + obj.faceRectangle.left + 'px'
                faceRec.style.top =  otop + obj.faceRectangle.top + 'px'
                faceRec.style.width = obj.faceRectangle.width + 'px'
                faceRec.style.height = obj.faceRectangle.height + 'px'
                faceRec.style.border = '2px solid purple'
                faceRec.style.position ='absolute'
                faceRec.id = 'faceRec' 
                fc.append(faceRec)
                points.style.left = oleft + obj.faceLandmarks.eyeLeftBottom.x + 'px'
                points.style.top = otop + obj.faceLandmarks.eyeLeftBottom.x + 'px'
                faceRec.append(points)
                fet.style.color="black"
                fet.innerHTML='<li > <span >' + obj.faceAttributes.age + '</span>  Approximate Age: </li> <li ><span > ' + obj.faceAttributes.gender +'</span> Gender: </li> <li ><span > ' + obj.faceAttributes.glasses +'</span> Glasses: </li>' ; 
               
        })
        }
      
        


}
return(
  {obj}
)

}

export default CallAPI;


