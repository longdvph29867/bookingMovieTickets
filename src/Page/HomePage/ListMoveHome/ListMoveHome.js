import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../service/movieService'
import ItemMovie from './ItemMovie';

export default function ListMoveHome() {
    const [listMovie, setListMovie] = useState([]);
    const [numPage, setNumPage] = useState(0)
    useEffect(() => {
        movieServ.getMovieList()
            .then((res) => {
                //tạo ra arr mới theo mỗi trang có 8 phim
                let newListMovie = pageSplitListMovie(res.data.content, 8)
                setListMovie(newListMovie);
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    // map lại arr movie thành các arr nhỏ theo từng trang
    let pageSplitListMovie = (arr, quantity) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i += quantity) {
            newArr.push(arr.slice(i, i + quantity))
        }
        return newArr;
    }

    let renderListMovie = () => {
        return listMovie[numPage]?.map((movie) => {
            return <ItemMovie key={movie.maPhim} movie={movie} />
        })
    }
    return (
        <div className='container mx-auto mt-20 px-5'>
            <div className='
        grid grid-cols-1
        gap-6 
        mx-auto 
        xl:w-[960px] 
        lg:grid-cols-4 
        sm:grid-cols-3 
        '>
                {renderListMovie()}
            </div>
            <div className='flex justify-center items-center my-10'>
                <Pagination onChange={(current) => { setNumPage(current - 1) }} defaultCurrent={1} total={30} />
            </div>
        </div>
    )
}
