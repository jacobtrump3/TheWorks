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

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            user: "",
            path:"/"
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    user: result,
                });
            },
            (error) => {
                console.log("oops");
            }
        )
    }
    render() {
        console.log("App: ")
        console.log(this.state.user)
        return (
            <Router>
                <div>
                    <div>
                        <div id="navbar">
                            <div className="nav-link"><b><h2><Link to="/projects">Projects</Link></h2></b></div>
                            <div className="nav-link"><b><h2><Link to="/tutorials">Tutorials</Link></h2></b></div>
                            <div className="nav-link"><b><h2><Link to="/books">Links/About</Link></h2></b></div>
                        </div>
                        <hr />
                        <Switch>
                            <Route path={`${this.state.path}projects`} render={()=><Projects  userData={this.state.user} path={`${this.state.path}tutorials`}/>}/>
                            <Route path={`${this.state.path}tutorials`} render={()=><Tutorials  userData={this.state.user} path={`${this.state.path}tutorials`}/>}/>
                            <Route path="/books" component={Books} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

class Projects extends Component {
    constructor(props){
        super(props);
        this.state ={
            path: this.props.path
        }
    }
    render(){
        return (
            <div>
                <div>
                    <h1>My Projects</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ul>
                                {/* <li><Link to={`${match.url}/html`}>HTML</Link></li> */}
                                
                            </ul>
                        </div>
                        <div className="col-md-9">
                            {/* <Route path={`${match.path}/html`} render={() => { return <h1>HTML by Ducket book</h1> }} /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Tutorials extends Component  {
    constructor(props){
        super(props);
        this.state ={
            user: this.props.userData,
            path: this.props.path
        }
    }
    render(){
        console.log("Tutorials: ")
        console.log(this.state.user)
        return (
            <div className="tutorials-container">
                <div>
                    <h1>My Tutorials</h1>
                </div>
                <div className="pages">
                        <div className="pages-links">
                            <div><h4><Link to={`${this.state.path}/error-handling`}>Error Handling With React</Link></h4></div>
                            <div><h4><Link to={`${this.state.path}/react-metrics`}>Metrics</Link></h4></div>
                        </div>
                
                    <div className="col-md-9">
                        <Route  path={`${this.state.path}/error-handling`} render={()=><Error_Handling_Tutorial  userData={this.state.user} path={`${this.state.path}/error-handling`}/>}/>   
                        <Route path={`${this.state.path}/react-metrics`} render={()=><Metrics  userData={this.state.user} path={`${this.state.path}/react-metrics`}/>}/>   
                    </div>
                </div>
            </div>
        );
    }
}
class Metrics extends Component{
    constructor(props){
        super(props);
        this.state ={
            user: this.props.userData,
            path: this.props.path
        }
    }
    render(){
        console.log("Metrics: ")
        console.log(this.state.user)
        const redux_path = this.state.path + '/react-redux'
        const router_path = this.state.path + '/react-router'
        return(
            <div>
                <div className="sublinks">
                    <div className="nav-sublink"><Link to={router_path}>React-Router</Link></div>
                    <div className="nav-sublink"><Link to={redux_path}>Redux</Link></div>
                </div>
                <Switch>
                    <Route path={router_path} render={()=><React_Router  userData={this.state.user} path={router_path}/>}/>   
                    <Route path={redux_path} render={()=><Redux_Metrics  userData={this.state.user} path={redux_path}/>}/>   
                </Switch>
            </div>
        );
    }
}

class Books extends Component{
    constructor(props){
        super(props);
        this.state ={
            user: "",
            path:"/"
        }
    }
    render(){
        return (
            <div>
                <div>
                    <h1>About Me</h1>
                </div>
            </div>
        )
    }
}

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            path:"/"
        }
    }
    render(){
        return (
            <div>
                <h1>Landing page</h1>
            </div>
        )
    }
}



export default App;
