const express = require("express");

const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

// api/v1/airplanes -> POST req
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

// Now it will first check for / and then check whether the request is valid or not anf
// depending upon response , will throw error or will execute airplaneController

router.get(
  "/",
  AirplaneController.getAirplanes // Get airplane , no need of middleware
);

// api/v1/airplanes/:id
router.get(
  "/:id",
  AirplaneController.getAirplane // Get airplane , no need of middleware
);

router.delete(
  "/:id",
  AirplaneController.destroyAirplane // Get airplane , no need of middleware
);

router.patch(
  "/:id",
  AirplaneController.updateAirplane // Get airplane , no need of middleware
);

module.exports = router;
