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
            user:{
                isLoggedIn: false,
                username: null,
                userID: 0,
            },
            messageToUsers: "",
            messageToCreateUsers: "",
        }
    }


    loginForm=(e)=>{
        e.preventDefault();
        let usernameFromInput = document.getElementById("username").value;
        let passwordFromInput = document.getElementById("password").value;

        fetch("/auth_users/",
            {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    username: usernameFromInput,
                    password: passwordFromInput,
                }),
            })
            .then(data=>data.text())
            .then(response=>{
                console.log(response);
                if(response==="False"){
                    this.setState({messageToUsers: "Username or Password Incorrect"});
                }
                else{
                    this.setState(
                        {user:{
                                isLoggedIn: true,
                                username: usernameFromInput,
                                userID: response}
                        });
                }
            });
    };

    createNewUser=(e)=>{
        e.preventDefault();
        let usernameFromInput = document.getElementById("new_username").value;
        let passwordFromInput = document.getElementById("new_password").value;

        fetch("/users/",{
            method: 'post',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameFromInput,
                password: passwordFromInput,
            })
        })
            .then(data=>data.json())
            .then(resp=>{
                console.log("Response");
                if(resp.id){
                    console.log(resp);
                    this.setState(
                        {user:{
                                isLoggedIn: true,
                                username: resp.username,
                                userID: resp.id}
                        });
                }
                else{
                    this.setState({messageToCreateUsers: "Username is already taken!"});
                }
            });
    };

    logout=()=>{
        this.setState({user:{
                isLoggedIn: false,
                username: null,
                userID: 0,
            }})
    };

    render() {
        if(this.state.user.isLoggedIn) {
            return (<div>
                <h1>Welcome to Promptagram {this.state.user.username}</h1>
                <Router>
                    <h4>
                        <Link className="routerLinks" to="/">Home</Link>
                        <Link className="routerLinks" to="/add">Add Promptagram</Link>
                        {/*<Link className="routerLinks" to="/edit">Edit Promptagram</Link>*/}
                        <Link className="routerLinks" to="/all">See All Promptagrams</Link>
                        <Link className="routerLinks" to="/" onClick={this.logout}>Log Out</Link>
                    </h4>
                    <Switch>
                        <Route path="/add">
                            <Addagram user={this.state.user} />
                        </Route>
                        <Route path="/all">
                            <Allagram/>
                        </Route>
                        <Route path="/edit/:gramID" component={Editagram}>
                            {/*<Editagram editItemObject={this.state.editItemObject}/>*/}
                        </Route>
                        <Route path="/">
                            <Useragram userID={this.state.user.userID}/>
                        </Route>
                    </Switch>
                </Router>
            </div>)
        }
        else{
            return(
                <div>
                    <h1>Welcome to Promptagram</h1>
                    <h3>Please sign in!</h3>
                    <form onSubmit={this.loginForm}>
                        <label htmlFor="username">Enter Username</label>
                        <input type="text" id="username"/><br/>

                        <label htmlFor="password">Enter Password</label>
                        <input type="text" id="password"/><br/>
                        <button>Submit</button>
                    </form>
                    {this.state.messageToUsers}
                    <h1>OR</h1>
                    <h3>Create a new user</h3>
                    {this.state.messageToCreateUsers}
                    <form onSubmit={this.createNewUser}>
                        <label htmlFor="new_username">Enter Username</label>
                        <input type="text" id="new_username"/><br/>

                        <label htmlFor="new_password">Enter Password</label>
                        <input type="text" id="new_password"/><br/>
                        <button>Submit</button>
                    </form>
                </div>
        )
        }
    }
}

export default Promptagram;