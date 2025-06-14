import SalesDashboard from '@/components/Sales_Dashboard/SalesDashboard'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b space-y-4 from-[#DFDAFB] to-[#F9CCC5] overflow-hidden">
      <SalesDashboard />
    </div>
  )
}

export default page
