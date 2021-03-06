var db = require("../models");
var fileUpload = require("express-fileupload")
module.exports = function(app) {
  app.use(fileUpload({limits: { fileSize: 50 * 1024 * 1024, abortOnLimit:true },}));
  
  app.post('/api/upload/band/:id', function(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let profileImg = req.files.profileImg;
    console.log("profileImg: " + profileImg.name);
  
    // Use the mv() method to place the file somewhere on your server
    profileImg.mv('/public/assets/images/users/' + profileImg.name, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
       
      console.log("req.parmas.id: " + req.params.id);
      console.log('File uploaded!');
    }).then( function(data){
      console.log("data: " + data);
        window.location.replace("/api/band/:" + data.id + "/:" + profileImg.name);
        });
  });
  


app.post('/api/upload/fan/:id', function(req, res) {
    if (!req.files)
      return res.status(400).send('No files were uploaded.');
   
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let profileImg = req.files.profileImg;
   
    // Use the mv() method to place the file somewhere on your server
    profileImg.mv('/public/assets/images/users/' + req.files.profileImg.name, function(err) {
      if (err)
        return res.status(500).send(err);
   
      console.log('File uploaded!');
    }).then(function (data){
        window.location.replace("/api/fan/:" + req.params.id + "/:" + req.files.profileImg.name);
        });
  });
}  