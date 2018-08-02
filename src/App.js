import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    BrowserRouter
} from 'react-router-dom'
import Error_Handling_Tutorial from './Tutorials/content/Error_Handling';
import React_Router from './Tutorials/content/React-Metrics/react-router';
import Redux_Metrics from './Tutorials/content/React-Metrics/redux';

const Hello =({ match }) => {
    return (
        <div>
            <div>
                <h1>My Projects</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ul>
                            <li><Link to={`${match.url}/html`}>HTML</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <Route path={`${match.path}/html`} render={() => { return <h1>HTML by Ducket book</h1> }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Tutorials = ({ match }) => {
    const Metrics =({ match }) =>{
        return(
            <div>
                <div className="sublinks">
                    <div className="nav-sublink"><Link to={`${match.url}/react-router`}>React-Router</Link></div>
                    <div className="nav-sublink"><Link to={`${match.url}/redux-metrics`}>Redux</Link></div>
                </div>
                <Switch>
                    <Route path={`${match.url}/react-router`} component={React_Router} />
                    <Route path={`${match.url}/redux-metrics`} component={Redux_Metrics} />
                </Switch>
            </div>
        )
    }
    return (
        <div className="tutorials-container">
            <div>
                <h1>My Tutorials</h1>
            </div>
            <div className="pages">
                    <div className="pages-links">
                        <div><h4><Link to={`${match.url}/error-handling`}>Error Handling With React</Link></h4></div>
                        <div><h4><Link to={`${match.url}/react-metrics`}>Metrics</Link></h4></div>
                    </div>
               
                <div className="col-md-9">
                    <Route path={`${match.path}/error-handling`} component={Error_Handling_Tutorial} />
                    <Route path={`${match.path}/react-metrics`} component={Metrics} />
                </div>
            </div>
        </div>
    )
}

const Books = ({ match }) => {
    return (
        <div>
            <div>
                <h1>About Me</h1>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <h1>Landing page</h1>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <div id="navbar">
                            <div className="nav-link"><b><h2><Link to="/hello">Projects</Link></h2></b></div>
                            <div className="nav-link"><b><h2><Link to="/tutorials">Tutorials</Link></h2></b></div>
                            <div className="nav-link"><b><h2><Link to="/books">Links/About</Link></h2></b></div>
                        </div>
                        <hr />
                        <Switch>
                            <Route path="/hello" component={Hello} />
                            <Route path="/tutorials" component={Tutorials} />
                            <Route path="/books" component={Books} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
