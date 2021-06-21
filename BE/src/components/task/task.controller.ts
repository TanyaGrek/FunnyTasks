import { Request, Response } from 'express';

export const getTasks = (request: Request, response: Response) => {
  const body = {
    id: '1'
  };

  try {
    response.json(body);
  } catch (e: any) {
    console.log(e);
    response.json(e.detail);
  }
};
