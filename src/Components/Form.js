import React from 'react';

class Form extends React.Component {
  state = {};
  render() {
    //hide from
    return (
      <div className='hideDiv' style={{ display: this.props.style.display }}>
        <div className='hideInputDiv'>
          <input
            onChange={this.props.inputState}
            className='input'
            type='text'
            value={this.props.input}
            placeholder='enter title'
          />
        </div>
        <div className='hideButtons'>
          <button onClick={this.props.addNewCard} className='hideButton'>
            {`Add ${this.props.buttonTitle}`}
          </button>
          <button onClick={this.props.closeInputDiv} className='hideButton1'>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
