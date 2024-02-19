import Head from "./head";
import Input from "./input";
import Items from "./assets/items";
import Container from "./assets/container";
import { useState } from "react";
import Message from "./assets/message";
import { todoItemContext } from "./store/todo-items-store";

function App() {
  let [components, setcomponents] = useState([]);

  const deleteItem = (todoItemName) => {
    let newArr = components.filter((it) => it.name != todoItemName);
    setcomponents(newArr);
  };
  const addNewItem = (itemName, itemDate) => {
    setcomponents((currValue) => [
      ...currValue,
      { name: itemName, date: itemDate },
    ]);
  };

  return (
    <todoItemContext.Provider
      value={{
        components,
        addNewItem,
        deleteItem,
      }}
    >
      <Container>
        <Head></Head>
        <Input></Input>
        <Message />
        <Items></Items>
      </Container>
    </todoItemContext.Provider>
  );
}

export default App;
