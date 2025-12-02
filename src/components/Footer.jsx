import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Platter</h3>
            <p className="text-gray-400 text-sm">Digital solutions for businesses.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Links</h4>
            <Link href="/about" className="block text-gray-400 text-sm hover:text-white mb-1">About</Link>
            <Link href="/services" className="block text-gray-400 text-sm hover:text-white mb-1">Services</Link>
            <Link href="/contact" className="block text-gray-400 text-sm hover:text-white">Contact</Link>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p className="text-gray-400 text-sm">hello@platter.com</p>
            <p className="text-gray-400 text-sm">+1 234 567 890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2025 Platter
        </div>
      </div>
    </footer>
  );
}
