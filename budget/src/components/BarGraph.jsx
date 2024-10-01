import React,{useState} from "react";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Cell,
} from "recharts";

const BarGraph = ({data,colors}) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    // const data = [
    //     { name: "Geeksforgeeks", students: 400 },
    //     { name: "Technical scripter", students: 700 },
    //     { name: "Geek-i-knack", students: 200 },
    //     { name: "Geek-o-mania", students: 1000 },
    // ];
    // let i = 0;
    
    return (
        <BarChart width={600} height={600} data={data}>
            
            <Bar dataKey="expenseAmount" label={{ position: "top" }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${colors[index % colors.length]})`} />
                ))}
            </Bar>
            
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>
    );
}

export default BarGraph