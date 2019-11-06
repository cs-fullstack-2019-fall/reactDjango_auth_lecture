import React,{Component} from 'react';

class Editagram extends Component{
    constructor(props) {
        super(props);
        this.state = {
            editMessage: "",
            userObject: "",
        }
    }


    componentDidMount() {
        fetch(`/promptagram/${this.props.match.params.gramID}/`)
            .then(data=>data.json())
            .then(resp=>{
                console.log(resp);
                this.setState({userObject: resp},()=>{
                    document.getElementById("imageURL").value = resp.imageURL;
                    document.getElementById("description").value = resp.description;
                });
            });
    }

    submitEdit=(e)=>{
        e.preventDefault();
        let tempBody = {
            id: this.props.match.params.gramID,
            imageURL: document.getElementById("imageURL").value,
            description: document.getElementById("description").value,
            foreignKeyUser: this.state.userObject.foreignKeyUser,
        };
        fetch("/promptagram/" + this.props.match.params.gramID + "/", {
            method: 'put',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tempBody),
        })
            .then(data=>data.text())
            .then(response=>{
                console.log(response);
                this.setState({editMessage: "User Editted!!!"})
            });
    };

    render() {
        console.log(this.props);
        return(<div>
            <h1>Edit</h1>
            <form onSubmit={this.submitEdit}>
                <label htmlFor="imageURL">Enter imageURL:</label>
                <input type="text" id="imageURL"/>

                <label htmlFor="description">Enter description:</label>
                <input type="text" id="description"/>

                <button>Submit</button>
            </form>
            <h3>{this.state.editMessage}</h3>
        </div>)
    }
}

export default Editagram;