import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import client from '../contentfulClient';
const BlogList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  
  
    useEffect(() => {
     
      const fetchData = async () => {
        try {
          const response = await client.getEntries({
            content_type: 'blog', // Replace with your content type ID
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


    if (loading) {
        return <div>Loading...</div>;
      }
    

  return (
 
    <div className="container mt-4">
      <h1>Blog Listing</h1>

      <Row>
        {data.map((post) => (
            
          <Col md={4} key={post.sys.id} className="mb-4">
            {console.log(post)}
            <Card>
              <Card.Body>
                <Card.Title>{post.fields.title}</Card.Title>
                <Card.Text>{post.fields.shortDescription}</Card.Text>
                <Card.Footer>
                  <small className="text-muted">{post.fields.dateTime}</small>
                  {/* <Link to={`/blogDetails`}>sdsadsa</Link> */}
                  <Link to={`/blog/${post.sys.id}`}>Read More</Link>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogList;