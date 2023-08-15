import { useFetchProjects } from "./FetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();
  if (isLoading) {
    return (
      <section className="projects">
        <h1>Loading...</h1>
      </section>
    );
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, img, title, url } = project;
          return <a className="project" key={id} href={url} target="_blank" rel="noreferer">
            <img className="img" src={img} alt={title} />
            <h5><title></title></h5>
          </a>
        })}
      </div>
    </section>
  );
};
export default Projects;
