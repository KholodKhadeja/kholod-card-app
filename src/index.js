import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import 'react-toastify/dist/ReactToastify.css';

/* config axios */
axios.defaults.baseURL = "http://localhost:8181/api";

axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if(token){
        config.headers["x-auth-token"]=token;
    }
    return config;
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
