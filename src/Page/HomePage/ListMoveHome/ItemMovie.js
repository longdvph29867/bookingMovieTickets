import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import { BsFillCaretRightFill } from "react-icons/bs";
import './itemMovie.css';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import { NavLink } from 'react-router-dom';

export default function ItemMovie({ movie }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='item_movie'>
            <div className='img_movie'>
                <img src={movie.hinhAnh} alt="" />
                <div className='play_trailer'>
                    <button onClick={() => { setOpen(true) }}><BsFillCaretRightFill /></button>
                </div>
            </div>
            <div className='detail'>
                <h3 className='title'>
                    <span className='text-base text-white inline-block px-1 mr-2.5 bg-[#fb4226] rounded'>C18</span>
                    {movie.tenPhim}
                </h3>
                <p className='desc'>{movie.moTa}</p>
                <NavLink to={`/detail/${movie.maPhim}`}>
                    <button className='btn_book'>Mua vé</button>
                </NavLink>
            </div>
            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId={movie.trailer.split("embed/")[1]}
                onClose={() => setOpen(false)}
            />
        </div>
    )
}
