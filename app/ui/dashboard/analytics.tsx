'use client'
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Dummy data
const dummyData = {
  weekly: {
    sales: [50, 80, 30, 120, 70, 40, 110],
    purchases: [40, 90, 60, 130, 50, 100, 60],
  },
  monthly: {
    sales: [500, 450, 800, 750, 400, 950, 700],
    purchases: [600, 650, 500, 400, 850, 700, 800],
  },
  yearly: {
    sales: [7000, 5500, 6000, 8500, 7500, 9500, 8000],
    purchases: [5000, 7000, 6500, 9000, 8000, 6000, 7500],
  },
};

const Analytics = () => {
  const [filterType, setFilterType] = useState("sales");
  const [timeRange, setTimeRange] = useState("weekly");

  const labels = {
    weekly: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    monthly: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
    yearly: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  };

  const data = {
    labels: labels[timeRange],
    datasets: [
      {
        label: filterType === "sales" ? "Sales" : "Purchases",
        data: dummyData[timeRange][filterType],
        borderColor: filterType === "sales" ? "rgb(75, 192, 192)" : "rgb(255, 99, 132)",
        backgroundColor: filterType === "sales" ? "rgba(75, 192, 192, 0.2)" : "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 10,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.1)', // Fainter grid color
          borderDash: [5, 5],
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.1)', // Fainter grid color
          borderDash: [5, 5],
        },
      },
    },
    // Custom line drawing
    events: ['click'],
    onClick: (e: any, elements: any) => {
      if (elements.length > 0) {
        const ctx = e.chart.ctx;
        const xAxis = e.chart.scales.x;
        const point = elements[0].element;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x, xAxis.top);
        ctx.strokeStyle = 'red';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    },
  };

  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-4">Dashboard Analytics</h3>

      <div className="border p-6">
        <div className="flex gap-4 mb-6">
            <div>
            <label className="mr-2">Filter by:</label>
            <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border rounded-md p-2"
            >
                <option value="sales">Sales</option>
                <option value="purchases">Purchases</option>
            </select>
            </div>

            <div>
            <label className="mr-2">Show by:</label>
            <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border rounded-md p-2"
            >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
            </select>
            </div>
        </div>

        <div style={{ height: "400px" }}>
            <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
