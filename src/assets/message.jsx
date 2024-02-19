import { useContext } from "react";
import { todoItemContext } from "../store/todo-items-store";
function message() {
  const contextObj = useContext(todoItemContext);
  const components = contextObj.components;
  return components.length === 0 && <h2>ENJOY YOUR DAY !</h2>;
}
export default message;
