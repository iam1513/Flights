const { where } = require("sequelize");
const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require('http-status-codes')
// Read this all in seq dos

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    if(!response){
      throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
    }
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data); //Pk --> Primary Key
    if(!response){
      throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
    }
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async update(id, data) {
    // data --> {col, val} ---> data should be an object

    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }
}

module.exports = CrudRepository;
