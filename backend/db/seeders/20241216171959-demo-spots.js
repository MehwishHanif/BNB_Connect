'use strict';

const { Spot } = require('../models');


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: "123 berlin Lane",
        city: "Berlin",
        state: "Brandenburg",
        country: "Germany",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Cozy Place",
        description: "Beautiful house, located in the center of Berlin.",
        price: 347,
      },
      {
        ownerId: 1,
        address: "123 rome Lane",
        city: "Rome",
        state: "Lazio",
        country: "Italy",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Tourist house",
        description: "Beautiful house, located in the center of Rome.",
        price: 400,
      },
      {
        ownerId: 1,
        address: "123 Disney Lane",
        city: "Lisbon",
        state: "Lisbon",
        country: "Portugal",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Beach House",
        description: "Beautiful house, located at the beach.",
        price: 345,
      },
      {
        ownerId: 1,
        address: "123 austin Lane",
        city: "Austin",
        state: "Texas",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Cozy Appartment",
        description: "Beautiful house, located at the center.",
        price: 230,
      },
      {
        ownerId: 2,
        address: "123 Marvel Lane",
        city: "Vienna",
        state: "Vienna",
        country: "Austria",
        lat: 38.7645358,
        lng: -142.4730327,
        name: "Cozy place",
        description: "Beautiful house, located at the center.",
        price: 250,
      },
      {
        ownerId: 2,
        address: "123 DC Lane",
        city: "Los Angeles",
        state: "California",
        country: "United States of America",
        lat: 79.7645358,
        lng: -100.4730327,
        name: "Gunnar's place",
        description: "Beautiful house, located at the center.",
        price: 270,
      },
      {
        ownerId: 2,
        address: "123 barcelona Lane",
        city: "Barcelona",
        state: "Barcelona",
        country: "Spain",
        lat: 79.7645358,
        lng: -100.4730327,
        name: "Cozy place",
        description: "Beautiful house, located at the center.",
        price: 350,
      },
      {
        ownerId: 2,
        address: "123 DC Lane",
        city: "Amsterdam",
        state: "North Holland",
        country: "Netherlands",
        lat: 79.7645358,
        lng: -100.4730327,
        name: "Cozy place",
        description: "Beautiful house, located at the center.",
        price: 220,
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1, 2, 3] }
    }, {}) 
  }
};
