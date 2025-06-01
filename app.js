const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // wenn du JWTs/Cookies nutzt
}));

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/itinerary', itineraryRoutes);

app.use(errorHandler);
module.exports = app;
