import React from "react";
import { connect } from "react-redux";
import { getBoards, addNewBoards, deleteBoards} from "../redux";
import Board from "./board";
import Form from "./Form";
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";
class Boards extends React.Component {
  state = {
    hideDiv: false,
    inputValue: "",
  };
  componentDidMount() {
    fetch(
      `https://api.trello.com/1/members/shubhamjayswal2/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=${key}&token=${token}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.props.getBoards(data);
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

  addNewBoard = async () => {
    await fetch(
      `https://api.trello.com/1/boards?name=${this.state.inputValue}&keepFromSource=all&key=${key}&token=${token}`,
      {
        method: "POST",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.props.addNewBoards(data);
        this.setState({
          inputValue:''
        })
      });
  };

  deleteBoard = (event, id) => {
    event.stopPropagation();
    fetch(`https://api.trello.com/1/boards/${id}?name=${this.state.inputValue}&key=${key}&token=${token}`, {
      method: "DELETE",
    }).then(() => {
      console.log(id);
      this.props.deleteBoards(id);
    });
  };

  

  render() {
    var closeaddButton = this.state.hideDiv ? "none" : "block";
    var openHideDiv = this.state.hideDiv ? "block" : "none";
    var allBoards = this.props.boards.map((board) => {
      return (
        <Board key={board.id} boards={board} deleteBoards={this.deleteBoard} />
      );
    });
    return (
      <div>
        {allBoards}
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
            +Add New Board
          </button>
        </div>
        <Form
          style={{ display: openHideDiv }}
          closeInputDiv={this.closeInputDiv}
          inputState={this.inputState}
          input={this.state.inputValue}
          addNewBoards={this.addNewBoard}
          buttonTitle="board"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    boards: state.board,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards: (data) => dispatch(getBoards(data)),
    addNewBoards: (data) => dispatch(addNewBoards(data)),
    deleteBoards: (id) => dispatch(deleteBoards(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Boards);
