import Button from "../../../uiParts/button"

const TodoModeButton = ({ onClick = (event?: any) => { } }) => {

  return (
    <Button onClick={onClick}>TODO</Button>
  )
}

export default TodoModeButton
