import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick?: () => void
}

const Button = ({ children, onClick = (event?: any) => { } }: Props) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-slate-200
                    dark:text-gray-400 dark:hover:bg-gray-900
                    border border-slate-400
                      font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
    >
      {children}
    </button>
  )
}

export default Button
