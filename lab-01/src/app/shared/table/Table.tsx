interface ITable {
  data: Array<{ id: number; name: string; age: number }>
}

const Table = ({ data }: ITable) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead className="text-blue-500">
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="py-2 px-4 border-b">{item.id}</td>
            <td className="py-2 px-4 border-b">{item.name}</td>
            <td className="py-2 px-4 border-b">{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
