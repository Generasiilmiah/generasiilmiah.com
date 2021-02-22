import React from "react";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="backdrop mt-8">
      <div className=" md:container md:mx-auto">
        <div className="upper-footer px-6 py-10">
          <div className="md:text-center">
            <img
              src="/logo.svg"
              alt="Logo Generasi Ilmiah"
              className="h-12 md:h-16 block md:mx-auto"
            />
            {/* <h3 className="text-lg mt-6">
              generasi <span className="font-bold mb-3">ilmiah</span>
            </h3> */}
            {/* <p className="text-sm">
              Jl. Wonosari Km.8, Sitimulyo, Piyungan, Bantul, Daerah Istimewa
              Yogyakarta, 55792
            </p> */}
          </div>

          <div className="mt-6 md:mt-8 mb-2 md:mb-4">
            <h4 className="font-bold mb-3 md:mb-0 text-lg md:text-center">
              Navigasi
            </h4>
            <ul className=" md:flex md:justify-center md:gap-8 md:justify-center">
              <li>
                <Link href="/kelas">
                  <a className="underline py-2 inline-block">Kelas Online</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <a className="underline py-2 inline-block">Tentang Kami</a>
                </Link>
              </li>
              <li>
                <Link href="/testimonial">
                  <a className="underline py-2 inline-block">Testimonial</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="underline py-2 inline-block">Blog</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 mb-2">
            <h4 className="font-bold mb-3 text-lg md:text-center">
              Hubungi Kami
            </h4>

            <div className="md:flex md:gap-14 md:justify-center md:items-center">
              <Link href="https://www.instagram.com/generasi.ilmiah/">
                <a rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="ring-2 ring-gray-600 h-8 w-8 rounded-lg p-1.5 mr-4 md:mr-0">
                      <img
                        src="/assets/social/instagram.svg"
                        alt="Logo Instagram"
                        className="w-full"
                      />
                    </div>
                    <p className="italic underline md:hidden">
                      generasi.ilmiah
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="https://api.whatsapp.com/send?phone=6281370369566&text=Halo%20Generasi%20Ilmiah!">
                <a rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="ring-2 ring-gray-600 h-8 w-8 rounded-lg p-1.5 mr-4 md:mr-0">
                      <img
                        src="/assets/social/whatsapp.svg"
                        alt="Logo Whatsapp"
                        className="w-full"
                      />
                    </div>
                    <p className="italic underline md:hidden">
                      +62 813 7036 9566
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="mailto:contact@generasiilmiah.com">
                <a rel="noopener noreferrer" target="_blank">
                  <div className="flex items-center">
                    <div className="ring-2 ring-gray-600 h-8 w-8 rounded-lg p-1.5 mr-4 md:mr-0">
                      <img
                        src="/assets/social/email.svg"
                        alt="Logo Email"
                        className="w-full"
                      />
                    </div>
                    <p className="italic underline md:hidden">
                      contact@generasiilmiah.com
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-footer h-16 flex flex-col items-center justify-center text-center">
        <div className="md:container md:mx-auto">
          <h4>
            generasi <span className="font-bold">ilmiah</span>
          </h4>
          <small className="text-gray-600">copyright 2021</small>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
