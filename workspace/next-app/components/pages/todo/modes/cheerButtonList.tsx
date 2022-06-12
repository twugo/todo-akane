import ListContainer from "../../../uiParts/listContainer";
import CheerButton from "./cheerButton";

const CheerButtonList = () => {
  let hoge: string[] = ["[play voice \"greeting1.wav\"]", "ええんやで。"];
  let foo: string[] = ["[play voice \"greeting1.wav\"]", "こらー！"];
  let bar: string[] = ["[play voice \"greeting1.wav\"]", "よしよし。"];

  return (
    <ListContainer>
      <CheerButton novel={["[chara name=\"akane\" state=\"Normal\"]", "[play voice \"greeting1.wav\"]", "ええんやで。"]}>励ましてもらう</CheerButton>
      <CheerButton novel={["[chara name=\"akane\" state=\"Smug\"]", "[play voice \"greeting1.wav\"]", "こらー！"]}>叱ってもらう</CheerButton>
      <CheerButton novel={["[chara name=\"akane\" state=\"Normal\"]", "[play voice \"greeting1.wav\"]", "よしよし。"]}>褒めてもらう</CheerButton>
    </ListContainer >
  )
}

export default CheerButtonList
