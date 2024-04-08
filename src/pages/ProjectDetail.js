import { useEffect, useState } from 'react';
import sanityClient from '../client';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { PortableText } from '@portabletext/react'
import DynamicComponent from "../components/DynamicComponent"


const StyledContent = styled.div`
  h1 {
    padding: 2rem 0 2rem 20px;
    margin-top: 40px;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
  }

  @media (min-width: 768px) {
    .content {
      display: flex;
      justify-content: space-between;
    }

    .media {
      width: 45%;
    }

    .paragraph {
      width: 50%;
    }
  }
`

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState({})

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "project_page" && slug.current == "${slug}"]`
    )
      .then((data) => setProject(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <StyledContent className="container">
      <h1 className="h2-large mb-40">{project.title}</h1>
      <div className="content">
        <section className="paragraph mb-40 mobile-only">
          <PortableText value={project.description} />
        </section>

        {project?.mediaBuilder?.length > 0 && (
          <section className="media">
            {project.mediaBuilder.map((block) => (
              <DynamicComponent
                is={`Partials${block._type}`}
                block={block}
                key={`flex-${block._key}`}
                className="flex-block"
              />
            ))}
          </section>
        )}

        <section className="paragraph mb-40 desktop-only">
          <PortableText value={project.description} />
        </section>
      </div>
    </StyledContent>
  );
}
export default ProjectDetail;