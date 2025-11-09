export default function SiteFooter() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
          <a href="/about" className="hover:text-indigo-600">About</a>
          <a href="/careers" className="hover:text-indigo-600">Careers</a>
          <a href="/legacy" className="hover:text-indigo-600">Legacy</a>
          <a href="/contact" className="hover:text-indigo-600">Contact</a>
          <a href="/privacy" className="hover:text-indigo-600">Privacy</a>
          <a href="/terms" className="hover:text-indigo-600">Terms</a>
        </nav>
        <p className="text-sm text-gray-600 text-center md:text-right">
          © 2025 Free Space Technologies — <span className="italic">We don’t own your ideas — we empower them.</span>
        </p>
      </div>
    </footer>
  )
}
