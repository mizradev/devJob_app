const mongoose = require('mongoose');

require('dotenv').config({path:'vars.env'});

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', err => {
    console.log('Error DB: ',err);
})

// import de modelos
require('../models/VacantesModel');