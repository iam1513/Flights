const CrudRepository = require("./crud-repository");

const { Airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane); // Calling constructor of parent class
  }
}

module.exports = AirplaneRepository;
