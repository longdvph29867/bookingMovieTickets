import React from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'


export default function ItemTabsDetailSchedule({cumRap}) {
  return (
    <div className='px-5 py-3'>
        <h2 className='text-xl text-green-500 mb-2'>{cumRap.tenCumRap}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {cumRap.lichChieuPhim.map((lichChieu, index) => {
                return <NavLink key={index} to={`/booking/${lichChieu.maLichChieu}`}>
                    <div className='px-3 py-2 text-lg border-2 rounded cursor-pointer max-w-[210px]'>
                        <span className='text-green-600'>
                            {moment(lichChieu.ngayChieuGioChieu).format('DD-mm-yyyy ')}
                        </span>
                        ~
                        <span className='text-orange-500'>
                            {moment(lichChieu.ngayChieuGioChieu).format(' hh:mm')}
                        </span>
                    </div>
                </NavLink>
            })}
        </div>
    </div>
  )
}
