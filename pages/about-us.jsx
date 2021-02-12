import React from "react";
import SubpageHeader from "../components/SubpageHeader";

function AboutPage(props) {
  return (
    <>
      <SubpageHeader bgImg="/img.jpg" />

      <article className="about-us backdrop px-6 py-10 mt-12 mb-20">
        <div className="md:flex">
          <h4>Sejarah</h4>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              interdum tincidunt nisl, id convallis velit tristique hendrerit.
              Duis maximus ultrices neque, ut venenatis purus porttitor eu.
              Phasellus ullamcorper dignissim elit eu elementum. In quis nisl eu
              lacus dapibus varius eget non quam. Integer hendrerit dapibus
              gravida. Ut id dictum mauris, quis dapibus orci. Sed felis ante.
            </p>
            <p>
              Quisque malesuada erat id finibus facilisis. Duis finibus elit sed
              tincidunt volutpat. Aenean faucibus est quis iaculis efficitur.
              Cras libero nisl, placerat ac vehicula id, porta interdum libero.
              Donec vitae tincidunt augue. Donec sed nisi eu nulla eleifend
              porta. In sagittis sodales magna sit amet sagittis. Mauris
              elementum et lorem eget laoreet. Etiam lorem urna.
            </p>
          </div>
        </div>

        <div className="md:flex mt-8">
          <h4>Motto</h4>
          <div>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”</p>
          </div>
        </div>

        <div className="md:flex mt-8">
          <h4>Visi Misi</h4>
          <div>
            <h5 className="font-bold">Visi:</h5>
            <ol>
              <li>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ol>

            <h5 className="font-bold">Misi:</h5>
            <ol>
              <li>
                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>
                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ol>
          </div>
        </div>
      </article>
    </>
  );
}

export default AboutPage;
