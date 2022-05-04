import { getAdditionalUserInfo } from "firebase/auth"

export const fetchUser = ()=>{
const userInfo = 
    localStorage.getItem !== "undefined"
    ? JSON.parse(localStorage.getItem('user'))
    :localStorage.clear()

    return userInfo;
}