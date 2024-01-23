'use client'

import { reportLabels, reportsData } from '../utils/data/mock-data'
import Header from '../shared/header/Header'
import Table from '../shared/table/Table'

export default function Page() {
  const handleClickTableTitle = (e: any) => {
    console.log(e)
  }

  return (
    <>
      <Header title="Reports" />

      <div className="mx-auto py-9 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col bg-gray-100">
        <Table
          dataLabel={reportLabels}
          onClickTitle={handleClickTableTitle}
          data={reportsData}
        />
      </div>
    </>
  )
}
