'use strict';

const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        preview: true,
      },
      {
        spotId: 1,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 1,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 1,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 1,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        preview: true,
      },
      {
        spotId: 2,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        preview: true,
      },
      {
        spotId: 3,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 3,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        preview: true,
      },
      {
        spotId: 4,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 4,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        preview: true,
      },
      {
        spotId: 5,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 5,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww",
        preview: true,
      },
      {
        spotId: 6,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 6,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww",
        preview: true,
      },
      {
        spotId: 7,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 7,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdXNlfGVufDB8fDB8fHww",
        preview: true,
      },
      {
        spotId: 8,
        url: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        preview: false,
      },
      {
        spotId: 8,
        url: "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        preview: false,
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
   options.tableName = 'SpotImages';
   const Op = Sequelize.Op;
    return await queryInterface.bulkDelete(options, {
      url: { [Op.in]: [
        "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJvb21zfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1675422214892-822d8e43b56e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJvb21zfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1675615949714-083a1a313224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXN8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdXNlfGVufDB8fDB8fHww",
    
    ] }
    }, {}) 
  }
};
