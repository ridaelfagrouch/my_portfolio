import React from 'react'

const Education = () => {
  return (
    <section
      id="Education"
      className="relative w-full h-screen max-w-7xl flex flex-col justify-center items-center space-y-5 text-White max-xl:space-y-0 p-4 "
    >
      <div className="container2">
        <ul>
          <li>
            <h3 className="heading">software Engineer</h3>
            <p>
              Student in third year computer engineering, school 1337 (42
              Network) Khouribga-morocco{" "}
            </p>
            <a href="#">Read More {">"}</a>
            <span className="date">January 2021</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">Bachelor's degree</h3>
            <p>
              Bachelor's degree, physics-chemistry science, mechanical-energetic
              university of Sciences Rabat-morocco{" "}
            </p>
            <a href="#">Read More {">"}</a>
            <span className="date">2019-2020</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">Full Stack Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              excepturi accusamus minus totam{" "}
            </p>
            <a href="#">Read More {">"}</a>
            <span className="date">2017-2018</span>
            <span className="circle"></span>
          </li>
          <li>
            <h3 className="heading">Baccalaureate,</h3>
            <p>
              Baccalaureate in experimental science, with honors, lycee ibn al
              haytham tata-morocco{" "}
            </p>
            <a href="#">Read More {">"}</a>
            <span className="date">2014-2015</span>
            <span className="circle"></span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education