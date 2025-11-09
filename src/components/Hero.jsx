import { useEffect, useMemo, useState } from 'react'
import Spline from '@splinetool/react-spline'

const captions = [
  'Students building future-ready skills.',
  'Innovators shaping tomorrow’s solutions.',
  'Sponsors empowering bright minds.',
  'Colleges preserving a legacy of innovation.',
]

export default function Hero({ onScrollToHow }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % captions.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const currentCaption = useMemo(() => captions[index], [index])

  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end md:justify-center">
        <div className="max-w-3xl mb-6 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Why don’t we create internships on our own ideas?
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg max-w-2xl">
            A live platform where students, innovators, sponsors, and colleges collaborate to turn imagination into verified experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => (window.location.href = '/auth')}
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-2.5 font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Get Started
            </button>
            <button
              onClick={onScrollToHow}
              className="inline-flex items-center justify-center rounded-md bg-white/90 text-gray-900 px-5 py-2.5 font-semibold border border-gray-200 shadow-sm hover:bg-white"
            >
              Explore How It Works
            </button>
          </div>
        </div>

        {/* Rotating carousel caption */}
        <div className="mb-8 md:mt-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow border border-gray-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-800 transition-all duration-500">
              {currentCaption}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
