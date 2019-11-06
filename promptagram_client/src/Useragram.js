import React,{Component} from 'react';
import EachPrompt from "./EachPrompt";

class Useragram extends Component{
    constructor(props) {
        super(props);
        this.state={
            allPromptsArray: <h3>Loading</h3>,
        }
    }

    componentDidMount() {
        this.fetchAllData();
    }

    fetchAllData = () =>{
        // fetch('/promptagram/')
        fetch(`get_user_models/${this.props.userID}/`)
            .then(data=>data.json())
            .then(response=>{
                let tempResponse = response.map(
                    (eachElement)=>{
                        return(
                            <EachPrompt key={eachElement.id} eachElement={eachElement} fetchAllData={this.fetchAllData}/>
                        );
                    }
                );
                this.setState({allPromptsArray: tempResponse});
            })
    };

    render() {
        return(<div>
            {this.state.allPromptsArray}
        </div>)
    }
}

export default Useragram;