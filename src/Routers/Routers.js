import React from "react";

// PACKAGES
import { Route, Switch }    from "react-router-dom";

// PAGES
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery";
import Landing from "../Pages/Landing/Landing";
import Location from "../Pages/Location/Location";
import Restaurant from "../Pages/Restaurant/Restaurant";
import Rooms from "../Pages/Rooms/Rooms";
import Luxury from "../Pages/Luxury/Luxury";
import MidRange from "../Pages/MidRange/MidRange";
import Booking from '../Pages/booking';

// COMPONENTS
import Footer from "../Components/Footer";

const Routers = (props) => {
		let routerProps = props;
		return (
			<>
			<Switch>
				<Route
					path = "/aboutUs"
					exact
					component = {() =>  <AboutUs t={props.t} i18n={props.i18n}/> }
				/>
				<Route 
				path = "/booking"
				exact
				component = {() => <Booking t={props.t} i18n={props.i18n}/> }
				/>
				<Route
					path = "/"
					exact
					component = {() =>  <Landing t={props.t} i18n={props.i18n}/> }
				/>
                <Route
					path = "/contact"
					exact
					component = {() =>  <Contact t={props.t} i18n={props.i18n}/> }
				/>
                <Route
					path = "/gallery"
					exact
					component = {() =>  <Gallery t={props.t} i18n={props.i18n}/> }
				/>
                <Route
					path = "/location"
					exact
					component = {() =>  <Location t={props.t} i18n={props.i18n}/> }
				/>
                <Route
					path = "/restaurant"
					exact
					component = {() =>  <Restaurant t={props.t} i18n={props.i18n}/> }
				/>
                <Route
					path = "/rooms"
					exact
					component = {() =>  <Rooms t={props.t} i18n={props.i18n}/> }
				/>
				<Route
					path = "/rooms/:type"
					exact
					component = {(props) =>  
					<Luxury type={props.match.params.type} t={routerProps.t} i18n={routerProps.i18n} />
				}
				/>
			</Switch>
			<Footer t={props.t} i18n={props.i18n}/>
			</>
		);
	}

export default Routers;