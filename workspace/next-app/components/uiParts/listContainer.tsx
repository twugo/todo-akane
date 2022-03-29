import { useState, useEffect, ReactNode } from "react"

type Props = {
  children: ReactNode,
}

const ListContainer = ({ children }: Props) => {
  return (
    <div className="absolute top-32 p-4 z-20
                    border-2 lg:border-4 border-slate-400 rounded-xl">
      {children}
    </div>
  )
}

export default ListContainer
