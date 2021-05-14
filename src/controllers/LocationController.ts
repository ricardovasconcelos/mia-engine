import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Location } from "../models/Location";

class LocationController {
  async show(request: Request, response: Response) {
    const locationRepository = getRepository(Location);

    const all = await locationRepository.find();

    return response.json(all);
  }

  async store(request: Request, response: Response) {
    const locationRepository = getRepository(Location);

    const { latitude, longitude } = request.body;

    const location = locationRepository.create({ latitude, longitude });
    await locationRepository.save(location);

    return response.json(location);
  }
}

export default new LocationController();
