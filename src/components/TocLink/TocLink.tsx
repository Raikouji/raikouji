import { cn } from '@/utils'

function TocLink(data: { id: string; title?: string }[]) {
  return (
    <ul
      className={cn(
        'mt-8 flex flex-wrap justify-center text-sm leading-7',
        '[&>li>a]:text-foreground/70',
        '[&>li:after]:text-foreground/30',
        '[&>li:not(:last-child):after]:mx-3 [&>li:not(:last-child):after]:content-["|"] ',
      )}
    >
      {data.map(({ id, title }) => {
        return (
          <li key={id}>
            <a className='hover:text-primary-400' href={`#${id}`}>
              {title ? title : id}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default TocLink
