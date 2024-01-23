import { ILabel } from '../../utils/interface/interfaces'

interface ITable {
  dataLabel: ILabel[]
  data: any[]
  onClickTitle(event: any, label: string): void
}

const Table = ({ dataLabel, onClickTitle, data }: ITable) => {
  return (
    <table className="min-w-full w-full bg-white border border-gray-200">
      <thead>
        <tr className="min-w-full w-full bg-white border border-gray-200">
          {dataLabel.map((label: ILabel, idx: number) => (
            <th
              onClick={(event: any) => onClickTitle(event, label.name)}
              key={`${idx + label.name}`}
              className="px-4 py-2 text-gray-950"
            >
              {label.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data
          ? data.map((row, index) => (
              <tr
                key={`${index + row.title}`}
                className="bg-gray-100 min-w-full w-full bg-white border border-gray-200"
              >
                <td className="border px-4 py-2 text-gray-950">{row.title}</td>
                <td className="border px-4 py-2 text-gray-950">{row.author}</td>
                <td className="border px-4 py-2 text-gray-950">
                  {row.description}
                </td>
                <td className="border px-4 py-2 text-gray-950">
                  {row.publishedBy}
                </td>
                <td className="border px-4 py-2 text-gray-950">{row.year}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  )
}

export default Table
