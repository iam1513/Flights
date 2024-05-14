const { Sequelize } = require("sequelize");

const CrudRepository = require("./crud-repository");

const { Flight, Airplane, Airport, City } = require("../models");
const { response } = require("express");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight); // Calling constructor of parent class
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,

      include: [
        {
          model: Airplane, // Eager loading
          required: true,
          as: "airplaneDetail",
        },
        {
          model: Airport, // Eager loading
          required: true,
          as: "departureAirport",
          on: {
            // Used to do mapping on corresponding object , on what columns we have to make comparisons
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirportId"),
              "=",
              Sequelize.col("departureAirport.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
        {
          model: Airport, // Eager loading
          required: true,
          as: "arrivalAirport",
          on: {
            // Used to do mapping on corresponding object , on what columns we have to make comparisons
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirportId"),
              "=",
              Sequelize.col("arrivalAirport.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
      ],
    });
    return response;
  }
}

module.exports = FlightRepository;
