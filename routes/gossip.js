const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
require("../config/auth")(passport);
const router = express.Router();
const Gossip = require("../model/gossip");
const Comment = require("../model/comment");
// const request = require("superagent");
const helper = require('../helper/helper');
const jwt = require("jsonwebtoken");
multer  = require('multer'),
path   = require('path'),

upload = multer({ storage: helper.GossipStorage })


// Get by category
router.get("/post/category", (req, res) => {
  var category = new RegExp(req.query.category, "i");
  console.log("category: " + req.query.category);
  Gossip.find({ "category": category }, {}, (err, gossips) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!gossips) {
        res.json({ success: false, message: "no gossip" });
      } else {
        res.json({ success: true, gossips: gossips });
      }
    }
  });
});

// Get all gossips
router.get("/gossips", (req, res) => {
  Gossip.find((err, gossips) => {
    if (err) {
      return next(err);
    } else {
        if (!gossips) {
            res.json({ success: false, message: "no gossip" });
        } else {
         
            res.json({ success: true, gossips: gossips.reverse() });
        }
    }
  });
});

router.get("/check",(req, res) => {
  const token = helper.getToken(req.headers);      
  jwt.verify(token,process.env.SECRET,(err,user)=>{     
    console.log(user);
    if(user){     
      res.json({  expired : true });
    }else{    
      res.json({  expired : false });
    }
  })

})
router.get("/author",(req, res) => {
  const token = helper.getToken(req.headers);    
  jwt.verify(token,process.env.SECRET,(err,user)=>{ 
    console.log('user')
    console.log(user)
    Gossip.find({'author': user._id}, (err, gossips) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!gossips) {
            res.json({ success: false, message: "no gossip" });
        } else {
            res.json({ success: true, gossips: gossips });
          }
      }
    });
  })

})
// Create new gossip
// passport.authenticate("jwt", { session: false })
router.post("/gossip",(req, res) => {
    const token = helper.getToken(req.headers);
    console.log(req.headers);
    // if(token)
    if (true) {
      const newGossip = new Gossip({
        title: req.body.title,
        body: req.body.body,
        date: Date.now(),
        images: req.body.images,
        category: req.body.category,
        tags: req.body.tags,
        // author: req.user._id,      
        author: '5e70cf3554f5c3501c0c29eb',      
       
      });    
      newGossip.save(err => {
        if (err) {
          console.log(err)
          res.json({ success: false, message: "failed to create new gossip" });
        } else {
          res.json({ success: true, message: "New gossip created" });
        }
      });
    } else {
      res
        .status(403)
        .json({ success: true, message: "You dont have admin priviledges" });
    }
  }
);

// Get gossip by id
router.get("/gossip/:id", (req, res) => {
  var params = req.params.id;
  Gossip.findOne({ _id: params }, {}, (err, gossips) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
        if (!gossips) {
            res.json({ success: false, message: "no gossip" });
        } else {
            res.json({ success: true, gossips: gossips });
          }
      }    
  });
});

// Get user
router.get("/user",(req,res)=>{
    const token = helper.getToken(req.headers);       
    jwt.verify(token,process.env.SECRET,(err,user)=>{             
      Gossip.find({'author': user._id }, {}, (err, gossips) => {       
        if (err) {
          res.json({ success: false, message: err });
        } else {
            if (!gossips) {
                res.json({ success: false, message: "no gossip" });
            } else {
                res.json({ success: true, gossips: gossips });
            }          
        }
      });
    });   
  
});

// Update gossip
router.put("/gossip/:id", (req, res) => {
  const id = req.params.id;
  Gossip.findOne({ _id: id }, {}, (err, gossip) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!gossip) {
        res.json({ success: false, message: "gossip not found" });
      } else {
        gossip.title = req.body.title,
        gossip.body = req.body.body,
        gossip.date = req.body.date,
        gossip.images = req.body.images,
        gossip.views = req.body.views,
        gossip.category = req.body.category,
        gossip.tags = req.body.tags,        
        gossip.save(err => {
          if (err) {
            res.json({ success: false, message: err });
          } else {
            res.json({ success: true, message: "post updated" });
          }
        });
      }
    }
  });
});

router.put('/views/:id',(req,res) =>{
  const params = req.params.id;
  Gossip.
  findByIdAndUpdate({_id : params},{'$inc': {views : 1}}, 
  (err, gossip) =>{
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json({ success: true, message: "gossip views updated" });
    }
  })
})
router.put('/likes/:id',(req,res) =>{
  const params = req.params.id;
  Gossip.
  findOneAndUpdate({_id : params},{'$inc': {likes : 1}}, {new: true}, 
  (err, gossip) =>{
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json({ success: true, message: "gossip likes updated", gossip });
    }
  })
})
router.put('/dislikes/:id',(req,res) =>{
  const params = req.params.id;
  Gossip.
  findOneAndUpdate({_id : params},{'$inc': {dislikes : 1}},{new: true},
  (err, gossip) =>{
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json({ success: true, message: "gossip dislikes updated" });
    }
  })
})


// Delete Gossip
router.delete("/gossip/:id", (req, res) => {
  const params = req.params.id;
  Gossip.findByIdAndRemove({ _id: params }, {}, (err) => {
    if (err) {
      res.json({ success: false, message: "Invalid Id" });
    } else {
      res.json({ success: true, message: "gossip destroyed" });
    }
  });
  });

// upload gossip images to cloudinary
router.post('/upload', upload.array('uploads', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
  console.log(req.files);   
  if(req.files){
    const images = req.files.map(data => data.secure_url )
    console.log(images);
    res.json({ success: true, message: "uploaded sucessfully", images });
   
  }else{
    res.json({ success: false, message: "upload failed" });
  }
});

router.post('/comment', (req,res) =>{
  let id = mongoose.Types.ObjectId
  const newComment = new Comment({
    // _commentId: id, 
    user: req.body.user, 
    comment : req.body.comment,    
    gossipId: req.body.gossipId,   
   
  })
  // newComment.parent.push(id)
  if(req.body.ancestor){
    Comment.findOne({_id: req.body.ancestor}, (err,data) => {


    })
  }
  newComment.save(err => {
    if (err) {
      console.log(err)
      res.json({ success: false, message: "failed to create new comment" });
    } else {
      res.json({ success: true, message: "comment posted" });
    }
  });

})
router.post('/replies', (req,res) =>{
  let id = mongoose.Types.ObjectId
  const newComment = new Comment({   
    user: req.body.user,   
    comment : req.body.comment,   
    gossipId: req.body.gossipId
  })
  new
  Comment.findOne({_id: req.body.parentId}, (err,data ) => {
    console.log(data.parent)
    Comment.findByIdAndUpdate({_id: req.body.parentId}, {$push: {parent: {$each: [req.body.parentId, id]}}})
    
  })
  // console.log(parentComment.paths)
  // parentComment.parent.push(id)


})
router.get('/comments', (req,res) =>{
  Comment.find((err, comments) => {
    if (err) {
      return next(err);
    } else {
        if (!comments) {
            res.json({ success: false, message: "no gossip" });
        } else {
         
            res.json({ success: true, comments: comments.reverse() });
        }
    }
  });

})



module.exports = router;
