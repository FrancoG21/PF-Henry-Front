import React, {useState, useEffect} from "react";
import axios from 'axios';
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 3 },
  { name: "Group B", value: 2 },
  { name: "Group C", value: 2 },
];


export default function Chart() {

    const [info, setInfo] = useState({});

    useEffect(() => {
        axios.get('/countP').then((r) => {setInfo(r.data)})
    }, [])

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}