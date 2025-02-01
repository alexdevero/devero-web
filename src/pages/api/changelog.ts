import { NextApiRequest, NextApiResponse } from 'next'

import { ChangelogItem } from '@custom-types/changelog'
import { HttpCodes } from '@custom-types/http-codes'

const changelog: ChangelogItem[] = [
  {
    title: 'Changelog page',
    version: '1.0.1',
    changes: [
      {
        text: 'Added changelog page',
        id: 'c_101_1',
      },
      {
        text: 'Added first batch of changes',
        id: 'c_101_2',
      },
    ],
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return res.json({
    code: HttpCodes.OK,
    data: changelog,
  })
}
