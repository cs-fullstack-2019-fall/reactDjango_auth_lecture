import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Addagram from "./Addagram";
import Useragram from "./Useragram";
import Editagram from "./Editagram";
import Allagram from "./Allagram";

class Promptagram extends Component{
    constructor(props) {
        super(props);
        this.state={
            editItemObject: "",
        }
    }

    editFunction=(itemObject)=>{
        this.setState({editItemObject: itemObject})
    };

    render() {
        return(<div>
            <h1>Test</h1>
            <Router>
            <h4>
                <Link className="routerLinks" to="/">Home</Link>
                <Link className="routerLinks" to="/add">Add Promptagram</Link>
                {/*<Link className="routerLinks" to="/edit">Edit Promptagram</Link>*/}
                <Link className="routerLinks" to="/user">See User Promptagram</Link>
            </h4>
            <Switch>
                <Route path="/add">
                    <Addagram />
                </Route>
                <Route path="/user">
                    <Useragram/>
                </Route>
                <Route path="/edit">
                    <Editagram editItemObject={this.state.editItemObject}/>
                </Route>
                <Route path="/">
                    <Allagram editFunction={this.editFunction} />
                </Route>
            </Switch>
            </Router>
        </div>)
    }
}

export default Promptagram;