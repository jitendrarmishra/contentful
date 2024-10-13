import React, { useEffect, useState } from 'react';
import client from '../contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Aboutus = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'aboutUs', // Replace with your content type ID
        });
        setData(response.items);
      
       
      } catch (error) {
        setError(error);
        console.error('Error fetching data from Contentful:', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
  
    <div className="container mt-4">
  
        {data.map((post) => (
          <>
          {console.log(post)}
      <h1>{post.fields.title}</h1>
      <div>{documentToReactComponents(post.fields.description)}</div>
      </>
        ))}
    </div>
  )
}

export default Aboutus