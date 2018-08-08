import React, { Component } from 'react';
// import '../styles/General.css';

class React_Router extends Component{
    constructor(props){
        super(props);
        this.state= {
            user: this.props.userData
        }
    }
    render(){
        console.log("React-Router: ")
        console.log(this.state.user)
        return(
            <div><pre>{JSON.stringify(this.state.user, null, 2) }</pre></div>
            // <div className="container">
            //     <h2>React-metrics/examples/react-router Explanation</h2>
            //     <div className="intro">
            //         <p>
                       
            //         </p>
            //     </div>
            //     <div className="content">
            //         <h3></h3>
            //         <p>
                        
            //         </p>
            //     </div>
            //     <div className="snippet">
            //         <pre><PrismCode className="language-js">{`

            //         `}</PrismCode></pre>
            //     </div>
            //     <div className="content"> 
            //         <p>
                       
            //         </p>
            //     </div>
            // </div>  
        )
    }
}

export default React_Router;