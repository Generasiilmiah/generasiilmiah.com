import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="backdrop mt-8">
      <div className="upper-footer px-6 py-10">
        <img src="/logo.svg" alt="Logo Generasi Ilmiah" className="h-12" />
        <h3 className="text-lg mt-6">
          generasi <span className="font-bold mb-3">ilmiah</span>
        </h3>
        <p className="text-sm">
          Jl. Wonosari Km.8, Sitimulyo, Piyungan, Bantul, Daerah Istimewa
          Yogyakarta, 55792
        </p>

        <div className="mt-6 mb-2">
          <h4 className="font-bold mb-3 text-lg">Navigasi</h4>
          <ul>
            <li>
              <Link href="/kelas">
                <a className="underline">Kelas Online</a>
              </Link>
            </li>
            <li>
              <Link href="/tentang-kami">
                <a className="underline">Tentang Kami</a>
              </Link>
            </li>
            <li>
              <Link href="/testimonial">
                <a className="underline">Testimonial</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="underline">Blog</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-6 mb-2">
          <h4 className="font-bold mb-3 text-lg">Hubungi Kami</h4>

          <div className="flex items-center mb-4">
            <div className="ring-2 ring-gray-600 h-8 w-8 rounded-lg p-1.5 mr-4">
              <img
                src="/assets/social/instagram.svg"
                alt="Logo Instagram"
                className="w-full"
              />
            </div>
            <p className="italic underline">generasi.ilmiah</p>
          </div>

          <div className="flex items-center mb-4">
            <div className="ring-2 ring-gray-600 h-8 w-8 rounded-lg p-1.5 mr-4">
              <img
                src="/assets/social/whatsapp.svg"
                alt="Logo Instagram"
                className="w-full"
              />
            </div>
            <p className="italic underline">+62 852 0048 3728</p>
          </div>

          <div className="flex items-center">
            <div className="ring-2 ring-gray-600 h-8 w-8 rounded-lg p-1.5 mr-4">
              <img
                src="/assets/social/email.svg"
                alt="Logo Instagram"
                className="w-full"
              />
            </div>
            <p className="italic underline">contact@generasiilmiah.com</p>
          </div>
        </div>
      </div>

      <div className="lower-footer h-16 flex flex-col items-center justify-center text-center">
        <h4>
          generasi <span className="font-bold">ilmiah</span>
        </h4>
        <small className="text-gray-600">copyright 2021</small>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
