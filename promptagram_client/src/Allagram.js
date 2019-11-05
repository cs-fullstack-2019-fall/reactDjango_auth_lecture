import React,{Component} from 'react';
import EachPrompt from "./EachPrompt";

class Allagram extends Component{
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
        fetch('/promptagram/')
            .then(data=>data.json())
            .then(response=>{
                let tempResponse = response.map(
                    (eachElement)=>{
                        return(
                            <EachPrompt editFunction={this.props.editFunction} key={eachElement.id} eachElement={eachElement} fetchAllData={this.fetchAllData}/>
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

export default Allagram;