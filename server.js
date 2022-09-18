require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require("cors");
const pool = require("./db"); //run queries on postgres

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production"){
  //serve static files from build directory
  app.use(express.static(path.join(__dirname, 'build')));

  //console.log(path.join(__dirname, 'build'));
};

// BACKEND ROUTES //
 // Create Publication
  app.post("/api-createpublication", async(req, res) => {

    try {
      const {article} = req.body;
      const newPublication = await pool.query("INSERT INTO publications (article) VALUES($1) RETURNING *", [article]);
      
      res.json(newPublication.rows[0]);
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  });


  // Get all Publications
  app.get("/api-getpublications", async(req, res) => {
    try{  
      const allPublications = await pool.query("SELECT * FROM publications");
      res.json(allPublications.rows);
    }catch (err) {
      console.error(err.message);
    }
  });


  // Get a Publication
  app.get("/api-getpublications/:id", async(req, res) => {
    try {
      const {id} = req.params;
      const publication = await pool.query("SELECT * FROM publications WHERE pub_id = $1", [id]);
      
      res.json(publication.rows[0]);

      console.log(req.params);
    } catch (err) {
      console.error(err.message);
    };
  });

  // Update a Publication
  app.put("/api-updatepublication/:id", async(req, res) => {
    try {
      const {id} = req.params;
      const {article} = req.body;
      const updatePublication = await pool.query("UPDATE publications SET article = $1 WHERE pub_id = $2", [article, id]);
    
      res.json("Publication Updated");
    } catch (err) {
      console.error(err.message);
    }
  });

  // Delete a Publication
  app.delete("/api-deletepublications/:id", async(req, res) => {
    try {
      const {id} = req.params;
      const deletePublication = await pool.query("DELETE FROM publications WHERE pub_id = $1", [id]);

      res.json("Publication deleted");
    } catch (err) {
      console.error(err.message);
    }
  });

  //authenticate user
  app.post("/api/v1/auth/google", async (req, res) => {
    try {
      const { name, email, picture, expiry, googleID } = req.body;
      //console.log(req.body);
      const user = await pool.query("INSERT INTO users(email, name, picture, expiry, googleID) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (email) DO UPDATE SET name=$2, picture=$3, expiry=$4, googleID=$5", [email, name, picture, expiry, googleID])
      console.log("Login Success" + name);    
      res.status(201)
      res.json(user)

      //if the user has admin rights then enable edit mode.

    } catch (err) {
      console.error(err.message);
    }    
  })

  // Get User Admin or Not
  app.get("/api/v1/auth/google/:id", async(req, res) => {
      try {
        const {id} = req.params;
        const adminCheck = await pool.query("SELECT * FROM users WHERE googleid = $1 and admin = 'y'", [id]);
        
        if (adminCheck.rowCount === 0) {
          console.log('Not an admin user');
          res.status(201)
        } else{
          res.status(201)
          res.json(adminCheck.rows[0]); 
        }
      } catch (err) {
        console.error(err.message);
      };
  });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
  
// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen((PORT), () => {console.log(`server has started on port ${PORT}`)});