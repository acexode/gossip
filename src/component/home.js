import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                  <div className="tp-banner-container" style="overflow: visible,">
                <div className="tp-banner revslider-initialised tp-simpleresponsive hovered" id="revslider-112" style={{maxHeight: '278px', height: '278px'}}>
                    <ul style="display: block, overflow: hidden, width: 100%, height: 100%, max-height: none,">	
                      
                        <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" style={{width: '100%', height: '100%', overflow: 'hidden', visibility: 'visible', left:' 0px', top: '0px', zndex: '20', opacity: '1'}}>
                           
                            <div className="slotholder" style={{width:'100%', height:'100%'}}>
                                <div className="tp-bgimg defaultimg" data-lazyload="undefined" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" data-lazydone="undefined" data-src="images/slide.jpg" style={{backgroundColor: 'rgba(0, 0, 0, 0)', backgroundRepeat: 'no-repeat', backgroundImage: 'url()', backgroundSize: 'cover', backgroundPosition: 'left top', width: '100%', height: '100%', opacity: '1', position: 'relative'}}></div></div>
                          
                        </li>
                    </ul>
                <div className="tp-loader" style={{display: 'none'}}></div><div className="tp-bannertimer" style={{visibility: 'hidden', width: '100%'}}></div></div>
            </div>
            </div>
         )
    }
}
 
export default Home