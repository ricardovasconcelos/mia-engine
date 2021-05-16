import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Disease } from "../models/Disease";

class DiseaseController {
  async store(request: Request, response: Response) {
    const repository = getRepository(Disease);

    const { name, email, password } = request.body;

    const diseaseExists = await repository.findOne({ where: { name } });

    if (diseaseExists) {
      return response.sendStatus(409);
    }

    const disease = repository.create({ name });
    await repository.save(disease);

    return response.json(disease);
  }
}

export default new DiseaseController();
