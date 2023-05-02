import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Select } from 'antd';
import { movieServ } from '../../service/movieService';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import './selectHome.css';

export default function SelectHome() {
  let navigate = useNavigate();
  const [lismovie, setLismovie] = useState([]);
  const [movieCinema, setmovieCinema] = useState({});
  const [movieSchedule, setMovieSchedule] = useState([]);
  const [idMovieTime, setidMovieTime] = useState("");


  useEffect(() => {
    movieServ.getMovieList()
      .then((res) => {
        setLismovie(res.data.content)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const searchBox = [
    {
      label: "Phim",
    },
    {
      label: "Rạp",
    },
    {
      label: "Ngày giờ chiếu",
    },
  ];
  //
  const getOptions = (type) => {
    switch (type) {
      case "Phim": {
        return lismovie?.map((item) => {
          return {
            value: item.maPhim,
            label: item.tenPhim,
          }
        })
      }
      case "Rạp": {
        let listCumRap = [];
        movieCinema?.heThongRapChieu?.forEach((item) => {
          item.cumRapChieu.forEach((cumRap) => {
            let newCumRap = {
              value: JSON.stringify(cumRap),
              label: cumRap.tenCumRap,
            }
            listCumRap.push(newCumRap)
          })
        })
        return listCumRap;
      }
      case "Ngày giờ chiếu": {
        return movieSchedule?.lichChieuPhim?.map((item) => {
          return {
            value: item.maLichChieu,
            label: moment(item.ngayChieuGioChieu).format("hh:mm ~ DD/MM"),
          }
        })
      }


      default:
        return lismovie?.map((item) => {
          return {
            value: item.maPhim,
            label: item.tenPhim,
          };
        });
    }
  }
  const handleChange = (id, label) => {
    switch (label) {
      case "Phim": {
        movieServ.getMovieSchelude(id)
          .then((res) => {
            setmovieCinema(res.data.content)
          })
          .catch((err) => {
            console.log(err)
          })
      }
        break;
      case "Rạp": {
        setMovieSchedule(JSON.parse(id));
      }
        break;
      case "Ngày giờ chiếu": {
        setidMovieTime(id)
      }
        break;
      default:
    }
  }
  const handleBookTicket = () => {
    if (idMovieTime == "") {
      alert("Bạn chưa chọn phim");
    }
    else {
      navigate(`/booking/${idMovieTime}`);
    }
  };

  return (
    <div className='container mx-auto mt-5'>
      <div className='selectMovie flex items-center shadow rounded-md max-w-full w-[960px]  mx-auto px-5 py-2'>
        <div className='listSelect flex grow'>
          {searchBox.map((item, index) => {
            return (
              <div key={index} className="itemSelect grow px-2">
                <Select
                  className='w-full'
                  defaultValue={{
                    value: item.label,
                    label: item.label,
                  }}
                  placeholder={item.label}
                  optionFilterProp="children"
                  onChange={(id) => { handleChange(id, item.label) }}
                  filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                  options={getOptions(item.label)}
                />
              </div>
            )
          })}
        </div>
        <div>
          <button onClick={handleBookTicket} className='px-6 py-3 ml-4 bg-orange-500 rounded text-white'>Mua Vé Ngay</button>
        </div>
      </div>
    </div>
  )
}
