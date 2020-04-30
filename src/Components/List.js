import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import { getCards } from "../redux";
import Card from "./Card";
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";

class List extends Component {
  componentDidMount() {
    fetch(
      `https://api.trello.com/1/lists/${this.props.lists.id}/cards?key=${key}&token=${token}`,
      {
        // method: 'GET'
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.props.getCards(data);
      });
  }
  render() {
    var allCards = this.props.cards.map((card) => {
      return <Card key={card.id} cards={card} />;
    });
    return (
      <div className="listContainer">
        <div className="listHead">
          <h5 className="listName">{this.props.lists.name}</h5>
          <button
            onClick={() => this.props.deleteList(this.props.lists.id)}
            className="btn-default deleteButtonForList"
          >
            <FaTrash />
          </button>
        </div>
        <div className="cards">{allCards}</div>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
