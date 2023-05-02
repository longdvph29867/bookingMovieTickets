import { DELETE_CHAIR, PURCHASE, SELECT_SEAT, SET_DETAIL_SCHELUDE, SET_LIST_CHAIR } from "../constant/movieConstant"

const initialState = {
  movieDetailSchedule: [],
  movieListChair: {},
  selectedSeat: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DETAIL_SCHELUDE: {
      return {...state, movieDetailSchedule: payload}
    }
    case SET_LIST_CHAIR: {
      return {...state, movieListChair: payload}
    }
    case SELECT_SEAT: {
      let newSelectSeat = [...state.selectedSeat];
      let index = newSelectSeat.findIndex((item) => item.maGhe === payload.maGhe);
      if(index === -1) {
        newSelectSeat.push(payload);
      } 
      else {
        newSelectSeat.splice(index, 1);
      }
      return {...state, selectedSeat: newSelectSeat};
    }
    case PURCHASE: {
      let newMovieListChair = {...state.movieListChair};
      newMovieListChair.danhSachGhe.map((item) => {
        state.selectedSeat.forEach(ele => {
          if(ele.maGhe === item.maGhe) {
            item.daDat = true;
          }
        });
      })
      return {...state, selectedSeat: [], movieListChair: newMovieListChair};
    }
    case DELETE_CHAIR: {
      let newSelectSeat = [...state.selectedSeat];
      let index = newSelectSeat.findIndex((item) => item.maGhe === payload.maGhe);
      if(index != -1) {
        newSelectSeat.splice(index, 1);
      }
      return {...state, selectedSeat: newSelectSeat};
    }
  
  default:
    return state
  }
}
