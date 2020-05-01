import React, { Component } from "react";
import Form from "./Form";
import CheckItem from "./CheckItem"; //component of checkItem

const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";

class CheckList extends Component {
  state = {
    checkItems: [],
  };
  componentDidMount() {
    fetch(
      `https://api.trello.com/1/checklists/${this.props.checkList.id}/checkItems?key=${key}&token=${token}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          checkItems: data,
        })
      );
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
  addNewCheckItem = () => {
    fetch(
      `https://api.trello.com/1/checklists/${this.props.checkList.id}/checkItems?name=${this.state.inputValue}&pos=bottom&checked=false&key=${key}&token=${token}`,
      {
        method: "POST",
      }
    )
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          checkItems: this.state.checkItems.concat([data]),
          inputValue: "",
        })
      );
  };
  deleteCheckItem = (id) => {
    fetch(
      `https://api.trello.com/1/checklists/${this.props.checkList.id}/checkItems/${id}?key=${key}&token=${token}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      this.setState({
        checkItems: this.state.checkItems.filter(
          (CheckItem) => CheckItem.id !== id
        ),
      });
    });
  };
  updateCheckItem = (event, checkItem) => {
    var checkItemStatus = event.target.checked ? "complete" : "incomplete";
    fetch(
      `https://api.trello.com/1/cards/${this.props.checkList.idCard}/checkItem/${checkItem.id}?state=${checkItemStatus}&key=${key}&token=${token}`,
      {
        method: "PUT",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        var allItem = this.state.checkItems;
        allItem[allItem.indexOf(checkItem)].state = data.state;
        this.setState({
          checkItems: allItem,
        });
      });
  };
  render() {
    //console.log(this.props.checkList);
    var closeaddButton = this.state.hideDiv ? "none" : "block";
    var openHideDiv = this.state.hideDiv ? "block" : "none";
    let checkItems = this.state.checkItems.map((checkItem) => (
      <CheckItem
        key={checkItem.id}
        checkItem={checkItem}
        deleteCheckItem={this.deleteCheckItem}
        updateCheckItem={this.updateCheckItem}
      />
    ));
    return (
      <div className="checkListContainer">
        <h3>{this.props.checkList.name}</h3>
        <div className="itemsContainer">{checkItems}</div>
        <div className="buttonsOfCheckList">
          <div>
            <button
              onClick={() =>
                this.props.deleteCheckList(this.props.checkList.id)
              }
              className="deleteButtonForCheckList btn btn-danger btn-xsm"
            >
              Delete
            </button>
          </div>
          <div>
            <button
              onClick={this.openHideDiv}
              style={{ display: closeaddButton }}
              className="addButtonForCheckItem btn btn-primary btn-xsm"
            >
              add items
            </button>
            <Form
              style={{ display: openHideDiv }}
              closeInputDiv={this.closeInputDiv}
              inputState={this.inputState}
              input={this.state.inputValue}
              addNewCard={this.addNewCheckItem}
              buttonTitle="check item"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckList;
