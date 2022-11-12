import axios from "axios";

const AutoLogin = () => {
    return (
     axios.get("/users/userInfo")
    );
}

export default AutoLogin;
