import Button from "../../../uiParts/button"

const CheerModeButton = ({ onClick = (event?: any) => { } }) => {

  return (
    <Button onClick={onClick}>応援</Button>
  )
}

export default CheerModeButton
