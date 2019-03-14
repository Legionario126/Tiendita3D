import React from 'react'
import Menu from './Menu';
import Footer from './Footer'
import M from "materialize-css";
import 'react-materialize';



class Home extends React.Component {
    state = {
        respo: {},
        user: {}
    }
    
    componentDidMount() {
      M.AutoInit(); 
    }

    render() {
        const { user } = this.state
        if (!user) return <p>Loading ...</p>
        if(this.state.authorized) {
            return(
                <div>
                  <div>
                    <Menu />
                    <Footer />
                  </div>
                </div>
            )
        }else {
            return (
                <div>
                  <Menu />
                  <Footer />
                </div>
            )
        }
    }
}

export default Home