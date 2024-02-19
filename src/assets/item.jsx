import { RiDeleteBin2Line } from "react-icons/ri";
import { todoItemContext } from "../store/todo-items-store";
import { useContext } from "react";

function item({ name, date }) {
  const contextObj = useContext(todoItemContext);
  const deleteItem = contextObj.deleteItem;
  return (
    <div className="row">
      <div className="row">
        <div className="col-4 comp01 element">{name}</div>
        <div className="col-4 comp01 element">{date}</div>
        <div className="col-2 comp01">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(name)}
          >
            Del
            <RiDeleteBin2Line />
          </button>
        </div>
      </div>
    </div>
  );
}
export default item;
