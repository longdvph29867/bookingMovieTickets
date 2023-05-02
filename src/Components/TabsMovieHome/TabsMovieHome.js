import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { movieServ } from '../../service/movieService';
import ItemTabsMovie from './ItemTabsMovie';
import './tabsMovieHome.css'
const onChange = (key) => {
    console.log(key);
};

export default function TabsMovieHome() {
    const [danhSachHeThongrap, setSanhSachHeThongrap] = useState([])

    useEffect(() => {
        movieServ.getMovieByTheater()
            .then((res) => {
                setSanhSachHeThongrap(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    let renderTheater = () => {
        return danhSachHeThongrap.map((heThongRap) => {
            return {
                key: heThongRap.maHeThongRap,
                label: <img style={{ width: 50 }} src={heThongRap.logo} alt="" />,
                children: (
                    <Tabs style={{ height: 700 }}
                        tabPosition='left'
                        defaultActiveKey="1"
                        items={
                            heThongRap.lstCumRap.map((cumRap) => {
                                return {
                                    key: cumRap.tenCumRap,
                                    label: (
                                        <div className='text-left w-60'>
                                            <h3 className='truncate text-lg font-bold text-green-500'>{cumRap.tenCumRap}</h3>
                                            <p className='truncate text-gray-500'>{cumRap.diaChi}</p>
                                            <p className='text-red-500'>[ chi tiết ]</p>
                                        </div>
                                    ),
                                    children: (
                                        <div className='w-full h-[700px] overflow-x-scroll'>
                                            {cumRap.danhSachPhim.map((phim, index) => {
                                                return <ItemTabsMovie key={index} phim={phim} />
                                            })}
                                        </div>
                                    ),
                                }
                            })
                            // items
                        }
                        onChange={onChange} />
                ),
            }
        })
    }

    return (
        <div className='container hidden md:block mx-auto mt-10 max-w-full px-2'>
            <div className='w-full mx-auto max-w-[930px] border-2'>
                <Tabs style={{ height: 700 }}
                    tabPosition='left'
                    defaultActiveKey="1"
                    items={renderTheater()}
                    onChange={onChange} />
            </div>
        </div>
    )
}
