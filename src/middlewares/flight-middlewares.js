const { StatusCodes } = require("http-status-codes");
const { compareTime } = require("../utils/helpers/datetime-helpers");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {


  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating Airplane ";

    ErrorResponse.error = new AppError(
      ["Model Number not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating Airport ";

    ErrorResponse.error = new AppError(
      ["Airport code not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating Airport ";

    ErrorResponse.error = new AppError(
      ["Airport cityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating Airport ";

    ErrorResponse.error = new AppError(
      ["Airport cityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating Airport ";

    ErrorResponse.error = new AppError(
      ["Airport cityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating Flights ";

    ErrorResponse.error = new AppError(
      ["Flights cityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  // HANDING ARRIVAL DEPARTURE TIME ISSUE
  if (!compareTime(req.body.arrivalTime, req.body.departureTime)) {
    ErrorResponse.message = "Something went wrong while creating Airplane ";

    ErrorResponse.error = new AppError(
      ["Departure time can not be after arrival time."],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating Flights ";

    ErrorResponse.error = new AppError(
      ["Flights cityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating Flights ";

    ErrorResponse.error = new AppError(
      ["Flights cityId not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next(); // Calling next middleware if modelNumber is true
}

module.exports = {
  validateCreateRequest,
};
