import React from 'react';
import Cardlist from '../Components/Cardlist'
import SearchBox from '../Components/SearchBox'
import './App.css'
import Scroll from '../Components/Scroll'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users=>{this.setState({robots : users})})
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
       // console.log(event.target.value);
        
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1 className='f1'>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots = {filteredRobots}></Cardlist>
                    </Scroll>
                </div>
            )
        }

    }
};

export default App;