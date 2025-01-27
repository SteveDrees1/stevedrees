import axios from 'axios';

const APIConfig = {
    wss: "",
    URL: {
        root: ""
    },
    timeOutID: null
};

if(process.env.NODE_ENV === "development"){

}else{

}

APIConfig.prod = axios.create({
    baseUrl: APIConfig.URL.root
})

export default APIConfig;
