import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import TodoModeButton from "./organisms/todoModeButton";
import CheerModeButton from "./organisms/cheerModeButton";
import TodoList from "./organisms/todoList";
import CheerButtonList from "./organisms/cheerButtonList";

enum Scene {
  Home,
  Todo,
  Cheer
}

const Menu = ({ ChangeNovel }: any) => {
  const [scene, SetScene] = useState(Scene.Home);
  const { data: todoData, loading: todoLoading, error: todoError } = useFetch('/api/akane/todoText');
  const { data: cheerData, loading: cheerLoading, error: cheerError } = useFetch('/api/akane/cheerText');


  return (
    <>
      <TodoModeButton onClick={(event) => {
        event.stopPropagation();
        SetScene(Scene.Todo);
        if (todoData) ChangeNovel(todoData.text);
      }}
      />
      <CheerModeButton onClick={(event) => {
        event.stopPropagation();
        SetScene(Scene.Cheer)
        if (cheerData) ChangeNovel(cheerData.text);
      }}
      />
      {(scene == Scene.Todo) && (
        <TodoList />
      )}
      {(scene == Scene.Cheer) && (
        <CheerButtonList />
      )}
    </>
  );
}

export default Menu