import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CarruselSeguimiento() {
  const [seguimiento, setSeguimiento] = useState([]);

  const callBackIn = async () => {
    try {
      const { data } = await axios.get("/tracking");
      setSeguimiento(data);      
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
      callBackIn()
  }, []);

  return (
      <div>
          <h1>Seguimiento</h1>
          {seguimiento.length ? seguimiento.map((s,i)=>{return(
              <div key={'b'+i}>
                  <p>{s.description}</p>
                  {s.image.length ? s.image.map(e => <img key={'a'+e}src={e} alt={e}  height='200px' width='200px'/>) : null}
              </div>
          )}) : <h1>Loading ...</h1>}
      </div>
  );
}
