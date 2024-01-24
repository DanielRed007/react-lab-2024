'use client'

import { fetchDataTable } from '../lib/features/reports/reportsThunks'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../shared/header/Header'
import { AppDispatch } from '../lib/store'
import Table from '../shared/table/Table'
import { useEffect } from 'react'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()

  const handleClickTableTitle = (e: any) => {
    console.log(e)
  }

  const { dataTable } = useSelector((state: any) => state.reports)

  useEffect(() => {
    dispatch(fetchDataTable())
  }, [dispatch])

  return (
    <>
      <Header title="Reports" />

      <div className="drop-shadow rounded-md mx-auto py-9 max-w-7xl mt-24 px-4 py-6 sm:px-6 lg:px-8 flex flex-col bg-gray-100">
        {dataTable ? (
          <Table
            dataLabel={dataTable.labels}
            onClickTitle={handleClickTableTitle}
            data={dataTable.data}
          />
        ) : null}
      </div>
    </>
  )
}
