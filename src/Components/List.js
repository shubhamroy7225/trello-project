import React, { Component } from "react"
import { FaTrash } from "react-icons/fa"
import { connect } from "react-redux"
import { getCards, addNewCards } from "../redux"
import Card from "./Card"
import Form from "./Form"
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803"
const key = "ec2e426a10bafa63878b9591f8b93a00"

class List extends Component {
  state = {
    hideDiv: false,
    inputValue: "",
  };
  componentDidMount() {
    //console.log(this.props.lists.id)
    fetch(
      `https://api.trello.com/1/lists/${this.props.lists.id}/cards?key=${key}&token=${token}`,
      {
        // method: 'GET'
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        this.props.getCards(data)
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
  addNewCards = async () => {
    //console.log(this.props.lists.id);

    await fetch(
      `https://api.trello.com/1/cards?idList=${this.props.lists.id}&name=${this.state.inputValue}&keepFromSource=all&key=${key}&token=${token}`,
      {
        method: "POST",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.props.addNewCards(data)
      });
  };


  makeEditable(e) {
    e.target.contentEditable = true
  }
  updateLists(e) {
    if (e.keyCode === 13) {
      e.preventDefault()
      e.persist()
      let title = e.target.innerText
      fetch(`https://api.trello.com/1/lists/${this.props.lists.id}?name=${title}&key=${key}&token=${token}`, {
        method: "PUT",
      })
        .then((response) => {
          console.log(`Response: ${response.status} ${response.statusText}`)
          return response.text()
        })
        .then((text) => e.target.contentEditable=false)
        .catch((err) => console.error(err))
    }
  }
  render() {
    var closeaddButton = this.state.hideDiv ? "none" : "block"
    var openHideDiv = this.state.hideDiv ? "block" : "none"
    var allCards = this.props.cards.map((card) => {
      return <Card key={card.id} cards={card} />;
    });
    return (
      <div className="listContainer">
        <div className="listHead">
          <h5
            className="listName"
            onClick={(e) => this.makeEditable(e)}
            onKeyDown={(e) => this.updateLists(e)}
          >
            {this.props.lists.name}
          </h5>
          <button
            onClick={() => this.props.deleteList(this.props.lists.id)}
            className="btn-default deleteButtonForList"
          >
            <FaTrash />
          </button>
        </div>
        <div className="cards">{allCards}</div>
        <div>
          <button
            onClick={this.openHideDiv}
            className="addButton btn btn-success"
            style={{
              display: closeaddButton,
              backgroundColor: "rgb(0, 0, 0, 0.2)",
              border: "none",
              color: "black",
              fontStyle: "bold",
            }}
          >
            +Add New Card
          </button>
        </div>
        <Form
          style={{ display: openHideDiv }}
          closeInputDiv={this.closeInputDiv} //send function to from
          inputState={this.inputState}
          input={this.state.inputValue}
          addNewCard={this.addNewCards}
          buttonTitle="card"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: (data) => dispatch(getCards(data)),
    addNewCards: (data) => dispatch(addNewCards(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
