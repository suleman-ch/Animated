import React from 'react';
import Zoom from 'react-reveal/Zoom';

class Welcome extends React.Component {
  render() {
    return (
      <div className="">
        <Zoom top>
          <h1 style={{
              marginTop:'100px',
              fontSize:'100px',
              color:'black',
              textAlign:'center',
          }}>Wellcome</h1>
        </Zoom>
      </div>
    );
  }
}

export default Welcome;
 