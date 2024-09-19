import spaceTourism from "../service/spaceTourism.service.js";
import Err from "../utils/customError.js";

const crew = async (req, res, next) => {
  try {
    const crews = await spaceTourism.crewModel();
    res.status(200).json(crews);
  } catch (error) {
    const err = new Err(error.message , error.status || 500);
    next(err);
  }
};
const destination = async (req, res, next) => {
  try {
    const destinations = await spaceTourism.destinationModel();
    res.status(200).json(destinations);
  } catch (error) {
    const err = new Err(error.message , error.status || 500);
    next(err);
  }
};
const technology = async (req, res, next) => {
  try {
    const technologies = await spaceTourism.technologyModel();
    res.status(200).json(technologies);
  } catch (error) {
    const err = new Err(error.message , error.status || 500);
    next(err);
  }
};

export default { crew , destination , technology };
