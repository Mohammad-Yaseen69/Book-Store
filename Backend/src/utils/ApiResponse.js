class ApiResponse {
    constructor(message, data, statusCode) {
        this.status = statusCode <= 200
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
    }
}

export { ApiResponse }