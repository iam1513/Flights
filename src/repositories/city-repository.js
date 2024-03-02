const CrudRepository = require("./crud-repository");

const { City } = require("../models");

class CityRepository extends CrudRepository {
  constructor() {
    super(City); // Calling constructor of parent class
  }
}

module.exports = CityRepository;
