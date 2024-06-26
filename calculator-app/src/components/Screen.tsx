import { Operator } from '../types'

type ScreenProps = {
  input: string
  savedInput: string
  operator: Operator | null
  error: string | null
}

export default function Screen({ input, savedInput, operator, error }: ScreenProps) {
  const minimumFractionDigits = Math.min(input.split('.')[1]?.length ?? 0)

  return (
    <section className="relative mt-8 rounded-[0.625rem] bg-screen-background text-right px-6 pt-7 pb-[1.375rem] md:px-8 md:pt-10 md:pb-9 md:min-h-32">
      <h2 className="sr-only">Result</h2>
      {operator && !error && (
        <div className="absolute right-6 top-2 text-sm md:top-3 md:right-8">
          {savedInput} {operator}
        </div>
      )}
      <p
        className="text-2xl leading-[2.375rem] md:text-3xl md:leading-[3.25rem] overflow-hidden flex justify-end screen"
        role="region"
        aria-live="polite"
        style={{ fontSize: input.length > 10 ? `calc(var(--default-size) / ${input.length})` : '' }}
      >
        {error ?? Number(input).toLocaleString('en-US', { minimumFractionDigits })}
      </p>
    </section>
  )
}