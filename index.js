const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
const clientURL = process.env.orgin
const URL = process.env.DB
app.use(cors({ orgin: process.env.orgin }))
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(URL)
const PortalRoutes = require('./Routes/portalRoutes')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/', PortalRoutes)


app.listen(3001)    