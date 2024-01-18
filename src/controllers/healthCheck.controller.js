import { ApiResponse } from "../utils/Response/ApiResponse.js";
import { ApiError } from "../utils/Error/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
  console.log("Client ip: ", req.clientIp);
  return res
    .status(200)
    .json(new ApiResponse(200, "OK", "Health check passed"));
});

export { healthCheck };
