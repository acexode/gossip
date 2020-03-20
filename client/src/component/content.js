import React, { Component } from 'react';
import avater from '../images/avatar.jpg'
import icon1 from '../images/icon1.jpg'
import icon3 from '../images/icon3.jpg'
import icon4 from '../images/icon4.jpg'
import icon5 from '../images/icon5.jpg'
import Sidebar from './sidebar';
import Post from './post';
import Pagination from './pagination';
class Content extends Component {
    state = {  }
    render() { 
        
        return ( 
            <section className="content">
                <Pagination />                
                <div className="container">
                    <div className="row">
                         <Post /> 
                        <Sidebar />
                       </div>
                </div>

            </section>

         );
    }
}
 
export default Content;