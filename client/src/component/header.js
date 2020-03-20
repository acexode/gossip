import React from 'react';
import slide from '../images/slide.jpg'
import logo from '../images/logo.jpg'
function Header(props) {
        return ( 
            <div>
                  <div className="tp-banner-container" style={{overflow: 'visible'}}>
                <div className="tp-banner revslider-initialised tp-simpleresponsive hovered" id="revslider-112" style={{maxHeight: '278px', height: '278px'}}>
                    <ul style={{display: 'block', overflow: 'hidden', marginLeft: '-3em', height: '100%', maxHeight: 'none',}}>	
                      
                        <li data-transition="fade" data-slotamount="7" data-masterspeed="1500" style={{width: '100%', height: '100%', overflow: 'hidden', visibility: 'visible', left:' 0px', top: '0px', zndex: '20', opacity: '1'}}>
                           
                            <div className="slotholder" style={{width:'100%', height:'100%'}}>
                                <div className="tp-bgimg defaultimg" data-lazyload="undefined" data-bgfit="cover" data-bgposition="left top" data-bgrepeat="no-repeat" data-lazydone="undefined" data-src={{slide}} style={{backgroundColor: 'rgba(0, 0, 0, 0)', backgroundRepeat: 'no-repeat', backgroundImage:  `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'left top', width: '100%', height: '100%', opacity: '1', position: 'relative'}}></div></div>
                          
                        </li>
                    </ul>
                <div className="tp-loader" style={{display: 'none'}}></div><div className="tp-bannertimer" style={{visibility: 'hidden', width: '100%'}}></div></div>
            </div>
            <div className="headernav">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-xs-3 col-sm-2 col-md-2 logo "><a href="/"><img src={logo} alt="" /></a></div>
                        <div className="col-lg-3 col-xs-9 col-sm-5 col-md-3 ">
                        <div className="dropdown mt-3">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">All</a>
                                <a className="dropdown-item" href="#">Politics</a>
                                <a className="dropdown-item" href="#">Business</a>
                                <a className="dropdown-item" href="#">Sport</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 search hidden-xs hidden-sm col-md-3">
                            <div className="wrap">
                                <form action="#" method="post" className="form">
                                    <div className="pull-left txt"><input type="text" className="form-control" placeholder="Search Topics" /></div>
                                    <div className="pull-right"><button className="btn btn-default" type="button"><i className="fa fa-search"></i></button></div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xs-12 col-sm-5 col-md-4 avt">
                            <div className="stnt pull-left">                            
                                <form action="03_new_topic.html" method="post" className="form">
                                    <a href="/create-gossip" className="btn btn-primary">Start New Topic</a>
                                </form>
                            </div>
                            <div className="env pull-left"><i className="fa fa-envelope"></i></div>

                            <div className="avatar pull-left dropdown">
                                <a data-toggle="dropdown" href="#"><img src="images/avatar.jpg" alt="" /></a> <b className="caret"></b>
                                <div className="status green">&nbsp;</div>
                                <ul className="dropdown-menu" role="menu">
                                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">My Profile</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-2" href="#">Inbox</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-3" href="#">Log Out</a></li>
                                    <li role="presentation"><a role="menuitem" tabIndex="-4" href="04_new_account.html">Create account</a></li>
                                </ul>
                            </div>
                            
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
         )
   
}
 
export default Header