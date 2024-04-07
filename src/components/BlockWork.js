
import { useEffect, useState } from 'react';
import sanityClient from '../client';
import BlockWorkItem from './BlockWorkItem';

const BlockWork = ( props ) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "project_page"] | order(order) {
          _id,
          thumbnail,
          slug
      }`
    )
    .then((data) => setProjects(data))
    .catch(console.error);
  }, []);
  return (
    <section className={props.className} id={props.id} tabIndex={props.tabIndex}>
      <div className="container">
        <h2 className="h2">{props.block.title}</h2>
        <ul className="col col-2">
          {
            projects.map((project) => (
              <BlockWorkItem project={project} key={project.slug.current} />
            ))
          }
        </ul>
      </div>
  </section>
  );
};

export default BlockWork;