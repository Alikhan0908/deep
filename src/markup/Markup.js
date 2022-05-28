import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Homepage from './Pages/Homepage1';
import Aboutus1 from './Pages/Aboutus/Aboutus1';
import Aboutus2 from './Pages/Aboutus/Aboutus2';
import Error403 from './Pages/Error/Error403';
import Error404 from './Pages/Error/Error404';
import Error405 from './Pages/Error/Error405';
import ComingSoon1 from './Pages/ComingSoon/ComingSoon1';
import UnderMaintenance from './Pages/UnderMaintenance';
import Expertise from './Pages/Expertise';
import ProjectManagement from './Pages/ProjectManagement';
import OurProjects from './Pages/OurProjects';
import ProjectDetails from './Pages/ProjectDetails';
import Team from './Pages/Team';
import Faqs from './Pages/Faqs';
import Contact from './Pages/Contact';
import Service from './Pages/Service/Service';
import ServicesDetails from './Pages/Service/ServicesDetails';

import ProtfolioFullWidth from './Pages/Protfolio/ProtfolioFullWidth';
import PortfolioGrid2 from './Pages/Protfolio/PortfolioGrid2';
import PortfolioGrid3 from './Pages/Protfolio/PortfolioGrid3';
import PortfolioGrid4 from './Pages/Protfolio/PortfolioGrid4';





import ShortIconBox from './Pages/ShortCode/ShortIconBox';
import ShortCounter from './Pages/ShortCode/ShortCounter';
import ShortPortfolio from './Pages/ShortCode/ShortPortfolio';
import ShortTabs from './Pages/ShortCode/ShortTabs';
import ShortTeam from './Pages/ShortCode/ShortTeam';
import ShortTestimonial from './Pages/ShortCode/ShortTestimonial';
import ShortForm from './Pages/ShortCode/ShortForm';
import ShortAccordions from './Pages/ShortCode/ShortAccordions';

import ScrollToTop from './Element/ScrollToTop';

class Markup extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/about-1' exact component={Aboutus1} />
                        <Route path='/about-2' exact component={Aboutus2} />
                        <Route path='/error-403' exact component={Error403} />
                        <Route path='/error-404' exact component={Error404} />
                        <Route path='/error-405' exact component={Error405} />
                        <Route path='/coming-soon-1' exact component={ComingSoon1} />
                        <Route path='/under-maintenance' exact component={UnderMaintenance} />
                        <Route path='/expertise' exact component={Expertise} />
                        <Route path='/project-management' exact component={ProjectManagement} />
                        <Route path='/our-projects' exact component={OurProjects} />
                        <Route path='/project-details' exact component={ProjectDetails} />
                        <Route path='/team' exact component={Team} />
                        <Route path='/faqs' exact component={Faqs} />

                        <Route path='/contact' exact component={Contact} />
                        <Route path='/service' exact component={Service} />
                        <Route path='/services-details' exact component={ServicesDetails} />

                        <Route path='/portfolio-full-width' exact component={ProtfolioFullWidth} />
                        <Route path='/portfolio-grid-2' exact component={PortfolioGrid2} />
                        <Route path='/portfolio-grid-3' exact component={PortfolioGrid3} />
                        <Route path='/portfolio-grid-4' exact component={PortfolioGrid4} />


                        <Route path='/short-icon-box' exact component={ShortIconBox} />
                        <Route path='/short-counter' exact component={ShortCounter} />
                        <Route path='/short-portfolio' exact component={ShortPortfolio} />
                        <Route path='/short-tabs' exact component={ShortTabs} />
                        <Route path='/short-team' exact component={ShortTeam} />
                        <Route path='/short-testimonial' exact component={ShortTestimonial} />
                        <Route path='/short-form' exact component={ShortForm} />
                        <Route path='/short-accordions' exact component={ShortAccordions} />
                    </Switch>
                </div>
                <ScrollToTop />
            </BrowserRouter>
        )
    }

}

export default Markup;