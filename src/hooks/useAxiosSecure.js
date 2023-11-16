import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('req stopped by interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // do sth with req error
        return Promise.reject(error);
    })

    // intercept 401 and 403 status responses
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor:', status);
        return Promise.reject(error);
    })

    return axiosSecure;
}
export default useAxiosSecure;