import React, {Component} from 'react'
import axios from 'axios'

class MostPopulous extends Component{
    constructor(props) {
    super(props);
    this.state = {
        posts: [],
    }
}

    componentDidMount = ()=>{
        axios.get('https://population-7e663-default-rtdb.firebaseio.com/population.json')
        .then(response => {
                this.setState({
                    posts: response.data
                })
        })
        .catch(error => {
            console.log(error)
        })
    }

    sortHandler = ()=>{
        this.state.posts.sort((a, b) => Number(b.population) - Number(a.population));
    }
    render(){
        const {posts} = this.state
        if(posts.length > 0){
            this.sortHandler()
            posts.length = 5
        }
        return(
            <div className="blockquote mb-5 card-body data">
                <div className="header">State :  Population</div>
                    {
                        posts.length?
                        posts.map(post => 
                            <div key={post.id}>{post.state} : {post.population}</div>):
                        null
                    }
            </div>
        )
    }
}
export default MostPopulous