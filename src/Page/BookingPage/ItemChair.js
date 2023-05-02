import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { SELECT_SEAT } from '../../redux/constant/movieConstant';

export default function ItemChair({chair}) {
  const dispatch = useDispatch();
  const selectedSeat = useSelector((state) => state.movieReducer.selectedSeat);

  return (
    <div>
        <button
        className={
            clsx('w-9 h-9 bg-white rounded',
            {'!bg-amber-500 text-white': chair.loaiGhe === "Vip"},
            {'!bg-gray-500 text-white': chair.daDat},
            {'!bg-green-400 text-white': selectedSeat.some((item) => item.maGhe === chair.maGhe)}
            )
        }
        disabled={chair.daDat}
        onClick={() => {dispatch({
          type: SELECT_SEAT,
          payload: chair,
        })}}
        >{chair.tenGhe}</button>
    </div>
  )
}
