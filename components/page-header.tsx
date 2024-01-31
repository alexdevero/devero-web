import { memo } from 'react'

interface PageHeaderUI {
  title: string
}

export const PageHeader = memo((props: PageHeaderUI) => (
  <div className="pt-4 pb-4 text-center">
    <h1 className="h4">{props.title}</h1>

    <hr className="divider" />
  </div>
))
