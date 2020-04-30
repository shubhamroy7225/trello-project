import React, { Component } from "react";
import { connect } from "react-redux";
import { getLists,addNewList } from "../redux";
import List from './List';
import Form from './Form';
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";

class Lists extends Component {
  state = {
    hideDiv: false,
    inputValue: '',
    open: false,
    card: {}
  };
  componentDidMount() {
    fetch(
      `https://api.trello.com/1/boards/${this.props.match.params.id}/lists?key=${key}&token=${token}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.props.getLists(data);
      });
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
  addNewList = () => {
    fetch(
      `https://api.trello.com/1/lists?name=${this.state.inputValue}&idBoard=${this.props.match.params.id}&pos=bottom&key=${key}&token=${token}`,
      {
        method: 'POST'
      }
    )
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.props.addNewLists(data)
        this.setState({
          inputValue: ''
        });
      });
  };
  render() {
    var closeaddButton = this.state.hideDiv ? 'none' : 'block';
    var openHideDiv = this.state.hideDiv ? 'block' : 'none';
    var allLists = this.props.lists.map(list => {
      return (
        <List
          key={list.id}
          lists={list}
        />
      );
    });
    return (
      <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
        className='allLists'>
        {allLists}
        <button
          onClick={this.openHideDiv}
          className='newListButton'
          style={{ display: closeaddButton }}>
          +Add List
        </button>
        <Form
          style={{ display: openHideDiv }}
          closeInputDiv={this.closeInputDiv}
          inputState={this.inputState}
          input={this.state.inputValue}
          addNewCard={this.addNewList}
          buttonTitle='list'
        />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLists: (data) => dispatch(getLists(data)),
    addNewLists:(data)=>dispatch(addNewList(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
