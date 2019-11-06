import React,{Component} from 'react';

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
                            <h3 key={eachElement.id}>From {eachElement.description}</h3>
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