import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = 'http://localhost:3005';
//http request 拦截器
axios.interceptors.request.use(
    config => {
        if (config.method === "post") {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//http response 拦截器
axios.interceptors.response.use(
    response => {
        // let code = response.data.code;
        // if (code !== 200) {
        //     if (code === 502) {
        //         message.error("系统异常")
        //     }

        // }
        return response.data;
    },
    error => {
        return Promise.reject(error)
    }
)

export function fetch(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}

//key
export const util = obj => {
    for (var i = 0; i < obj.length; i++) {
      obj[i].key = i;
    }
    return obj;
  };