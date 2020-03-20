import React, { useState } from "react";
import Sidebar from "./sidebar";
import BreadCrumb from "./breadcrumb";
import { Formik } from 'formik';
import * as Yup from "yup";
import Select from './formInputs/select';
import RichEditor from './formInputs/RichEditor';
import TextInput from './formInputs/TextInput';
import avater from "../images/avatar.jpg";
import icon1 from "../images/icon1.jpg";
import icon3 from "../images/icon3.jpg";
import icon4 from "../images/icon4.jpg";
import icon5 from "../images/icon5.jpg";
import { EditorState } from 'draft-js';
import Axios from "axios";
import { useHistory } from "react-router-dom";
const options = [
  { value: 'Politics', label: 'Politics' },
  { value: 'Business', label: 'Business' },
  { value: 'Sport', label: 'Sport' },
  { value: 'Sport', label: 'Sport' },
  { value: 'Health', label: 'Health' },
  { value: 'Education', label: 'Education' },
  { value: 'Tech', label: 'Tech' }
];

// let schema = yup.object().shape({
//   title: yup.string().required(),
//   body: yup.string().required(),
//   category: yup.object().shape({
//     category: yup.string().required('Category is required')
//   }),   
// });
const CreateGossip = () => {
  const history = useHistory();
  const [file, setFile]  = useState({})
  const formikEnhancer = Formik({
    validationSchema: Yup.object().shape({
      title: Yup.string()      
        .max(60, 'Too long')
        .required('A title is required'),
      category: Yup.array().min(3, 'Pick at least 3 tags').of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      ),
    }),
    mapPropsToValues: props => ({
      body: new EditorState.createEmpty(),
      title: '',
      category: [],
      price: [0],
      boost: false,
    }),
    handleSubmit: (values, { setSubmitting }) => {
      const payload = { ...values, category: values.category.map(t => t.value) };
      alert(payload.upload.files)
      // setTimeout(() => {
      //   alert(JSON.stringify(payload, null, 2));
      //   setSubmitting(false);
      // }, 1000);
    },
    displayName: 'MyForm',
  });
  const onFileChange = (e) => {
    setFile(e.target.files[0])
    
  }
  const handleSubmit = async (values, actions) => {    
    const formData = new FormData();
    formData.append('uploads',file)
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }
    const image = await  Axios.post('/api/upload', formData, config)
    let newGossip = {
      title: values.title,
      images: image.data.images,
      category: values.category,
      body: values.body
    }
    console.log(image.data.images)
    console.log(newGossip)
    const gossip = await Axios.post('/api/gossip', newGossip)
    console.log(gossip.data)
    // if(gossip){
    //   history.push("/");
    // }

  }
 
  return (
    <section className="content ">
      <div className="container mt-1">
        <BreadCrumb />
        <div className="row">
          <div className="col-lg-12 col-md-12">
         
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="post">
            <Formik
                 initialValues={{ title: "", body :"", upload: [], category: "", sendEmail: false }}               
               onSubmit={(values, actions) => {
                  handleSubmit(values,actions)
              }}
               
               >
                 {props => (
                  <form  className="form newtopic" encType="multipart/form-data" onSubmit={props.handleSubmit}>                     
                <div className="topwrap">
                  <div className="userinfo pull-left">
                    <div className="avatar">
                      <img src={avater} alt="" />
                      <div className="status red">&nbsp;</div>
                    </div>

                    <div className="icons">
                      <img src="images/icon3.jpg" alt="" />
                      <img src="images/icon4.jpg" alt="" />
                      <img src="images/icon5.jpg" alt="" />
                      <img src="images/icon6.jpg" alt="" />
                    </div>
                  </div>
                 
                  <div className="posttext pull-left">
                    <div>
                    <input
                      type="text"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.title}
                      name="title"
                      className="form-control"
                    />
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    </div>

                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <select
                          name="category"
                          id="category"
                          value={props.values.category}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          className="form-control"
                        >
                          <option value="" disabled="" defaultValue="">
                            Select Category
                          </option>
                          <option value="politics">Politics</option>
                          <option value="business">Business</option>
                          <option value="sport">Sport</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="health">Health</option>
                          <option value="education">Education</option>
                          <option value="tech">Tech</option>
                        </select>
                      </div>
                      <div className="col-lg-6 col-md-6">
                      <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                      <input id="upload" type="file" value={props.values.images} onChange={onFileChange}  className="form-control border-0" />
                     
                     
                      </div>
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="body"
                        id="body"
                        value={props.values.body}
                        onChange={props.handleChange}
                        placeholder="Content"
                        className="form-control"
                      ></textarea>
                    </div>
                   
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="postinfobot">
                  <div className="notechbox pull-left">
                    <input
                      type="checkbox"
                      value={props.values.sendEmail}
                    onChange={props.handleChange}
                      name="sendEmail"
                      id="note"
                      className="form-control"
                    />
                  </div>
                  <div className="pull-left">
                    <label htmlFor="note">
                      {" "}
                      Email me when some one post a reply
                    </label>
                  </div>

                  <div className="pull-right postreply">
                    <div className="pull-left">
                      <button type="submit" className="btn btn-primary">
                        Post
                      </button>
                    </div>
                    <div className="clearfix"></div>
                  </div>

                  <div className="clearfix"></div>
                </div>
                </form>
                )}
              </Formik>
            
           
            </div>
          </div>
          

          <Sidebar />
        </div>
      </div>
    </section>
  );
};
export default CreateGossip;
