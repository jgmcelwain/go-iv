import { NextApiRequest, NextApiResponse } from 'next';
import pkg from '../../package.json';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify({ version: pkg.version }));
}
