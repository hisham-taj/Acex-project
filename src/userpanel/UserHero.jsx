import React from 'react';
import MainBanner from './Mainbanner';
import PricingSection from './price';
import WhyAcex from './whyacex';
import AssignmentHelpPage from './assignment';
import ProcessPage from './processpage';
import Carousel from './Carousel';
import ExpertModules from './expertmodule';
import FaqPage from './faqpage';
import FooterPage from './footer';
import FeaturesSection from './review';
import SalientFeatures from './review';

const UserHero = () => {
    return (
        <div>
            <MainBanner />
            <PricingSection />
            <WhyAcex />
            <AssignmentHelpPage />
            <ProcessPage />
            <Carousel />
            <ExpertModules />
            <SalientFeatures />
            <FaqPage />
            <FooterPage />
        </div>
    );
}

export default UserHero;
