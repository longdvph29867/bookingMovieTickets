import moment from 'moment';
import React, { useState } from 'react'
import { Progress, Space } from 'antd';
import { BsFillCaretRightFill } from "react-icons/bs";
import ModalVideo from 'react-modal-video';
import { useSelector } from 'react-redux';

export default function DetailMovie() {
    const [isOpen, setOpen] = useState(false);
    const movie = useSelector((state) => state.movieReducer.movieDetailSchedule)
    

  return (
    <div className='flex'>
        <div className='detail_img w-1/3 md:w-1/4 relative'>
            <img src={movie?.hinhAnh} className="object-cover h-[250px] md:h-[314px] object-top" alt="" />
            <div className='play_trailer'>
                <button onClick={() => { setOpen(true) }}><BsFillCaretRightFill /></button>
            </div>
        </div>
        <div className='w-2/3 md:w-3/4 flex flex-col md:flex-row'>
            <div className='2/3 px-3'>
            <h1 className='text-left text-2xl md:text-3xl text-orange-500'>{movie?.tenPhim}</h1>
            <h3 className='text-lg md:text-xl my-3'>
                <span className='font-bold'>Khởi chiếu:</span> {moment(movie?.ngayKhoiChieu).format("DD-mm-yyyy")}
            </h3>
            <p className='hidden md:block'>
                <span className='description-detail texxt-[#5a5a5a] text-justify'>{movie?.moTa}</span>

            </p>
            <a href='#' className='px-5 py-2 bg-orange-500 text-white inline-block rounded md:mt-3'>Mua vé</a>
            </div>
            <div className='w-1/3 px-3 mt-4 md:mt-0'>
                <Progress type="circle" percent={movie?.danhGia*10} format={(percent) => `${percent/10} Điểm`} size={100}/>
            </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={movie?.trailer?.split("embed/")[1]} onClose={() => setOpen(false)} />
    </div>
  )
}
