"use strict";
const { Op } = require("sequelize"); // or and queries
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("airplanes", [
      {
        modelNumber: "Airbus330",
        capacity: 320,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Boeing777",
        capacity: 320,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("airplanes", {
      [Op.or]: [{ modelNumber: "Airbus320" }, { modelNumber: "ab1220" }],
    });
  },
};
