import { useEffect, useState } from 'react';
import sanityClient from '../client';
import Stream from '../components/Stream';


const Home = () => { 
  const [pages, setPages] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "component_page"]`
    )
    .then((data) => setPages(data))
    .catch(console.error);
  }, []);
  
  return ( 
    <> 
      <Stream blocks={pages[0]?.pageBuilder || []} />
    </> 
  ); 
} 
export default Home;