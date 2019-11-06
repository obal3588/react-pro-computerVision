import React from 'react';
import objectDetectionSketch from '../../ObjectDetectionSketch';
import P5Wrapper from 'react-p5-wrapper';

export default class ComputerV extends React.Component {
      constructor(props){
        super(props);
  
      }
  render() {
   
      return (
        <P5Wrapper sketch={objectDetectionSketch} />
      )
    }
}

