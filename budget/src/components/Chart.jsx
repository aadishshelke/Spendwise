import React, { useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Chart = ({ data, colors }) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    // const [selectedAmount, setSelectedAmount] = useState(null);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(-1);
    };

    // const handleClick = (amount) => {
    //     setSelectedAmount(amount); // Set the selected amount on click
    // };

    return (
        <div>
            <h2>Real-Time Analytics</h2>
        <PieChart width={700} height={700} >
            <Pie
            className="pie-segment" 
                activeIndex={activeIndex}
                data={data}
                dataKey="budgetAmount"  // Use "amount" instead of "students"
                outerRadius={250}
                fill="green"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                style={{ cursor: 'pointer', outline: 'none' }}
            >
                {data.map((entry, index) => (
                    <Cell 
                        key={`cell-${index}`} 
                        fill={`hsl(${colors[index % colors.length]})`}
                        opacity={activeIndex === index ? 1 : 0.8}
                        // onClick={() => handleClick(entry.amount)} // Handle click event
                    />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
        {/* {selectedAmount !== null && (
                <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                    Selected Amount: {selectedAmount}
                </div>
            )} */}
        </div>
    );
};

export default Chart;
