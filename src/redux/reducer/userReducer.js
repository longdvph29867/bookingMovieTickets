import { localUserServ } from "../../service/localService"
import { SET_USER_LOGIN } from "../constant/userConstant"

const initialState = {
    userInfo: localUserServ.get(),
}

let userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_USER_LOGIN: {
            return { ...state, userInfo: payload }
        }

        default:
            return state
    }
}

export default userReducer
