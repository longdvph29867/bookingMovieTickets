import React, { useEffect } from 'react'
import DetailMovie from './DetailMovie';
import TabsDetailSchedule from './TabsDetailSchedule';
import { useDispatch } from 'react-redux';
import { SET_DETAIL_SCHELUDE } from '../../redux/constant/movieConstant';
import { useParams } from 'react-router-dom';
import { movieServ } from '../../service/movieService';
import "./detail.css";


export default function DetailPage() {
    const params = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        movieServ.getMovieDetailSchedule(params.id)
        .then((res) => {
            dispatch({
                type: SET_DETAIL_SCHELUDE,
                payload: res.data.content,
            })
        })
        .catch((err) => {
            console.log(err);
        });
    
    }, [])
    
  return (
    <div className='container mx-auto max-w-[960px] px-6'>
        <div className='py-10'>
            <DetailMovie/>
            <TabsDetailSchedule/>
        </div>
    </div>

  )
}
