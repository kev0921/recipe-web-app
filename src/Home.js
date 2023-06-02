import ProjectList from './ProjectList';

const Home = () => {
  const projects = [  
    { title: 'Personal Website', body: 'lorem ipsum...', creators: 'Kevin', id: 1 },
    { title: 'Spotify Song Recommendation App', body: 'lorem ipsum...', creators: 'Kevin', id: 2 },
    { title: 'Maze Robot', body: 'lorem ipsum...', creators: 'Kevin', id: 3 }
  ];

  return ( 
    <div className="home">
      <ProjectList projects={projects} title="My Projects"></ProjectList>
    </div> 
  );
}
 
export default Home;