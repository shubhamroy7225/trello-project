import React, { Component } from "react";
import { connect } from "react-redux";
import { getLists } from "../redux";
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";

class Lists extends Component {
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

  render() {
    var allLists = this.props.lists.map((list) => {
      return <div>{list.name}</div>;
    });
    return <div>{allLists}</div>;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
