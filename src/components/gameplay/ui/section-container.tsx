import { forwardRef, type ReactNode } from "react"

interface SectionContainerProps {
  children: ReactNode
  id?: string
  className?: string
}

const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(({ children, id, className = "" }, ref) => {
  return (
    <section id={id} className={`py-20 ${className}`} ref={ref}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
})

SectionContainer.displayName = "SectionContainer"

export default SectionContainer

