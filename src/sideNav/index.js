import React from 'react';
import { HashRouter as Router,Switch,Route } from 'react-router-dom';
import Layout from './sideNavLayout';
import RootPage from '../homePage';
import InStockSection from '../inStockSection';
import HeatTransferSection from '../heatTransferSection';
import ExperienceSection from '../experienceSection';
import ParchaceCart from '../parchaceCart';
import Login from '../login';

const NavBarRouter = () =>{
    return(
        <Router>
            <Switch>
                <Layout>
                    <Route exact path="/" component={RootPage}/>
                    <Route path="/InStockSection" component={InStockSection}/>
                    <Route path="/HeatTransferSection" component={HeatTransferSection}/>
                    <Route path="/ExperienceSection" component={ExperienceSection}/>
                    <Route path="/ParchaceCart" component={ParchaceCart}/>
                    <Route path="/Login" component={Login}/>
                </Layout>
            </Switch>
        </Router>
    )
}

export default NavBarRouter;