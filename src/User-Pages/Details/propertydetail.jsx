import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './propertydetail.css'

function Propertydetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:7000/posts/${id}`);
        const data = await response.json();
        setProperty(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }

    }
    fetchProperty();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <div className="section">
        <div className="properties">
        <img src={property.imageUrl} alt={property.title} />
        <h1>{property.title}</h1>
        <p>₦{property.price}</p>
        <p>{property.description}</p>
        <ul>
            <li>{property.bedrooms} Bedrooms</li>
            <li>{property.bathrooms} Bathrooms</li>
            <li>{property.size} sq ft</li>
        </ul>
        </div>
    </div>
  );
}



export default Propertydetail