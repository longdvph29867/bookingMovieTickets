import moment from 'moment'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ItemTabsMovie({ phim }) {
    return (
        <div className='flex p-5 min-h-44 border-b-[1px]'>
            <img className='w-28 object-cover object-top' src={phim.hinhAnh} alt="" />
            <div className='ml-5'>
                <h3 className='text-lg font-bold'>
                    <span className='px-2 py-1 mr-1 rounded text-white bg-orange-500'>C18</span>
                    {phim.tenPhim}
                </h3>
                <div className='grid grid-cols-2 gap-4 mt-3'>
                    {phim.lstLichChieuTheoPhim.slice(0, 4).map((lichhieu, index) => {
                        return <NavLink key={index} to={`/booking/${lichhieu.maLichChieu}`}>
                            <div className='px-2 py-1 border-2 rounded cursor-pointer'>
                                <span className='text-green-500'>
                                    {moment(lichhieu.ngayChieuGioChieu).format('DD-mm-yyyy ')}
                                </span>
                                ~
                                <span className='text-orange-500'>
                                    {moment(lichhieu.ngayChieuGioChieu).format(' hh:mm')}
                                </span>
                            </div>
                    </NavLink>
                    })}
                </div>
            </div>
        </div>
    )
}
