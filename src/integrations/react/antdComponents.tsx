/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react'
import { Tabs, Table } from 'antd'
const { TabPane } = Tabs
export const AntdTabPane = qwikify$(TabPane, { eagerness: 'hover' })
export const AntdTabs = qwikify$(Tabs, { eagerness: 'hover' })

export const TableApp = qwikify$(() => {
  const columns = [
    {
      title: 'feePeriod',
      dataIndex: 'feePeriod',
      key: 'feePeriod',
    },
    {
      title: 'shop',
      dataIndex: 'offlineStore',
      key: 'offlineStore',
    },
    {
      title: 'totalRentalAmount',
      dataIndex: 'totalAmount',
      key: 'totalAmount',
    },
    {
      title: 'otherBill',
      dataIndex: 'otherAmount',
      key: 'otherAmount',
    },
    {
      title: 'reliefRentAmount',
      dataIndex: 'reliefRentAmount',
      key: 'reliefRentAmount',
    },
    {
      title: 'totalBill',
      dataIndex: 'totalPayAmount',
      key: 'totalPayAmount',
    },
    {
      title: 'paymentStatus',
      dataIndex: 'status',
      key: 'status',
    },
  ]

  const rows = [
    { key: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { key: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { key: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { key: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { key: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { key: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { key: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { key: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { key: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]

  return (
    <>
      <h1>Hello from React</h1>

      <div style={{ height: 400, width: '100%' }}>
        <Table
          dataSource={rows}
          columns={columns}
          pagination={{ position: ['bottomCenter'] }}
        />
      </div>
    </>
  )
})
