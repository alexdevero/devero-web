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

export async function GET() {
  return Response.json({
    code: HttpCodes.OK,
    data: changelog,
  })
}
