const addUser = (req, res) => {
  
  console.log(req.body);
  try {
    res.status(200).send(req.body);
    
  } catch (err) {
    console.error("this is the error: ",err);
    res.status(500).send("Test err");
  }
  
  };
  
  module.exports = addUser;