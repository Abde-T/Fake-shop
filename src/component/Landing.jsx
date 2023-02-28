import axios from "axios";
import React, { useEffect, useState } from "react";



function Landing(props) {
 const [collections, setCollections] = useState([]);

    async function getCollections() {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setCollections(data);
    }
    useEffect(() => {
      getCollections();
    }, []);

  return (
    <div className="wrapper">
      {collections.map((collection) => (
      <div className="row" key={collection.id}>
        <figure >
          <img src={collection.image} alt=""  />
        </figure>
      </div>
      ))}
    </div>
  );
}

export default Landing;
