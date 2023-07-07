const supabase = require("src/database/supabase.js");

const getUser = async (req, res) => {
  
    console.log(req.body);
    try {
    const data = await supabase
    .from('Excel Database')
    .select('Name')


      res.status(200).send(data);
      
    } catch (err) {
      console.error("this is the error: ",err);
      res.status(500).send("Test err");
    }
    
    };
    
    module.exports = getUser;