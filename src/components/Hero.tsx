import React from 'react'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

export default function Hero() {
  const heading = 'Shaping tomorrow\nwith vision and action.'

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/blue_moon.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <header className="relative z-10 px-6 md:px-12 lg:px-16 pt-6">
        <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">VEX</div>
          <nav className="hidden md:flex gap-8 text-sm text-gray-200">
            <a className="hover:text-gray-300" href="#">Story</a>
            <a className="hover:text-gray-300" href="#">Investing</a>
            <a className="hover:text-gray-300" href="#">Building</a>
            <a className="hover:text-gray-300" href="#">Advisory</a>
          </nav>
          <div>
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">Start a Chat</button>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-6 md:px-12 lg:px-16 flex flex-col min-h-[calc(100vh-4rem)]">
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div>
              <AnimatedHeading text={heading} />
              <FadeIn delay={800} duration={1000} className="text-base md:text-lg text-gray-300 mb-5">
                We back visionaries and craft ventures that define what comes next.
              </FadeIn>

              <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-medium">Start a Chat</button>
                <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition">Explore Now</button>
              </FadeIn>
            </div>

            <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <div className="text-lg md:text-xl lg:text-2xl font-light">Investing. Building. Advisory.</div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
