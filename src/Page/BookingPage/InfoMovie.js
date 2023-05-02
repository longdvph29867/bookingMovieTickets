import React from 'react'
import { useSelector } from 'react-redux'

export default function InfoMovie() {
  const movie = useSelector((state) => state.movieReducer.movieListChair);
  return (
    <div className='text-white'>
      <div>
        <h1 className='text-center text-4xl font-bold text-green-500 mb-5'>{movie?.thongTinPhim?.tenPhim}</h1>
        <div className='border-2 border-white p-4 rounded-xl'>
          <div className='flex justify-between mb-5'>
            <h4>Cụm rạp:</h4>
            <p className='w-2/3 text-right'>{movie?.thongTinPhim?.tenCumRap}</p>
          </div>
          <div className='flex justify-between mb-5'>
            <h4>Địa chỉ:</h4>
            <p className='w-2/3 text-right'>{movie?.thongTinPhim?.diaChi}</p>
          </div>
          <div className='flex justify-between mb-5'>
            <h4>Rạp:</h4>
            <p className='w-2/3 text-right'>{movie?.thongTinPhim?.tenRap}</p>
          </div>
          <div className='flex justify-between mb-5'>
            <h4>Ngày giờ chiếu:</h4>
            <p className='w-2/3 text-right'>{`${movie?.thongTinPhim?.gioChieu} ~ ${movie?.thongTinPhim?.ngayChieu}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
