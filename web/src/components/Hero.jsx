import { Container } from '@/components/Container'
import { BackgroundImage } from '@/components/BackgroundImage' // Import the BackgroundImage component

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-0" /> {/* Use the BackgroundImage component */}
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Teacher', 'Zahid Islam'],
              ['Lessons Time', 'Every Saturday'],
              ['Theme', 'Building on BOS'],
              ['Location', 'Remote'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-display text-sm text-pink-500">{name}</dt> {/* Use font-display class for the title */}
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900"> {/* Use font-semibold class for the value */}
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
