import React, { Fragment } from 'react';
import "./HomePage.scss";

import IntroSectionComponent from 'components/IntroSectionComponent/IntroSectionComponent';
import CardsSliderComponent from 'components/CardsSliderComponent/CardsSliderComponent';

const HomePage = () => {
    return (
    <Fragment>
        <IntroSectionComponent/>
        <CardsSliderComponent/>
    </Fragment>
    );
}

export default HomePage;
