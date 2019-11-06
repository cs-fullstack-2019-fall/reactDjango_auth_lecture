import React, {Component} from 'react';
import { Link } from "react-router-dom";

class EachPrompt extends Component{

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
                <Link className="routerLinks" to={`/edit/${this.props.eachElement.id}/`}>Edit Promptagram</Link>
                <Link className="routerLinks" test={"test"} onClick={this.deleteElement} to="/">Delete Me</Link>
                {/*<Link className="routerLinks" to={{pathname: '/edit', state: { eachElement: this.props.eachElement} }} >Edit Promptagram</Link>*/}
                {/*<button onClick={this.editElement}>Edit</button>*/}
            </div>
        );
    }
}

export default EachPrompt;