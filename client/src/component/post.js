import React, { useState, useEffect } from "react";
import axios from 'axios'
import avater from '../images/avatar.jpg'
import icon1 from '../images/icon1.jpg'
import icon3 from '../images/icon3.jpg'
import icon4 from '../images/icon4.jpg'
import icon5 from '../images/icon5.jpg'
import { Link } from "react-router-dom";

const Post = () => {
    const [data, setData] = useState({ gossips: [] });
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios('/api/gossips');
        setData(result.data);
        console.log(result.data.gossips)
        };
        fetchData();
    }, []);
       
  return (     
    <div className="col-lg-8 col-md-8">
         {data.gossips.map(item => (
         <div className="post" key={item._id} >    
         <div className="wrap-ut pull-left">
           <div className="userinfo pull-left">
             <div className="avatar">
               <img src={avater} alt="" />
               <div className="status green">&nbsp;</div>
             </div>
 
             <div className="icons">
               <img src={icon1} alt="" />
               <img src={icon4} alt="" />
             </div>
           </div>
           <div className="posttext pull-left">
             <h2>
               <Link to={`/gossip/${item._id}`}>
                 {item.title}
               </Link>
             </h2>
             <p>
               {item.body.substr(0,200)}...
             </p>
           </div>
           <div className="clearfix"></div>
         </div>
         <div className="postinfo pull-left">
           <div className="comments">
             <div className="commentbg">
               {item.comments.length}
               <div className="mark"></div>
             </div>
           </div>
           <div className="views">
             <i className="fa fa-eye"></i> {item.views}
           </div>
           <div className="time">
             <i className="fa fa-clock-o"></i> 24 min
           </div>
         </div>
         <div className="clearfix"></div>
       </div>
     
      ))}
     
    </div>
  );
};
export default Post;
