import React, { useState } from 'react';

const Sidebar = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
  const handleChange = (data) =>{
      console.log(data)
  }
  return (
    <div className="col-lg-4 col-md-4">
                            <div className="sidebarblock">
                                <h3>Categories</h3>
                                <div className="divline"></div>
                                <div className="blocktxt">
                                    <ul className="cats">
                                        <li><a href="http://forum.azyrusthemes.com/02_topic.html#">Trading for Money <span className="badge pull-right">20</span></a></li>
                                        <li><a href="http://forum.azyrusthemes.com/02_topic.html#">Vault Keys Giveway <span className="badge pull-right">10</span></a></li>
                                        <li><a href="http://forum.azyrusthemes.com/02_topic.html#">Misc Guns Locations <span className="badge pull-right">50</span></a></li>
                                        <li><a href="http://forum.azyrusthemes.com/02_topic.html#">Looking for Players <span className="badge pull-right">36</span></a></li>
                                        <li><a href="http://forum.azyrusthemes.com/02_topic.html#">Stupid Bugs &amp; Solves <span className="badge pull-right">41</span></a></li>
                                        <li><a href="http://forum.azyrusthemes.com/02_topic.html#">Video &amp; Audio Drivers <span className="badge pull-right">11</span></a></li>
                                        <li><a href="http://forum.azyrusthemes.com/02_topic.html#">2K Official Forums <span className="badge pull-right">5</span></a></li>
                                    </ul>
                                </div>
                            </div>

                           
                            <div className="sidebarblock">
                                <h3>Poll of the Week</h3>
                                <div className="divline"></div>
                                <div className="blocktxt">
                                    <p>Which game you are playing this week?</p>
                                    <form action="http://forum.azyrusthemes.com/02_topic.html#" method="post" className="form">
                                        <table className="poll">
                                            <tbody><tr>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}>
                                                            Call of Duty Ghosts
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="chbox">
                                                    <input onChange={handleChange} id="opt1" type="radio" name="opt" value="1" />  
                                                    <label ></label>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar color2" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '63%'}}>
                                                            Titanfall
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="chbox">
                                                    <input onChange={handleChange} id="opt2" type="radio" name="opt" value="2" checked="" />  
                                                    <label></label>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar color3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}>
                                                            Battlefield 4
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="chbox">
                                                    <input onChange={handleChange} id="opt3" type="radio" name="opt" value="3" />  
                                                  
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </form>
                                    <p className="smal">Voting ends on 19th of October</p>
                                </div>
                            </div>

                           
                            <div className="sidebarblock">
                                <h3>My Active Threads</h3>
                                <div className="divline"></div>
                                <div className="blocktxt">
                                    <a href="http://forum.azyrusthemes.com/02_topic.html#">This Dock Turns Your iPhone Into a Bedside Lamp</a>
                                </div>
                                <div className="divline"></div>
                                <div className="blocktxt">
                                    <a href="http://forum.azyrusthemes.com/02_topic.html#">Who Wins in the Battle for Power on the Internet?</a>
                                </div>
                                <div className="divline"></div>
                                <div className="blocktxt">
                                    <a href="http://forum.azyrusthemes.com/02_topic.html#">Sony QX10: A Funky, Overpriced Lens Camera for Your Smartphone</a>
                                </div>
                                <div className="divline"></div>
                                <div className="blocktxt">
                                    <a href="http://forum.azyrusthemes.com/02_topic.html#">FedEx Simplifies Shipping for Small Businesses</a>
                                </div>
                                <div className="divline"></div>
                                <div className="blocktxt">
                                    <a href="http://forum.azyrusthemes.com/02_topic.html#">Loud and Brave: Saudi Women Set to Protest Driving Ban</a>
                                </div>
                            </div>


                        </div>
                   
  );
};
export default Sidebar;