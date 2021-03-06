import React, { Component } from 'react';
import logo from '../logo_transparent.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styling/Header.css'
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from  'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap'
import * as actionTypes from "../store/actionTypes"
import * as pages from '../store/pageNames';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Browse from '../containers/Browse';
import DineIn from '../containers/DineIn';
import Promotions from '../containers/Promotions';
import SignIn from '../containers/SignIn';
import Stories from '../containers/Stories';

const baseURL = "testRepo";

class Header extends Component {
    render() {
        return (
            <HashRouter basename="/"> 
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href={pages.HOME}>
                    <img
                        alt=""
                        src= {logo}
                        width="200"
                        height="200"
                        className="d-inline-block align-top"
                        onClick={this.props.clickedHome}
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={pages.HOME} onSelect={this.props.clickedHome}> Home</Nav.Link>
                        <Nav.Link href={pages.BROWSE} onSelect={this.props.clickedBrowse}>Browse</Nav.Link>
                        <Nav.Link href={pages.PROMOTIONS} onSelect={this.props.clickedPromotions}>Promotions</Nav.Link>
                        <Nav.Link href={pages.DINEIN} onSelect={this.props.clickedDineIn}>Dine In</Nav.Link>
                        <Nav.Link href={pages.STORIES} onSelect={this.props.clickedStories}>Stories</Nav.Link>
                        <NavDropdown title="Accessibility" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#increase-size" className="dropdown">a | A</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="nav-right">
                        <Nav.Link href={pages.SIGNIN} className="sign-in" onSelect={this.props.clickedSignIn}>Sign Up / Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           <Switch>
                    <Route path={pages.BROWSE} component={Browse} />
                    <Route path={pages.PROMOTIONS} component={Promotions} />
                    <Route path={pages.DINEIN} component={DineIn} />
                    <Route path={pages.STORIES} component={Stories} />
                    <Route path={pages.SIGNIN} component={SignIn} />
                    <Route exact path={pages.HOME} component={Home} />
            </Switch>
        </HashRouter>
        )
    }

}

const mapStateToProps = state => {
    return {
        page: state.header.clickedPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clickedHome: () => dispatch({type: actionTypes.CLICKHOME}),
        clickedBrowse: () => dispatch({type: actionTypes.CLICKBROWSE}),
        clickedPromotions: () => dispatch({type: actionTypes.CLICKPROMOTIONS}),
        clickedDineIn: () => dispatch({type: actionTypes.CLICKDINEIN}),
        clickedStories: () => dispatch({type: actionTypes.CLICKSTORIES}),
        clickedSignIn: () => dispatch({type: actionTypes.CLICKSIGNIN})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
