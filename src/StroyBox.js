import React, { Component } from 'react';

class StoryBox extends Component {
    render() {
      const now = new Date();
      return (
        <div className="StoryBox">
          Current time: {now.toTimeString()}
        </div>
      );
    }
  }
  
export default StoryBox;