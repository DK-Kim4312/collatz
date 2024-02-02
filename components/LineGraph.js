import React, { useEffect, useRef, useState } from 'react';

function LineGraph({ data }) {
    const canvasRef = useRef(null);
    const [graphData, setGraphData] = useState(data);

    useEffect(() => {
        setGraphData(data);
    }, [data]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear the previous graph
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Define graph properties
        const graphWidth = canvas.width - 20;
        const graphHeight = canvas.height - 20;
        const maxValue = Math.max(...graphData);
        const scale = graphHeight / maxValue;

        // Draw the axes
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(10, graphHeight);
        ctx.lineTo(graphWidth, graphHeight);
        ctx.stroke();

        // Plot the data points
        ctx.beginPath();
        ctx.moveTo(10, graphHeight - graphData[0] * scale);

        for (let i = 1; i < graphData.length; i++) {
            const x = 10 + (graphWidth / (graphData.length - 1)) * i;
            const y = graphHeight - graphData[i] * scale;
            ctx.lineTo(x, y);
        }

        ctx.strokeStyle = 'black'; // Line color
        ctx.lineWidth = 2; // Line width
        ctx.stroke();
    }, [graphData]);

    return (
        <div className='flex flex-col'>
            <canvas ref={canvasRef} width={300} height={200}></canvas>
        </div>
    );
}

export default LineGraph;
