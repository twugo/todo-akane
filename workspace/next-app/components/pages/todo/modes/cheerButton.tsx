import { ReactNode } from "react"
import Button from "../../../uiParts/button"
import useNovel from '../../../../hooks/useNovel'

type Props = {
  novel: string[],
  children: ReactNode
};

const CheerButton = ({ novel, children }: Props) => {
  const { TurnPage, ChangeNovel } = useNovel();
  const onClick = (event: any) => {
    event.stopPropagation();
    ChangeNovel(novel);
  };

  return (
    <Button onClick={onClick}>{children}</Button>
  );
}

export default CheerButton;