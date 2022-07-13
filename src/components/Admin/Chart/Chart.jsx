import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, YAxis, XAxis } from "recharts";



export default function Chart() {

  const [pet, setPet] = useState({})
  console.log(pet)

  useEffect(() => {
    axios.get('/countP').then((r) => { setPet(r.data) })
  }, [])

  const data = [
    {
      "name": "Adoptar",
      "info": pet.get,
    },
    {
      "name": "Dar en adopcion",
      "info": pet.load,
    },
    {
      "name": "Extraviados",
      "info": pet.getLost,
    },
  ]

  return (
    <BarChart width={730} height={250} data={data}>
      <h1>Peticiones:</h1>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="info" fill="#3da9fc" />
    </BarChart>
  );
}

