
import { useEffect, useState } from 'react';
import sanityClient from '../client';
import GlobalImage from './GlobalImage'

const BlockWork = ( props ) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "project_page"] | order(order)`
    )
    .then((data) => setProjects(data))
    .catch(console.error);
  }, []);
  console.log(projects)
  return (
    <section className={props.className} id={props.id}>
      <div className="container text-center">
        <h2 className="h2">{props.block.title}</h2>
        <ul>
          {
            projects.map((project) => (
              <li key={project._id} className="relative">
                <div className="image-wrapper absolute-cover">
                  <GlobalImage image={project.thumbnail?.thumbnail_image.image.asset} className="background-cover z-1"/>
                  <GlobalImage image={project.thumbnail?.logo.image.asset} className="relative z-1"/>
                </div>

                <div className="copy z-2">
                  <div className="copy-inner text-white">
                    <p className="paragraph mb-20 text-white">{ project.thumbnail?.copy }</p>

                    <div className="actions">
                        <svg
                          className="arrow"
                          aria-hidden="true"
                          focusable="false"
                          width="25"
                          height="13"
                          viewBox="0 0 25 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#ffffff"
                            d="M24.5303 7.03033C24.8232 6.73744 24.8232 6.26256 24.5303 5.96967L19.7574 1.1967C19.4645 0.903806 18.9896 0.903806 18.6967 1.1967C18.4038 1.48959 18.4038 1.96447 18.6967 2.25736L22.9393 6.5L18.6967 10.7426C18.4038 11.0355 18.4038 11.5104 18.6967 11.8033C18.9896 12.0962 19.4645 12.0962 19.7574 11.8033L24.5303 7.03033ZM0 7.25H24V5.75H0V7.25Z"
                          />
                        </svg>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
  </section>
  );
};

export default BlockWork;