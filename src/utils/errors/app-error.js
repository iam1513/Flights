class AppError extends Error { // Error : built in class
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.explanation = message;
    }
}

module.exports = AppError;