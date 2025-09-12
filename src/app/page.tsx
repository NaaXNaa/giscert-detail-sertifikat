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
            <table className="w-235 text-xs md:text-sm border-collapse">
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
                  <td className="p-2">Mohammad Andi Nugraha Saputra</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">SNI Number</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">SNI 6880 : 2016</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Brand</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">NBI</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Type</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">Uditch, Box Culvert, TOP Bottom, RCBC, L-Gutter, LPC, paving block</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold p-2">Result Of Test</td>
                  <td className="font-semibold p-2">:</td>
                  <td className="p-2">
                    Laporan Laboratorium Struktur Departemen Teknik sipil FTSPK-ITS, CV. Nugraha Beton Indonesia, 03 September 2024 (Uji Tekan Beton Core Drill )
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
    </>
  );
}
