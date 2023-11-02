"use client"

type TodoItemProps = {
  id: string
  guestName: string
  roomNumber: string
  description: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, guestName, roomNumber, description, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <div className="flex flex-col">
        <span>{guestName}</span>
        <span>{roomNumber}</span>
        <span>{description}</span>
      </div>
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {description}
      </label>
    </li>
  )
}