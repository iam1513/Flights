const { response } = require("express");

const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

const { SuccessResponse, ErrorResponse } = require("../utils/common");
/**
 * POST : /airplanes
 * req-body: {modelNumber : 'airbus320' , capacity:200}
 */

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    // returning the airplane we created
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    // Changed after util , we had raw json here (REMEMBER)
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  // console.log("In the getAirplanes");
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  // console.log("In the getAirplanes");
  try {
    const airplanes = await AirplaneService.getAirplane(req.params.id); // To acces by specific id
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane
};
