const express = require('express');
const route = express.Router();

const services = require('../services/render');

/**
 * @description Roote Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description add Users
 * @method GET/add-user
 */
route.get('/add-user', services.add_user);

/**
 * @description update Users
 * @method GET/update-user
 */
route.get('/update-user', services.update_user);


module.exports = route;