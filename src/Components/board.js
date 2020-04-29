import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const Board = (props) => {
  console.log(props);
  return (
    <div className="boardB btn btn-primary active">
      <Link to={`/board/${props.boards.id}`}>
        <button className="boardB btn btn-primary active">
          {props.boards.name}
        </button>
        <button
          onClick={(event) => {
            console.log("i am testing");
            event.preventDefault();
            props.deleteBoards(event, props.boards.id);
          }}
          className="deleteButton btn btn-xsm"
        >
          <FaTrash />
        </button>
      </Link>
    </div>
  );
};
export default Board;
