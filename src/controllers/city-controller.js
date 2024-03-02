const { response } = require("express");

const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");

const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * POST : /cities
 * req-body: {name : "New York"}
 */

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    // returning the airplane we created
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    // Changed after util , we had raw json here (REMEMBER)
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyCity(req, res) {
  try {
    const city = await CityService.destroyCity(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  destroyCity,
};
