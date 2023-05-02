import { Tabs } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'
import ItemTabsDetailSchedule from './ItemTabsDetailSchedule';

export default function TabsDetailSchedule() {
  let movie = useSelector((state) => state.movieReducer.movieDetailSchedule)
  let tabPosition = 'left'
  const onChange = (key) => {
    console.log(key);
  };
  let renderShedule = () => {
    return movie?.heThongRapChieu?.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: (<img src={heThongRap.logo} width={'80px'} alt="" />),
        children: (
          <div>
            {heThongRap.cumRapChieu.map((cumRap) => {
              return <ItemTabsDetailSchedule key={cumRap.maCumRap} cumRap={cumRap} />
            })}
          </div>
        ),
      }
    })
  }

  return (
    <div className='border-2 border-gray-200 mt-10'>
      <Tabs style={{ height: 700 }}
        tabPosition={tabPosition}
        defaultActiveKey="1" items={renderShedule()} onChange={onChange} />
    </div>
  )
}
