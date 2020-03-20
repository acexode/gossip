import React, { Component } from 'react';
import Content from './content';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="content">              
                <Content />
            </section>
         )
    }
}
 
export default Home