require('dotenv').config();
const express = require('express');
const cors = require('cors');


const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const homeRoutes = require('./routes/homeRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const coffeeshopRoutes = require('./routes/coffeeshopRoutes');
const menuRoutes = require('./routes/menuRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const shopRoutes = require('./routes/shopRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'FoodieTrail backend running' });
});

// connect routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/coffeeshops', coffeeshopRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/contact', contactRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

