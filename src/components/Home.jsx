import React, { Component } from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import MostPopulous from './MostPopulous'
import LeastPopulous from './LeastPopulous'
import '../style/style.css'

class Home extends Component {
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>Top 5 most/Top 5 least populated states in India</h1>
                    <NavLink to="/mostPopulous" activeClassName="linkColor link-size">
                        Click for 5 most populous states
                    </NavLink>
                    <div></div>
                    <NavLink to="/leastPopulous" activeClassName="linkColor link-size">
                        Click for 5 least populous states
                    </NavLink>
                </div>
                <Switch>
                    <Route path="/mostPopulous" component={MostPopulous}></Route>
                    <Route path="/leastPopulous" component={LeastPopulous}></Route>
                </Switch>
            </div>
        )
    }
}

export default Home