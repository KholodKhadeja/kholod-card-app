import React from 'react';
import { Link } from 'react-router-dom';
import "./IntroSectionComponent.scss";
import { authActions } from 'store/auth';
import { useSelector } from 'react-redux';


const IntroSectionComponent = () => {
    const loggedIn = useSelector((state) => state.auth.loggedInVar);
    return (
        <div className='infoSectionMainDiv'>
            <div className='leftInfoDiv'>
                <h1>Kholod Cards</h1>
                <p>
                    Welcome To Our Online Busniess Cards.<br/>
                    You Can Create a Card With The Template That You Like & Choose. <br/>
                    Customize The Card.
                    What Are You Waiting For?<br/>
                    Register and Start You Free Account Now! <br /><br />
                    {  !loggedIn &&
                        <Link to="/register" className="btn btn-primary forBusBtn"> Register Now</Link>
                    }
                     </p>
            </div>
            <div className='rightImgDiv'>
                {/* <img className="introSectiomImg" src="https://github.com/KholodKhadeja/ProjectImages/blob/main/introSectionUmg.jpg?raw=true"/> */}
            </div>
        </div>
    );
}

export default IntroSectionComponent;
