import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.json({
    text: 'Test route',
    code: 200,
    time: new Date(),
  })
}
