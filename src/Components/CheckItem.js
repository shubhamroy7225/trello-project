import React, { Component } from 'react';
class CheckItem extends Component {
  state = {};
  render() {
    return (
      <div className='checkItem'>
        <input
          onChange={(event) =>this.props.updateCheckItem(event,this.props.checkItem)}
          type='checkBox'
          className='checkBox'
          checked={this.props.checkItem.state === 'complete' ? true : false}
          readOnly
        />
        <div>
          <p>{this.props.checkItem.name}</p>
        </div>
        <button
          onClick={() => this.props.deleteCheckItem(this.props.checkItem.id)}
          className='deleteButtonForItem'>
          x
        </button>
      </div>
    );
  }
}
export default CheckItem;