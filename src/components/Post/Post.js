import React, {Component} from 'react'
import './Post.css'

class Post extends Component{

    render(){
        
        return(
        <article class="post-article">
            <header class="Post-header">
                <img class="Post-Profile-img" src={this.props.profileImg} />
                <span class="Post-user-name">{this.props.user}</span> 
            </header>
            <main>
                <img alt="main-image" src={this.props.mainImg} />
                <footer class="Post-footer">
                    <em>{this.props.footer}</em>
                </footer>
            </main>
        </article>
    )}
}
export default Post