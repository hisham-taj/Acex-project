import React from "react";
import WhyAcex from "../userpanel/GetInTouch";
import MainBanner from "../userpanel/Mainbanner"
import PricingSection from "../userpanel/price";
import AssignmentHelpPage from "../userpanel/assignment";
import ProcessPage from "../userpanel/processpage";
import Carousel from "../userpanel/Carousel";
import ExpertModules from "../userpanel/expertmodule";
import SalientFeatures from "../userpanel/review";
import FaqPage from "../userpanel/faqpage"


function Home() {
    return(
        <div>
            <MainBanner />
            <WhyAcex />
            <PricingSection />
            <AssignmentHelpPage />
            <ProcessPage />
            <Carousel />
            <ExpertModules />
            <SalientFeatures />
            <FaqPage />
        </div>
    )
}

export default Home;