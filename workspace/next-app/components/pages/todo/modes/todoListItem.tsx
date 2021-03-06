import { useEffect, useState } from "react";
import Button from "../../../uiParts/button";

type Props = {
  id: number
  task: string
  wasChecked?: boolean
  onCheck?: (id: number, newIsFinished: boolean) => void
  onChangeTask?: (id: number, newTask: string) => void
  onClickDeleteButton: (id: number) => void
}

const TodoListItem = ({ id, task, wasChecked = false, onCheck, onChangeTask, onClickDeleteButton }: Props) => {
  const [isChecked, setIsChecked] = useState(wasChecked);

  useEffect(() => {
    if (onCheck) onCheck(id, isChecked);
  }, [isChecked]);

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={(event?: any) => { setIsChecked(event.target.checked); }}
      />
      <input
        type="text"
        className={
          isChecked
            ? "line-through bg-transparent m-2 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            : "bg-transparent m-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        defaultValue={task}
        onChange={(event?: any) => {
          if (onChangeTask && event.target.value) onChangeTask(id, event.target.value)
        }}
        required
      />
      <Button onClick={() => { onClickDeleteButton(id) }}>x</Button>
    </div>
  )
}

export default TodoListItem
