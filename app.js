let express = require('express');
let reviewRouter = require('./routes/review');

let app = express();
let port = process.env.PORT || 3000;

app.use(express.json());
app.use('/review', reviewRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})