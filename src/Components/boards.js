
import React from 'react'
import {connect} from "react-redux";
import {getBoards} from "../redux";
import Board from "./board";
const token =
  "587069056c3279db10d87edbc6c0064045e19a535180a020a4d37c65eb9f0803";
const key = "ec2e426a10bafa63878b9591f8b93a00";
class Boards extends React.Component {
  componentDidMount() {
    fetch(
      `https://api.trello.com/1/members/shubhamjayswal2/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=${key}&token=${token}`,
      {
        method: "GET",
      }
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
          this.props.getBoards(data)
      });
  }
  
  render() {
        var allBoards = this.props.boards.map((board) => {
          return <Board key={board.id} boards={board} />;
        });
        return allBoards;
      }
  }
  const mapStateToProps = state =>{
    return {
       boards:state.board
    }
}

const mapDispatchToProps = dispatch =>{
    return {
      getBoards:(data)=>dispatch(getBoards(data))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Boards)
