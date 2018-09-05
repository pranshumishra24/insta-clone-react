import React, {Component} from 'react'
import Post from './components/Post/Post';
import Header from './components/Header/Header';
import "./index.css"

    class App extends Component {

      constructor(props){
        super(props)
        this.state = {
          pics :[]
        }

        this.eachNote = this.eachNote.bind(this)
      }
      componentWillMount(){
        fetch("http://www.splashbase.co/api/v1/images/latest")
        .then(results=>{
          return results.json()
        }).then(data => {
              let pictures = data.images.map((pic)=>{
                return({
                  img: pic.url,
                  id: pic.id,
                  caption: "Randomly generated",
                  name: "Random",
                  profile_img: "https://picsum.photos/20/30"
                })
              })
              this.setState({
                pics : pictures
              })
        })
      }

      eachNote(pic, i){
        return (<Post mainImg={pic.img}
            profileImg={pic.profile_img} 
            footer={pic.caption} user={pic.name}/>
        )
    }

      render() {
        return (
          <div  class="Main-container">
            <Header />
            <div class="Post-container">
              {this.state.pics.map(this.eachNote)}
            </div>
          </div>
        );
      }
    }
    export default App;