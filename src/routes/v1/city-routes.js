const express = require("express");

const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

// api/v1/airplanes -> POST req
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

router.delete(
  "/:id",
  CityMiddlewares.validateCreateRequest,
  CityController.destroyCity
);

module.exports = router;
