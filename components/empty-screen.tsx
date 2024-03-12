import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Search for documents and files',
    message: `Where can I find our Q4 KPI documents?`
  },
  {
    heading: 'Learn about the codebase',
    message: 'How do we handle asynchronous calls?'
  },
  {
    heading: 'User interview results',
    message: `What were the results of my user interview last week?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to TeamOS!</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          TeamOS is a search engine for your company's knowledge base. You can
          perform searches, ask questions, and get relevant answers instantly.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start with your own query or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
          <p className="leading-normal text-muted-foreground">
            If you encounter any issues, please do not hesitate to{' '}
            <ExternalLink href="mailto:ryanharaki1@gmail.com?subject=TeamOS%20Inquiry">
              contact support
            </ExternalLink>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
