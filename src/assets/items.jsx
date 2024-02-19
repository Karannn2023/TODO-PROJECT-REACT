import Item from "./item";
import { todoItemContext } from "../store/todo-items-store";
import { useContext } from "react";
function items({ items }) {
  const contextObj = useContext(todoItemContext);
  const components = contextObj.components;
  return (
    <>
      {components.map((element) => (
        <Item
          key={element.name}
          name={element.name}
          date={element.date}
          point={items}
        ></Item>
      ))}
    </>
  );
}
export default items;
