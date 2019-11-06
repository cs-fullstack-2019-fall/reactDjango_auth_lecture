import React,{Component} from 'react';
import { Redirect } from 'react-router';

class Addagram extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isUserAdded: false,
        }
    }

    submitNewImage = (e)=>{
        e.preventDefault();
        let tempBody = {
            imageURL: document.getElementById("imageURL").value,
            description: document.getElementById("description").value,
            foreignKeyUser: this.props.user.userID,
        };
        fetch('/promptagram/',
            {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tempBody),
            })
            .then(data=>data.json())
            .then(response=>{
                console.log(response);
                this.setState({isUserAdded: true});
            });
    };

    render() {
        console.log(this.props.user);
        if(this.state.isUserAdded)
        {
            return(<Redirect to='/' />)
        }
        else {
            return (<div>
                <h1>Add a new image here</h1>
                <form onSubmit={this.submitNewImage}>
                    <label htmlFor="imageURL">Enter the URL for the image</label>
                    <input type="text" id="imageURL"/><br/>

                    <label htmlFor="description">Enter the image description</label>
                    <input type="text" id="description"/><br/>
                    <button>Submit</button>
                </form>
                {this.state.isUserAdded}
            </div>)
        }
    }
}

export default Addagram;