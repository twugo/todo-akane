import ListContainer from "../uiParts/listContainer"
import Button from "../uiParts/button"
import TodoListItem from "./todoListItem";
import { useEffect, useState } from "react";

type Todo = {
  id: number,
  task: string
  isFinished: boolean
}

const TodoList = () => {
  // 参考：https://github.com/oreilly-japan/learning-react-2e-ja/blob/master/chapter-08/8.3/src/App.js
  const loadJSON = (key: string) => key && JSON.parse(localStorage.getItem(key));
  const saveJSON = (key: string, data: any) => localStorage.setItem(key, JSON.stringify(data));

  const todoKey = "todo-akane"
  const [taskCandidate, SetTaskCandidate] = useState("");
  const [taskList, SetTaskList] = useState<Todo[]>([]);
  const [maxTaskId, SetMaxTaskId] = useState(0);

  useEffect(() => {
    const loadedTaskList = loadJSON(todoKey);

    if (loadedTaskList) {
      SetTaskList(loadedTaskList)

      const maxId = Math.max(...loadedTaskList.map((todo: Todo) => todo.id));
      SetMaxTaskId(maxId);
    };
  }, []);

  useEffect(() => {
    console.log(taskList)
    saveJSON(todoKey, taskList);
  }, [taskList]);

  const addTask = () => {
    if (taskCandidate) {
      let newTaskList = taskList.concat();
      newTaskList.push({ id: maxTaskId + 1, task: taskCandidate, isFinished: false })
      SetTaskList(newTaskList)
      SetTaskCandidate("");
      SetMaxTaskId(maxTaskId + 1);
    }
  }

  const deleteTask = (id: number) => {
    let newTaskList = taskList.filter((todo) => todo.id != id);
    SetTaskList(newTaskList);
  }

  const changeTask = (id: number, newTask: string) => {
    let newTaskList = taskList.concat();
    const index = newTaskList.findIndex(task => task.id == id);
    newTaskList[index] = { ...newTaskList[index], task: newTask };
    SetTaskList(newTaskList);
  }

  const changeIsFinished = (id: number, newIsFinished: boolean) => {
    let newTaskList = taskList.concat();
    const index = newTaskList.findIndex(task => task.id == id);
    newTaskList[index] = { ...newTaskList[index], isFinished: newIsFinished };
    SetTaskList(newTaskList);
  }

  return (
    <ListContainer>
      <Button
        onClick={(event?: any) => {
          event.preventDefault;
          addTask();
        }}
      >ADD TODO
      </Button>
      <input
        type="text"
        value={taskCandidate}
        onChange={(event) => { SetTaskCandidate(event.target.value) }}
        // 参考：https://flowbite.com/docs/components/forms/
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      {taskList && taskList.map(({ task, id, isFinished }) => (
        <TodoListItem
          id={id}
          task={task}
          wasChecked={isFinished}
          onCheck={changeIsFinished}
          onChangeTask={changeTask}
          onClickDeleteButton={deleteTask}
          key={id}
        />
      ))}
    </ListContainer>
  )
}

export default TodoList
