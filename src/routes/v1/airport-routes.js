const express = require("express");

const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();

// api/v1/airplanes -> POST req
router.post(
  "/",
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

// Now it will first check for / and then check whether the request is valid or not anf
// depending upon response , will throw error or will execute airplaneController

router.get(
  "/",
  AirportController.getAirports // Get airplane , no need of middleware
);

// api/v1/airplanes/:id
router.get(
  "/:id",
  AirportController.getAirport // Get airplane , no need of middleware
);

router.delete(
  "/:id",
  AirportController.destroyAirport // Get airplane , no need of middleware
);

// PATCH : BY OWN
router.patch(
  "/:id",
  AirportController.updateAirport // Get airplane , no need of middleware
);

module.exports = router;
