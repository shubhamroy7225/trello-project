import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";

class List extends Component {
  render() {
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
      </div>
    );
  }
}

export default List;
