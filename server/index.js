const express = require('express')
const app = express();
const port = 5000

app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, () => {
  console.log(`Server Starts at ${port}`)
})

// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 7000;

// app.use(morgan('dev'));
// app.use(cors());

// app.get('*', (req,res)=> {
//     res.sendFile(__dirname + '/public/index.html')
// });