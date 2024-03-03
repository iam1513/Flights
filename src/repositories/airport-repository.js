const CrudRepository = require("./crud-repository");

const { Airport } = require("../models");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport); // Calling constructor of parent class
  }
}

module.exports = AirportRepository;
