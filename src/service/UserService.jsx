import axios from "axios";
// const USER_BASE_URL = "http://localhost:8080/bookstore/"

class UserService {
    baseUrl = 'http://localhost:8080/bookstore'

    saveUser(user) {
        return axios.post(`${this.baseUrl}`+ "/register", user)
    }
    loginUser(user) {
        return axios.post(`${this.baseUrl}`+ "/login", user)
    }
    forgotPassword = (email) => {

        console.log(email);
        return axios.post(`${this.baseUrl}` + "/forgotpassword?email="+ email);
    }
}
export default new UserService();