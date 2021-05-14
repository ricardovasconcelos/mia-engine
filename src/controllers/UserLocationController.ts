import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Location } from "../models/Location";
import { UserDisease } from "../models/UserDisease";

class UserLocationController {
  async show(request: Request, response: Response) {
    const locationsInfected = getRepository(UserDisease);

    const all = await locationsInfected.find();

    return response.json(all);
  }

  async store(request: Request, response: Response) {
    const location = getRepository(Location);

    const { user_id, latitude, longitude } = request.body;

    const user = location.create({ user_id, latitude, longitude });
    await location.save(user);

    return response.json(user);
  }

  async infected(request: Request, response: Response) {
    const location = getRepository(Location);
    const userDisease = getRepository(UserDisease);

    const { user_id, disease_id } = request.body;
    const allUserLocations = await location.find({ where: { user_id } });
    console.log(allUserLocations);
    if (allUserLocations.length === 0) {
      return response.sendStatus(400);
    }

    await allUserLocations.forEach(
      async ({ user_id, latitude, longitude, created_at }) => {
        const infectedLocation = userDisease.create({
          disease_id,
          user_id,
          latitude,
          longitude,
          created_at,
        });
        await userDisease.save(infectedLocation);
      }
    );

    await location.delete({ user_id });

    const disease = await userDisease.find({ where: { user_id } });

    return response.json(disease);
  }
}

export default new UserLocationController();
