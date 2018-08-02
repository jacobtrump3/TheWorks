import React, { Component } from 'react';
import { PrismCode } from 'react-prism';
import '../styles/General.css';
import Modal_SS from '../images/Error_Boundary_Modal_SS.png'


class Error_Handling_Tutorial extends Component{
    
    render(){
        return(
            <div className="container">
                <h2>Error Handling in with React.js</h2>
                <div className="intro">
                    <p>
                        Error Boundaries came with the release of React 16 and are essentially just components that are 
                        able to detect errors within other react components and dynamically display a fallback screen. 
                        This creates a more user-friendly experience preventing the user from hitting any browser related 
                        error pages and allowing the developer to provide alternative routes and greater detail with their feedback.
                    </p>
                </div>
                <div className="content">
                    <h3>Error Boundaries in action:</h3>
                    <p>
                        For the purpose of providing a consistent example we are going to create a component that will consistently
                        trigger an error. In order to do this we can simply place a “throw new Error” statement in the componentDidMount()
                        lifecycle method of this component. This will work consistently because this lifecycle method is executed 
                        after the first render of the component on the client side:
                    </p>
                </div>
                <div className="snippet">
                    <pre><PrismCode className="language-js">{`
import React, { Component } from 'react';

class ErrorBoundaryTest extends Component {

    state = { greeting: "TEST"};
    componentDidMount() {
        throw new Error("An error has occurred in Error Boundary Test component!");
    }
    render() {
        return <h2>{this.state.greeting}</h2>;
    }
}

export default ErrorBoundaryTest;
                    `}</PrismCode></pre>
                </div>
                <div className="content"> 
                    <p>
                        Error boundaries are defined the same way as an ordinary react component with the addition of the new componentDidCatch() 
                        lifecycle method and a simple if statement to check for an error. In the following example the Error boundary will appear 
                        as a short message to the user along with a list of links to the other pages on the website. In this example error and errorInfo 
                        provide the name of the error that has occurred as well as information about where it occurred in the code.  It is included
                         details tag but this you may not want to provide the end user with this much information:
                    </p>
                </div>
                <div className="snippet">
                    <pre><PrismCode className="language-js">{`
import React, { Component } from 'react';
import '../Boundary_styles/ExampleErrorBoundary.css'
import { Link } from 'react-router-dom';

class ExampleErrorBoundary extends Component{
    state = { 
        error: null,
        errorInfo: null
    }
                    `}</PrismCode></pre>
                    <pre className="box-red"><PrismCode className="language-js" >{`
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }
                    `}</PrismCode></pre>
                    <pre><PrismCode className="language-js">{`
    render(){
        if(this.state.errorInfo) {
            return(
                <div className="backdrop">
                    <div className="window" id="window">
                        <div className="info">
                            <h2> Something went wrong :(</h2>
                            <div className="details-container">
                                <details style={{ whiteSpace: "pre-wrap"}}>
                                    <summary> More Information </summary>
                                    {this.state.error && this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo.componentStack} 
                                    {/* we probably wouldn’t want to include the above line on 
                                    an actual site in order to maintain abstraction */}
                                </details>
                            </div>
                            <h4>The page you are currently attempting to access has not loaded properly
                                please select one of the links below to visit a different part of the website 
                                or select details to see what could have caused this issue.</h4>
                                <div className="link">
                                    <Link className="navHeader" to='/'>HOME</Link>
                                </div>
                                <div className="link">
                                    <Link className="navHeader" to='/outreach'>OUTREACH</Link><br/>
                                </div>
                                <div className="link">
                                    <Link className="navHeader" to='/posts'>COMMUNITY</Link>
                                </div>
                                <div className="link">
                                    <Link className="navHeader" to='/sponsors'>SPONSORS</Link>
                                </div>
                                
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ExampleErrorBoundary;
                       
                    `}</PrismCode></pre>
                </div>
                <div className="content">
                    The following css along with the code snippet shown above should provide an error boundary formatted like the one in the
                     screenshot below. This formatting helps to restrict the user from attempting to interact with parts of a page that may have 
                     loaded correctly if the entire page isn’t in working order.
                </div>
                <div className="snippet">
                    <pre><PrismCode className="language-css">{`

                h2{
    z-index: 999;
    padding-top: 20px;
}

h4{
    margin-bottom: 20px; 
    padding: 20px;
}
.info{
    color: black;
}
.link{
    border: 1px solid black;
    width: 200px;
    margin:auto;
}
.details-container{
    margin-top: 40px;
    background-color: white;
    width: 500px;
}
.window{
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    height: 90%;
    width: 500px;
    z-index: 6;
    box-shadow: 10px 10px 5px rgb(52, 52, 52);
    border-radius: 5px;
}
.backdrop{
    top: 0%;
    left: 0%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    z-index: 5;
    overflow: hidden;
    overflow-y: scroll;
}
                    `}</PrismCode></pre>
                </div>
                <div className="screenshot">
                    <img src={Modal_SS}/>
                </div>
                <div className="content">
                    <p>
                        The above screenshot demonstrates error boundaries ability to enable the user to navigate to a functional section of the website
                        if there is an issue with one of the other modules instead of providing a non-functional error page
                    </p>
                </div>
                <div className="snippet">
                    <pre><PrismCode className="language-xml">{`
<ExampleErrorBoundary>
    <ErrorBoudaryTestComponent/>
</ExampleErrorBoundary>

                    `}</PrismCode></pre>
                </div>
                <div className="content">
                    <p>
                    In the above code snippet ExampleErrorBoundary is the name of the component seen in the previous screenshot and it is surrounding the 
                    Test component that we created at the beginning of the tutorial which in this instance is being called ErrorBoudaryTestComponent
                    <br/><br/>
                    The componentDidCatch() lifecycle method works similarly to a catch{} block in Java or JavaScript by allowing your Error Boundary to 
                    surround a component that may cause an error 
                    <br/><br/>
                    Error Boundaries can be placed around most components and will pick up errors in any of 
                    their child components. Placing an Error Boundary with a more generic message at the top of your component tree allows your application 
                    to pick up any errors that have slipped through the cracks and would otherwise cause the application to fail.
                    <br/><br/><br/>
                    Final Notes: 
                    <br/><br/>
                    Error boundaries will not catch errors for:<br/>
                    <ul>
                        <li>Event handlers eg. handleClick()</li>
                        <li>Asynchronous code eg. setTimeout or requestAnimationFrame callbacks</li>
                        <li>Server side rendering</li>
                        <li>Errors thrown in the error boundary itself</li>
                    </ul>
                    <br/>
                    Errors that are not caught by and error boundary will result in the unmounting of the whole component tree This is in order to prevent a
                    broken UI from continuing to run and possibly causing more problems in the future.
                    <br/><br/>
                    The full code for the website used in this example can be found at <a href="https://github.com/jtrump70/CupOCoffee"> my example website</a> on
                    the AroundMe page
                    
                    </p>
                </div>
            </div>
        )
    }
}

export default Error_Handling_Tutorial;