import { useRef } from "react";
import { todoItemContext } from "./store/todo-items-store";
import { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";

function input() {
  const contextObj = useContext(todoItemContext);
  const addNewItem = contextObj.addNewItem;
  const itemName = useRef();
  const itemDate = useRef();

  const handleOnButtonClicked = () => {
    const todoName = itemName.current.value;
    const todoDate = itemDate.current.value;
    itemName.current.value = "";
    itemDate.current.value = "";
    addNewItem(todoName, todoDate);
  };
  return (
    <div className="row">
      <div className="row">
        <div className="col-4 comp01">
          <input ref={itemName} type="text" placeholder="Enter Items"></input>
        </div>
        <div className="col-4 comp01">
          <input ref={itemDate} type="date" />
        </div>
        <div className="col-2 comp01">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleOnButtonClicked}
          >
            Add
            <IoMdAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default input;
