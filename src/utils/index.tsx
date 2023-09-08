export type Itask = {
    id: string 
    taskk?: string
}
export type TaskProp = {
    task: string
    id: string
}
export type TodoListProps = {
    tasks: Itask[]
}
interface TodoListProps {
    tasks: iTask[]
}

export const TodoList = ({tasks}: TodoListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
            {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.text}</td>
            <td>{task.text}</td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};


