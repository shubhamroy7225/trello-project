import React, { Component } from 'react';
class CheckList extends Component {
  render() {
    return (
      <div className='checkListContainer'>
        <h3>{this.props.checkList.name}</h3>    
      </div>
    );
  }
}
export default CheckList;