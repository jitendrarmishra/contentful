
import React, { useEffect, useState } from 'react';
import client from '../contentfulClient';
import { Card, Col, Row } from 'react-bootstrap';

const ContentList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await client.getEntries();
//         setData(response.items);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;
const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      excerpt: "An overview of React Hooks and how they simplify state management...",
      date: "October 1, 2023",
    },
    {
      id: 2,
      title: "Getting Started with Bootstrap",
      excerpt: "Bootstrap is a powerful CSS framework that helps in designing responsive web pages...",
      date: "September 15, 2023",
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      excerpt: "A look into the new features introduced in ES6 that improve JavaScript programming...",
      date: "August 30, 2023",
    },
    // Add more blog posts as needed
  ];
  return (
    // <div>
    //   {data.map((item) => (
    //     <div key={item.sys.id}>
    //       <h2>{item.fields.title}</h2>
    //       <p>{item.fields.description}</p>
    //     </div>
    //   ))}
    // </div>
    <div className="container mt-4">
     <h1>Blog Listing</h1>
    <Row>
      {blogPosts.map((post) => (
        <Col md={4} key={post.id} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.excerpt}</Card.Text>
              <Card.Footer>
                <small className="text-muted">{post.date}</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default ContentList;