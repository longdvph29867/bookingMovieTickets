import React from 'react'
import { useSelector } from 'react-redux';
import ItemChair from './ItemChair';

export default function ListChair() {
  const movie = useSelector((state) => state.movieReducer.movieListChair);

  return (
    <div className='pr-0 xl:pr-10'>
      <h3 className='
      text-center 
      text-white
      border-b-[50px] 
      border-b-[#ff9f5f]
      border-l-[50px] 
      border-l-transparent
      border-r-[50px] 
      border-r-transparent
      '
      style={{filter: 'drop-shadow(4px 30px 20px rgba(255, 255, 255, 0.5))'}}
      >Màn hình</h3>
      <div className='mt-12 grid gap-3 justify-items-center grid-cols-8 md:grid-cols-[repeat(16,_minmax(0,_1fr))]' >
        {movie.danhSachGhe?.map((chair, index) => {
          return <ItemChair key={index} chair={chair}/>
        })}
      </div>
      <div className='grid grid-cols-2 mt-10 text-white'>
        <div className='flex flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 flex items-center'>
            <span className='inline-block mr-3 w-9 h-9 rounded bg-white'></span>
            <span>Ghế thường</span>
          </div>
          <div className='w-full sm:w-1/2 flex items-center mt-2 sm:mt-0'>
            <span className='inline-block mr-3 w-9 h-9 rounded bg-amber-500'></span>
            <span>Ghế VIP</span>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 flex items-center'>
            <span className='inline-block mr-3 w-9 h-9 rounded bg-gray-500'></span>
            <span>Ghế đã đặt</span>
          </div>
          <div className='w-full sm:w-1/2 flex items-center mt-2 sm:mt-0'>
            <span className='inline-block mr-3 w-9 h-9 rounded bg-green-500'></span>
            <span>Ghế đang chọn</span>
          </div>
        </div>
      </div>
    </div>
  )
}
