"use client";
import { Globe, Instagram, Facebook, Mail, Phone, ArrowUp } from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Header Utama */}
      <header className="bg-[#a71814] text-white w-full fixed top-0 left-0 z-50">
        <div className="w-full px-4 md:px-10">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="./assets/gislogo.png"
                alt="GIS Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
              <a href="#" className="hover:text-red-200 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                Information
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                Customer
              </a>
              <a href="#" className="hover:text-red-200 transition-colors">
                Contact Us
              </a>

              {/* Globe & Application */}
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Globe className="h-5 w-5" />
                <button className="border border-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-white hover:text-[#b71c1c] transition">
                  APPLICATION
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* SubHeader / Breadcrumb */}
      <section className="bg-[#1e232a] text-white border-t border-[#a71814] mt-[64px] md:mt-[72px]">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-16 px-4 md:px-10 py-3 md:py-0">
            {/* Title */}
            <h2 className="font-semibold mb-2 md:mb-0 text-sm md:text-base">
              Detail Certificate
            </h2>

            {/* Right Menu */}
            <nav className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Information
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Verification Certificate
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                LSPRO
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Section Detail */}
      <section className="bg-white pt-10 pb-10 md:pt-30 md:pb-30">
        <div className="max-w-5xl mx-auto text-black px-4 md:px-6">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold pb-3 md:pb-5">
              Verification Certificate
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Lembaga Sertifikasi Produk (LSPRO)
            </p>
          </div>

          {/* Table */}
          <div className="rounded-lg overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold w-40 p-2">Factory Name</td>
                  <td className="font-semibold p-2 w-2">:</td>
                  <td className="p-2">CV. NUGRAHA BETON INDONESIA</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Factory Address</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">
                    Jl. Raya Menganti Sidowungu No. 30, Desa/Kelurahan Sidowungu,  
                    Kec. Menganti, Kab. Gresik, Provinsi Jawa Timur
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Company Name</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">CV. NUGRAHA BETON INDONESIA</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Company Address</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">
                    Jl. Raya Menganti Sidowungu No. 30, Desa/Kelurahan Sidowungu,  
                    Kec. Menganti, Kab. Gresik, Provinsi Jawa Timur
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">PIC</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">ANDI NUGRAHA SAPUTRA</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">SNI Number</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">SNI 6880 : 2016</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Brand</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">Nugraha Beton</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Type</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">top buttom, uditch, paving</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Result Of Test</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">
                    Laporan Laboratorium Struktur Departemen Teknik sipil FTSPK-ITS,  
                    CV. Nugraha Beton Indonesia, 03 September 2024 ( Uji Tekan Beton Core Drill )
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Status</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">Valid</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Surveillance 1</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">12 September 2025</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Surveillance 2</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">12 September 2026</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Surveillance 3</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">12 September 2027</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Re-Certificate</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">12 September 2028</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Certificate Date</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">13 September 2024</td>
                </tr>
                <tr>
                  <td className="font-semibold p-2">Expired Date</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">12 September 2028</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Back Button */}
          <div className="mt-6">
            <button className="bg-[#a71814] text-white text-xs px-3 py-2 font-semibold flex items-center space-x-2 hover:bg-red-700 transition">
              <span>←</span>
              <span>BACK</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section Strategy */}
      <section
        className="relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('./assets/bggisc2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-30 flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <h2 className="text-xl md:text-3xl font-semibold text-white text-center md:text-left max-w-2xl">
            Gearing your company through an <br /> innovative strategy
          </h2>

          {/* Button */}
          <a
            href="#contact"
            className="mt-6 md:mt-0 bg-[#b71c1c] hover:bg-red-700 text-white px-6 md:px-8 py-3 rounded transition"
          >
            CONTACT US
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e232a] text-gray-300">
        {/* Bagian Utama */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-25 pt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Kontak */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="./assets/gislogo.png"
                alt="GIS Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mb-2 text-sm">
              For further information please contact:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-pink-500" />
                <span>@ptglobalinspeksisertifikasi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Facebook className="h-4 w-4 text-blue-500" />
                <span>Global Inspeksi Sertifikasi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span>(+62) 852-8184-4641</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500" />
                <span>Send Mail</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-bold">ISO</li>
              <li>ISO 9001</li>
              <li>ISO 45001</li>
              <li>ISO 37001</li>
              <li className="font-bold mt-3">SNI</li>
              <li>Product</li>
              <li>Process</li>
              <li>Public Market</li>
              <li>Rehabilitation Services</li>
              <li className="font-bold mt-3">Tourism</li>
              <li>Tourism business</li>
              <li>CHSE</li>
              <li>Star Certification</li>
            </ul>
          </div>

          {/* Google Maps + Other Services */}
          <div>
            <h3 className="font-semibold text-white mb-3">Google Maps</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.13208166398!2d106.63971!3d-6.292223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb5ac8ae468f%3A0xf65bbc9dde2b1a5d!2sPT.%20Global%20Inspeksi%20Sertifikasi!5e0!3m2!1sen!2sid!4v1757347756397!5m2!1sen!2sid"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="block text-sm mt-1 hover:text-white"
            >
              Open Google Map
            </a>

            <h3 className="font-semibold text-white mt-4 mb-2">
              Other Services
            </h3>
            <ul className="space-y-1 text-sm">
              <li>ISPO</li>
              <li>Laboratory Test</li>
              <li>Inspection</li>
            </ul>
          </div>
        </div>

        {/* Copyright + Back to top */}
        <div className="border-t border-gray-700 py-6 md:py-10 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-center text-xs md:text-sm text-center">
            © 2023. PT Global Inspeksi Sertifikasi. All Rights Reserved
          </div>

          {/* Tombol ke atas */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute left-4 bottom-4 md:left-6 bg-gray-800 hover:bg-gray-600 p-2 rounded-full shadow"
          >
            <ArrowUp className="h-4 w-4 md:h-5 md:w-5 text-white" />
          </button>

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/6285281844641"
            target="_blank"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white px-4 py-2 md:px-5 md:py-3 rounded-full flex items-center space-x-2 hover:bg-green-600 shadow-lg text-xs md:text-sm"
          >
            <span>💬</span>
            <span>Chat With Us</span>
          </a>
        </div>
      </footer>
    </>
  );
}
