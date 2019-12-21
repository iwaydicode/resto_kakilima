import React, {Component} from 'react';
import AboutCard from '../components/AboutCard';

class Home extends Component {
    
    render() {

        return (
            <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>

                <AboutCard />

            </div>
        );
    }
}

export default Home;