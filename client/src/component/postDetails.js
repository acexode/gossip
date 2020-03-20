import React, { useState, useEffect } from "react";
import * as moment from 'moment';
import avater from "../images/avatar.jpg";
import icon1 from "../images/icon1.jpg";
import icon3 from "../images/icon3.jpg";
import icon4 from "../images/icon4.jpg";
import icon5 from "../images/icon5.jpg";
import Axios from "axios";


// const upDateViews = () =>{
//   // alert('comoponent mounted')
//   Axios.put()
// }
const PostDetails = ({ match }) => {
  const [gossip, setGossip] = useState({});
   const formatTime = (createdAt) => {
       console.log(createdAt)
       console.log(createdAt.gossip.created_at)
    const thisMoment = moment.utc(createdAt.gossip.created_at).format("D MMM YY ") + '@ ' + moment.utc(createdAt.gossip.created_at).format("h:m a")
    return thisMoment;
    };
    const thumbsUp = async () =>{    
      const updatelikes = await Axios.put(`/api/likes/${match.params.id}`);
      const likes = await updatelikes
      console.log(likes.data)
      setGossip(likes.data.gossip)
    }
  useEffect(() => {
    fetchIttem();
    
  }, []);
  const fetchIttem = async () => {
    const item = await Axios.get(`/api/gossip/${match.params.id}`);
    const itemJson = await item;
    const updateViews = await Axios.put(`/api/views/${match.params.id}`);
    const updatedView = await updateViews
    setGossip(itemJson.data.gossips);
    console.log(itemJson.data.gossips);
  };
  return (
    <section className="content">
     
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="post beforepagination">
              <div className="topwrap">
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
                  <h2>{gossip.title}</h2>
                  <img style={{width: "100%", borderRadius: "5px"}} className="mb-3" src={gossip.images} />
                  <br />
                  <p className="text-wrap">
                    {gossip.body}
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="postinfobot">
                <div className="likeblock pull-left">
                  <a
                    onClick = {thumbsUp}
                    className="up"
                  >
                    <i className="fa fa-thumbs-o-up"></i> {gossip.likes}
                  </a>
                  <a
                    href=""
                    className="down"
                  >
                    <i className="fa fa-thumbs-o-down"></i> {gossip.dislikes}
                  </a>
                </div>

                <div className="prev pull-left">
                  <a href="">
                    <i className="fa fa-reply"></i>
                  </a>
                </div>

                <div className="posted pull-left">
                  <i className="fa fa-clock-o"></i> Posted on : {formatTime({gossip})} 
                </div>

                <div className="next pull-right">
                  <a href="">
                    <i className="fa fa-share"></i>
                  </a>

                  <a href="">
                    <i className="fa fa-flag"></i>
                  </a>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>

            <div className="paginationf">
              <div className="pull-left">
                <a
                  href=""
                  className="prevnext"
                >
                  <i className="fa fa-angle-left"></i>
                </a>
              </div>
              <div className="pull-left">
                <ul className="paginationforum">
                  <li className="hidden-xs">
                    <a href="">1</a>
                  </li>
                  <li className="hidden-xs">
                    <a href="">2</a>
                  </li>
                  <li className="hidden-xs">
                    <a href="">3</a>
                  </li>
                  <li className="hidden-xs">
                    <a href="">4</a>
                  </li>
                  <li>
                    <a href="">5</a>
                  </li>
                  <li>
                    <a href="">6</a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="active"
                    >
                      7
                    </a>
                  </li>
                  <li>
                    <a href="">8</a>
                  </li>
                  <li className="hidden-xs">
                    <a href="">9</a>
                  </li>
                  <li className="hidden-xs">
                    <a href="">
                      10
                    </a>
                  </li>
                  <li className="hidden-xs hidden-md">
                    <a href="">
                      11
                    </a>
                  </li>
                  <li className="hidden-xs hidden-md">
                    <a href="">
                      12
                    </a>
                  </li>
                  <li className="hidden-xs hidden-sm hidden-md">
                    <a href="">
                      13
                    </a>
                  </li>
                  <li>
                    <a href="">
                      1586
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pull-left">
                <a
                  href=""
                  className="prevnext last"
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
              <div className="clearfix"></div>
            </div>

            <div className="post">
              <div className="topwrap">
                <div className="userinfo pull-left">
                  <div className="avatar">
                    <img src="./Forum __ Topic_files/avatar2.jpg" alt="" />
                    <div className="status red">&nbsp;</div>
                  </div>

                  <div className="icons">
                    <img src="./Forum __ Topic_files/icon3.jpg" alt="" />
                    <img src="./Forum __ Topic_files/icon4.jpg" alt="" />
                    <img src="./Forum __ Topic_files/icon5.jpg" alt="" />
                    <img src="./Forum __ Topic_files/icon6.jpg" alt="" />
                  </div>
                </div>
                <div className="posttext pull-left">
                  <p>
                    Typography helps you engage your audience and establish a
                    distinct, unique personality on your website. Knowing how to
                    use fonts to build character in your design is a powerful
                    skill, and exploring the history and use of typefaces, as
                    well as typogra...
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="postinfobot">
                <div className="likeblock pull-left">
                  <a
                    href=""
                    className="up"
                  >
                    <i className="fa fa-thumbs-o-up"></i>10
                  </a>
                  <a
                    href=""
                    className="down"
                  >
                    <i className="fa fa-thumbs-o-down"></i>1
                  </a>
                </div>

                <div className="prev pull-left">
                  <a href="">
                    <i className="fa fa-reply"></i>
                  </a>
                </div>

                <div className="posted pull-left">
                  <i className="fa fa-clock-o"></i> Posted on : 20 Nov @ 9:45am
                </div>

                <div className="next pull-right">
                  <a href="">
                    <i className="fa fa-share"></i>
                  </a>

                  <a href="">
                    <i className="fa fa-flag"></i>
                  </a>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>

            <div className="post">
              <div className="topwrap">
                <div className="userinfo pull-left">
                  <div className="avatar">
                    <img src="./Forum __ Topic_files/avatar3.jpg" alt="" />
                    <div className="status red">&nbsp;</div>
                  </div>

                  <div className="icons">
                    <img src="./Forum __ Topic_files/icon3.jpg" alt="" />
                    <img src="./Forum __ Topic_files/icon4.jpg" alt="" />
                    <img src="./Forum __ Topic_files/icon5.jpg" alt="" />
                    <img src="./Forum __ Topic_files/icon6.jpg" alt="" />
                  </div>
                </div>
                <div className="posttext pull-left">
                  <blockquote>
                    <span className="original">
                      Original Posted by - theguy_21:
                    </span>
                    Did you see that Dove ad pop up in your Facebook feed this
                    year? How about the Geico camel one?
                  </blockquote>
                  <p>
                    Toronto Mayor Rob Ford does not have a bigger fan than
                    "Anchorman's" Ron Burgundy. In fact, Burgundy wants Ford to
                    be re-elected so much, that he agreed to sing the campaign
                    song Brien. The tune in question ...
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="postinfobot">
                <div className="likeblock pull-left">
                  <a
                    href=""
                    className="up"
                  >
                    <i className="fa fa-thumbs-o-up"></i>55
                  </a>
                  <a
                    href=""
                    className="down"
                  >
                    <i className="fa fa-thumbs-o-down"></i>12
                  </a>
                </div>

                <div className="prev pull-left">
                  <a href="">
                    <i className="fa fa-reply"></i>
                  </a>
                </div>

                <div className="posted pull-left">
                  <i className="fa fa-clock-o"></i> Posted on : 20 Nov @ 9:50am
                </div>

                <div className="next pull-right">
                  <a href="">
                    <i className="fa fa-share"></i>
                  </a>

                  <a href="">
                    <i className="fa fa-flag"></i>
                  </a>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>

            <div className="post">
              <form
                action=""
                className="form"
                method="post"
              >
                <div className="topwrap">
                  <div className="userinfo pull-left">
                    <div className="avatar">
                      <img src="./Forum __ Topic_files/avatar4.jpg" alt="" />
                      <div className="status red">&nbsp;</div>
                    </div>

                    <div className="icons">
                      <img src={icon3} alt="" />
                      <img src={icon4} alt="" />
                      <img src={icon5} alt="" />
                      <img src={icon1} alt="" />
                    </div>
                  </div>
                  <div className="posttext pull-left">
                    <div className="textwraper">
                      <div className="postreply">Post a Reply</div>
                      <textarea
                        name="reply"
                        id="reply"
                        placeholder="Type your message here"
                      ></textarea>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="postinfobot">
                  <div className="notechbox pull-left">
                    <input
                      type="checkbox"
                      name="note"
                      id="note"
                      className="form-control"
                    />
                  </div>

                  <div className="pull-left">
                    <label for="note">
                      {" "}
                      Email me when some one post a reply
                    </label>
                  </div>

                  <div className="pull-right postreply">
                    <div className="pull-left smile">
                      <a href="">
                        <i className="fa fa-smile-o"></i>
                      </a>
                    </div>
                    <div className="pull-left">
                      <button type="submit" className="btn btn-primary">
                        Post Reply
                      </button>
                    </div>
                    <div className="clearfix"></div>
                  </div>

                  <div className="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PostDetails;
