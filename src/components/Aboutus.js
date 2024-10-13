import React, { useEffect, useState } from 'react';
import client from '../contentfulClient';
const Aboutus = () => {

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


  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <p>
      At My Blog, we are pioneers in artificial intelligence, dedicated to transforming the way businesses and individuals interact with technology. Founded in [Year], our mission is to harness the power of AI to drive innovation, enhance efficiency, and deliver intelligent solutions that empower our clients.
      </p>
      <p><strong>Our Vision</strong></p>
      <p>
      We envision a future where AI seamlessly integrates into everyday life, simplifying processes and unlocking new possibilities. Our commitment to ethical AI ensures that our technology is not only advanced but also responsible and aligned with the values of society.
      </p>
      <p><strong>Our Team</strong></p>
      <p>
      Our diverse team of experts—comprised of data scientists, engineers, and industry specialists—brings together a wealth of knowledge and experience. We collaborate closely with our clients to understand their unique challenges and tailor solutions that meet their needs.
      </p>
      <p><strong>What We Offer</strong></p>
      <p>We specialize in a range of AI solutions, including:</p>
      <p>
        <ul>
            <li>Machine Learning: Developing predictive models that drive smarter decision-making.</li>
            <li>Natural Language Processing: Creating intuitive communication tools that enhance user interactions..</li>
            <li>Computer Vision: Enabling machines to interpret and respond to visual data..</li>
            <li>Robotics Automation: Streamlining operations through intelligent automation..</li>
        </ul>
      </p>
      <p><strong>Why Choose Us?</strong></p>
      <p>
      With a focus on innovation, reliability, and customer satisfaction, we strive to exceed expectations. Our agile approach ensures that we remain at the forefront of AI advancements, continually adapting to the evolving landscape.
      </p>
    </div>
  )
}

export default Aboutus