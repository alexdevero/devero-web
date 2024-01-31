export type Change = {
  text: string
  id: string
}

export interface ChangelogItem {
  title: string
  version: string
  changes: Change[]
}

export interface ChangelogResponse {
  code: number
  data: ChangelogItem[] | []
}
