import React, {Component} from 'react'
import "./Header.css"

class Header extends Component{
    render(){
        return(
            <nav className="Nav">
                <div className="Nav-menus">
                    <img src="http://pngimg.com/uploads/instagram/instagram_PNG3.png" alt="logo" width="35px" height="35px"/>
                    <a className="Nav-logo" href="/">
                        Instagram
                    </a>
                </div>
            </nav>
        )
    }
}

export default Header