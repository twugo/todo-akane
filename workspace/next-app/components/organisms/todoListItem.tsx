import ListContainer from "../uiParts/listContainer"
import { useState } from "react";

type Props = {
  task: string
}

const TodoListItem = ({ task }: Props) => {
  return (
    <div>
      <input
        type="text"
        // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        className="bg-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        defaultValue={task}
        required
      />
    </div>
  )
}

export default TodoListItem
