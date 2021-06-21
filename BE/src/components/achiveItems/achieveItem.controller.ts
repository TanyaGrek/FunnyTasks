import { Request, Response } from 'express';

export const getAchieveItem = (request: Request, response: Response) => {
  const body = {
    name: 'getAchieveItem'
  };

  const { id } = request.params;
  console.log(id);

  try {
    response.json(body);
  } catch (e: any) {
    console.log(e);
    response.json(e.detail);
  }
};
