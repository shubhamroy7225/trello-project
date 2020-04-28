import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import Modal from "./Modal";
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";

class Lists extends Component {
  state = {
    lists: [],
    hideDiv: false,
    inputValue: "",
    open: false,
    card: {},
  };
  componentDidMount() {
    //console.log('helee');
    fetch(
      //get all lists
      `https://api.trello.com/1/boards/${this.props.match.params.id}/lists?key=${key}&token=${token}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          lists: data,
        });
      });
  }
  openHideDiv = () => {
    this.setState({
      hideDiv: true,
    });
  };
  closeInputDiv = () => {
    this.setState({
      hideDiv: false,
    });
  };
  inputState = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  addNewList = () => {
    fetch(
      `https://api.trello.com/1/lists?name=${this.state.inputValue}&idBoard=${this.props.match.params.id}&pos=bottom&key=${key}&token=${token}`,
      {
        method: "POST",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          lists: this.state.lists.concat([data]),
          inputValue: "",
        });
      });
  };

  deleteList = (id) => {
    fetch(
      `https://api.trello.com/1/lists/${id}/closed?value=true&key=${key}&token=${token}`,
      {
        method: "PUT",
      }
    ).then(() => {
      this.setState({
        lists: this.state.lists.filter((list) => list.id !== id),
      });
    });
  };
  openModal = (cardObj) => {
    this.setState({
      open: true,
      card: cardObj,
    });
  };

  onCloseModal = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    //console.log(this.state.checkLists);
    var closeaddButton = this.state.hideDiv ? "none" : "block";
    var openHideDiv = this.state.hideDiv ? "block" : "none";
    var allLists = this.state.lists.map((list) => {
      return (
        <List
          key={list.id}
          lists={list}
          deleteList={this.deleteList}
          openModal={this.openModal}
        />
      );
    });
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="allLists"
      >
        {allLists}
        <button
          onClick={this.openHideDiv}
          className="newListButton"
          style={{ display: closeaddButton }}
        >
          +Add List
        </button>
        <Form
          style={{ display: openHideDiv }}
          closeInputDiv={this.closeInputDiv}
          inputState={this.inputState}
          input={this.state.inputValue}
          addNewCard={this.addNewList}
          buttonTitle="list"
        />
        <Modal
          openModal={this.state.open}
          closeModal={this.onCloseModal}
          card={this.state.card}
        />
      </div>
    );
  }
}

export default Lists;
