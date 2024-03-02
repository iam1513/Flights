const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Airplane Object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
  throw new AppError(
    "Cannot create a new Airplane Object",
    StatusCodes.INTERNAL_SERVER_ERROR
  );
}

async function getAirplanes() {
  // To get all avai airplanes
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id); // To get a specific Airplane
    return airplane;
  } catch (error) {
    // To handle id not present delete req
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplaneRepository.destroy(id);
    return response;
  } catch (error) {
    // To handle id not present delete req
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// PATCH : BY OWN
async function updateAirplane(id,data){
  try {
    const response = await airplaneRepository.update(id,data)
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The Airplane you requested is not present",
        StatusCodes.NOT_FOUND
      );
    }
    throw new AppError(
      "Cannot fetch data of all the Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
};
