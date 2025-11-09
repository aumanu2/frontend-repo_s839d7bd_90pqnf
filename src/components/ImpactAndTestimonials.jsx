import { useEffect, useState } from 'react'

export default function ImpactAndTestimonials() {
  // Simple live counters for demo; these can be wired to backend later
  const [projects, setProjects] = useState(1280)
  const [certs, setCerts] = useState(342)
  const [sponsors, setSponsors] = useState(57)
  const [colleges, setColleges] = useState(23)

  useEffect(() => {
    const id = setInterval(() => {
      setProjects((n) => n + Math.floor(Math.random() * 3))
      setCerts((n) => n + Math.floor(Math.random() * 2))
      setSponsors((n) => n + (Math.random() > 0.7 ? 1 : 0))
      setColleges((n) => n + (Math.random() > 0.85 ? 1 : 0))
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter label="Projects Created" value={projects} />
          <Counter label="Certificates Issued" value={certs} />
          <Counter label="Sponsors Connected" value={sponsors} />
          <Counter label="Colleges Onboarded" value={colleges} />
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="flex gap-6 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
            <Testimonial text="My class project became a certified internship!" author="Suhana, Student" />
            <Testimonial text="My prototype reached sponsors through this portal." author="Arjun, Innovator" />
            <Testimonial text="We funded our first campus innovation last month." author="Aisha, Sponsor" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

function Counter({ label, value }) {
  return (
    <div className="p-6 rounded-xl border bg-white text-center shadow-sm">
      <div className="text-3xl md:text-4xl font-extrabold text-gray-900">{value.toLocaleString()}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}

function Testimonial({ text, author }) {
  return (
    <blockquote className="px-5 py-4 rounded-lg bg-white border shadow-sm text-gray-800">
      <p className="italic">“{text}”</p>
      <footer className="mt-2 text-sm text-gray-600">— {author}</footer>
    </blockquote>
  )
}
