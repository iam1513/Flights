const CrudRepository = require("./crud-repository");

const { Flight } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight); // Calling constructor of parent class
  }
}

module.exports = FlightRepository;
