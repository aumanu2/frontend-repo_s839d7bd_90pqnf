export default function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How the Journey Flows</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-800">
          <li className="p-6 rounded-xl border bg-gray-50">
            <span className="block text-sm font-semibold text-indigo-600 mb-2">1️⃣</span>
            <p>Submit or join a project.</p>
          </li>
          <li className="p-6 rounded-xl border bg-gray-50">
            <span className="block text-sm font-semibold text-indigo-600 mb-2">2️⃣</span>
            <p>Protect your idea (IPR).</p>
          </li>
          <li className="p-6 rounded-xl border bg-gray-50">
            <span className="block text-sm font-semibold text-indigo-600 mb-2">3️⃣</span>
            <p>Build with mentors & teammates.</p>
          </li>
          <li className="p-6 rounded-xl border bg-gray-50">
            <span className="block text-sm font-semibold text-indigo-600 mb-2">4️⃣</span>
            <p>Earn certificates or attract sponsors.</p>
          </li>
        </ol>
        <div className="mt-8">
          <a
            href="/how-it-works"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-2.5 font-semibold shadow-sm hover:bg-indigo-700"
          >
            View Complete Workflow
          </a>
        </div>
      </div>
    </section>
  )
}
