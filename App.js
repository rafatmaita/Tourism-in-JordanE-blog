const express = require('express');
const db = require('./db');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const app = express();
var cors = require('cors');
app.use(cors());
const hostname = '127.0.0.1';
const port = 5000;
app.use(express.json()); //for add blog
//start config for session
app.use(session({
    secret: 'your-secret-key', // Secret key to sign the session ID cookie
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to true if using HTTPS
  }));
//end config for session

// Function to get all blogs
async function getAllBlogs(req, res) {
  try {
    const result = await db.query('SELECT username, blogs.id, blogs.title, blogs.image ,blogs.description FROM users INNER JOIN blogs ON users.id = blogs.author_id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
}

app.post('/addBlog', async (req, res) => {
    try {
      // Destructure data from request body
      const { title, image, description, author_id } = req.body;
  
      // SQL query to insert a new blog and return the blog_id
      const query = `
        INSERT INTO blogs (title, image, description, author_id)
        VALUES ($1, $2, $3, $4)
        RETURNING blogs.id; 
      `;
  
      // Values to be inserted, corresponding to placeholders ($1, $2, ...)
      const values = [title, image, description, author_id];
  
      // Execute the query using the database connection pool
      const result = await db.query(query, values);
  
      // Extract the newly inserted blog_id from the query result
      const newBlogId = result.rows[0].id;  // Access id directly without 'blogs.' prefix
  
      // Send a success response with the newly created blog_id
      res.status(201).json({ message: 'Blog added successfully', id: newBlogId });
    } catch (error) {
      // Handle errors, log them, and send an error response
      console.error('Error adding blog:', error);
      res.status(500).json({ error: 'Failed to add the blog' });
    }
  });
  

    app.get('/getblog/:id', async(req, res) => {
        try{
            const query = 'select * from blogs where blogs.id = $1';
            const blogId = req.params.id; // when use /:id should use req.params.id
            const result = await db.query(query, [blogId]); 
            res.json(result.rows);
        }catch (error){
            console.error('Failed to get one blog: ', error);
            res.status(500).json({ error: 'Failed to get one blog'});
        }
    })





    app.post('/Registration', async(req, res) => {
        const {username, email, password} = req.body;
        try{
            const query = `INSERT INTO users (username, email, password)
                                VALUES ($1, $2, $3)
                                RETURNING "id";`
            const values = [username, email, password];
            const result = await db.query(query, values);
            const newUserId = result.rows[0];
            // Send a success response with the newly created blog_id
            res.status(201).json({ message: 'User added successfully', id: newUserId });
        } catch (error){
            console.error('Failed to register : ', error);
            res.status(500).json({ error: 'Failed to register'});
        };
    });
    

app.post('/login', async(req, res) => {

const { email, password } = req.body;

try {
    // Validate the email and password inputs
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Check if the user exists in the database
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await db.query(query, values);

    //rows, which is expected to be an array-like structure 
    //.length is a property that returns the number of elements in an array or the number of properties in an object.
    //empty
    if (result.rows.length == 0) {
        console.log(result.rows.length);
      throw new Error('User does not exist');
      
    }
    else{
        const userEmail = result.rows[0].email;
        const userPassword = result.rows[0].password;
  
        if (userPassword != password) {
            console.log("false");
        throw new Error('Incorrect password');
        }
        else{
            
            req.session.userID = result.rows[0].id;
            console.log(req.session.userID)
            // res.redirect('../src/components/Home');
            res.end("login sucssful");
            
        }
    }
   
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

app.get('/logout', (req, res) => {
    if(isset(req.session.userID)){
        console.log("session destroyed")
    
    // Destroy the user's session
        req.session.destroy((err) => {
        if (err) {
          console.error('Error destroying session:', err);
          res.status(500).json({ error: 'Failed to logout' });
        } else {
          // Redirect the user to the home page or any other desired page after logout
          res.redirect('/');
        }
        });
         }
        else {
            console.log("no session to destroy");
            res.redirect('/');
            }
  });

  function isset(sessionVariable) {
    return sessionVariable !== undefined && sessionVariable !== null && sessionVariable !== false;
  }
// Assign routes to functions
app.get('/', getAllBlogs);


app.listen(5000, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});