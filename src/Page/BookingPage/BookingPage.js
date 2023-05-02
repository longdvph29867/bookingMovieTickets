import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { movieServ } from '../../service/movieService'
import ListChair from './ListChair';
import BgBooking from "../../static/bg-app.jpg";
import { useDispatch } from 'react-redux';
import { SET_LIST_CHAIR } from '../../redux/constant/movieConstant';
import ChairBooking from './ChairBooking';
import InfoMovie from './InfoMovie';

export default function BookingPage() {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        movieServ.getMovieBooking(params.id)
        .then((res) => {
            dispatch({
                type: SET_LIST_CHAIR,
                payload: res.data.content,
            })
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])
    

  return (
    <div className='py-20' style={{backgroundImage: `url(${BgBooking})`}}>
        <div className='container mx-auto flex flex-col xl:flex-row'>
            <div className='xl:w-2/3 w-full'>
                <ListChair/>
            </div>
            <div className='xl:w-1/3 w-full'>
                <InfoMovie/>
                <ChairBooking/>
            </div>
        </div>
    </div>
  )
}
