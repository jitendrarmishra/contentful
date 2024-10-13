import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    client
      .getEntry(id)
      .then((entry) => {
        setBlog(entry);
        // console.log(blog)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog post:', error);
        setLoading(false);
      });
  }, [id]);

  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog post not found!</div>;
  }

  {console.log(blog)}
//   console.log(posts)
  return (
    <div>
      <h1>{blog.fields.title}</h1>
      {/* <p>{blog.fields.description}</p> */}
      <div>{documentToReactComponents(blog.fields.description)}</div>
    </div>
  );
};

export default BlogDetail;