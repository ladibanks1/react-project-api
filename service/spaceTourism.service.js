import models from "../model/spaceTourism.model.js";
import Err from "../utils/customError.js";
const crewModel = async () => {
  try {
    const crews = await models.crew.find();
    return crews;
  } catch (error) {
    throw new Err(error.message, 404);
  }
};
const destinationModel = async () => {
  try {
    const destinations = await models.destination.find();
    return destinations;
  } catch (error) {
    throw new Err(error.message, 404);
  }
};
const technologyModel = async () => {
  try {
    const technologies = await models.technology.find();
    return technologies;
  } catch (error) {
    throw new Err(error.message, 404);
  }
};

export default { crewModel , destinationModel , technologyModel };
