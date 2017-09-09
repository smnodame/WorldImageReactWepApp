import React from 'react'
import axios from 'axios'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            this.setState({ posts: res.data })
            console.log(this.state.posts)
        })
    }
    render() {
      return (
        <div className="container is-widescreen" style={{ marginTop: 30 }}>
            <table className="table">
                <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Title</th>
                        <th><abbr></abbr></th>
                        <th><abbr></abbr></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((post, i) =>
                        <tr>
                            <th>{i + 1}</th>
                            <td>
                                <a title={post.title}>
                                    { post.title }
                                </a>
                            </td>
                            <td>Edit</td>
                            <td>Remove</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      )
   }
}

export default Posts
