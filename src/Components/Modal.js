
import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CheckList from './CheckList';
import Form from './Form';
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class Appp extends React.Component {
  state = {
    cardId: '',
    checkLists: [],
    hideDiv: false
  };
  componentDidUpdate(prevProps) {
    if (this.props.card.id !== prevProps.card.id) {
      fetch(
        `https://api.trello.com/1/cards/${this.props.card.id}/checklists?checkItems=all&checkItem_fields=name%2CnameData%2Cpos%2Cstate&filter=all&fields=all&key=${key}&token=${token}`,
        {
          method: 'GET'
        }
      )
        .then(data => data.json())
        .then(data =>
          this.setState({
            checkLists: data
          })
        );
    }
  }
  openHideDiv = () => {
    this.setState({
      hideDiv: true
    });
  };
  closeInputDiv = () => {
    this.setState({
      hideDiv: false
    });
  };
  inputState = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  addNewCheckList = () => {
    fetch(
      `https://api.trello.com/1/cards/${this.props.card.id}/checklists?name=${this.state.inputValue}&key=${key}&token=${token}`,
      {
        method: 'POST'
      }
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          checkLists: this.state.checkLists.concat([data]),
          inputValue: ''
        });
      });
  };

  render() {
    var closeaddButton = this.state.hideDiv ? 'none' : 'block';
    var openHideDiv = this.state.hideDiv ? 'block' : 'none';
    let checkLists = this.state.checkLists.map(checkList => (
      <CheckList
        key={checkList.id}
        checkList={checkList}
      />
    ));
    return (
      <div  style={styles}>
        <Modal open={this.props.openModal} onClose={this.props.closeModal}>
          <h2>{`${this.props.card.name}`}</h2>
          <div>
            <button
              onClick={this.openHideDiv}
              style={{ display: closeaddButton }}
              className='btn btn-primary'>
              Add checkList
            </button>
            <Form
              style={{ display: openHideDiv }}
              closeInputDiv={this.closeInputDiv}
              inputState={this.inputState}
              input={this.state.inputValue}
              addNewCard={this.addNewCheckList}
              buttonTitle='check list'
            />
          </div>
          <div>{checkLists}</div>
        </Modal>
      </div>
    );
  }
}
export default Appp;