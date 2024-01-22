import Header from '../shared/header/Header'
import Table from '../shared/table/Table'

export default function Page() {
  const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
  ]

  return (
    <>
      <Header title="Reports" />

      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Reports Data</h1>
        <Table data={data} />
      </div>
    </>
  )
}
