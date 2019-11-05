import React, {Component} from 'react';
import { Link } from "react-router-dom";

class EachPrompt extends Component{

    editElement=()=>{
        // useHistory().push("/edit");
        this.props.editFunction(this.props.eachElement);
    };

    deleteElement=()=>{
        fetch("/promptagram/" + this.props.eachElement.id + "/",
            {method: 'delete'} )
            .then(data=>data.text())
            .then(response=>{
                console.log(response);
                this.props.fetchAllData();
            });
    };

    render() {
        return(<div>
                <h3>From {this.props.eachElement.description}</h3>
                <Link onClick={this.editElement} to="/edit">Edit Promptagram</Link>
                <Link onClick={this.deleteElement} to="/">Delete Me</Link>
                {/*<Link className="routerLinks" to={{pathname: '/edit', state: { eachElement: this.props.eachElement} }} >Edit Promptagram</Link>*/}
                {/*<button onClick={this.editElement}>Edit</button>*/}
            </div>
        );
    }
}

export default EachPrompt;