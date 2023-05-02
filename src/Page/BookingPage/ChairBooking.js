import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DELETE_CHAIR, PURCHASE } from '../../redux/constant/movieConstant';

export default function ChairBooking() {
    let dispatch = useDispatch();
  const selectedSeat = useSelector((state) => state.movieReducer.selectedSeat);

  return (
    <div className='text-white mt-5'>
        <table className='w-full text-center'>
            <thead>
                <tr>
                    <th className='border-2 border-white leading-8'>Số ghế</th>
                    <th className='border-2 border-white leading-8'>Giá</th>
                    <th className='border-2 border-white leading-8'>Huỷ</th>
                </tr>
            </thead>
            <tbody className='text-amber-500'>
                {selectedSeat.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td className='border-2 border-white leading-8'>{item.tenGhe}</td>
                            <td className='border-2 border-white leading-8'>{item.giaVe}</td>
                            <td className='border-2 border-white leading-8'>
                                <button onClick={() => {dispatch({
                                    type: DELETE_CHAIR,
                                    payload: item,
                                })}} className='text-red-500'>X</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td className='border-2 border-white leading-8'>Tổng tiền:</td>
                    <td className='border-2 border-white leading-8 text-amber-500' colSpan={2}>
                        {selectedSeat.reduce((totalPrice, item) => {
                            return totalPrice += item.giaVe;
                        }, 0)}
                    </td>
                </tr>
            </tfoot>
        </table>
        <button className='
        text-white text-xl 
        bg-amber-500 
        py-3 
        px-5 
        mt-5 
        rounded-md 
        hover:bg-white 
        hover:text-amber-500 
        duration-300 
        font-bold'
        onClick={() => {dispatch({type: PURCHASE})}}
        >Thanh toán</button>
    </div>
  )
}
