'use client'
import React, { useState, useEffect } from "react";
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
        borderColor: "#E91B41",
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 10,
      },
    ],
  };

  // Chart options with line shadow
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
    // Add a shadow to the line
    elements: {
      line: {
        borderWidth: 3, // Make the line thicker
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          // Customize tooltip content here if needed
        },
      },
    },
  };

  // Custom plugin to add shadow effect
  useEffect(() => {
    const chart = ChartJS.getChart('myChart');

    if (chart) {
      chart.options.plugins.beforeDraw = function (chart) {
        const ctx = chart.ctx;
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        ctx.restore();
      };
    }
  }, [timeRange, filterType]);

  return (
    <div className="">
      <h3 className="text-2xl font-bold mb-4">Dashboard Analytics</h3>

      <div className="border rounded-[20px] p-6">
        <div className="flex gap-4 mb-6">
          <div>
            <label className="mr-2">Filter by:</label>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-md ${filterType === "sales" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setFilterType("sales")}
              >
                Sales
              </button>
              <button
                className={`px-4 py-2 rounded-md ${filterType === "purchases" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setFilterType("purchases")}
              >
                Purchases
              </button>
            </div>
          </div>

          <div>
            <label className="mr-2">Show by:</label>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-md ${timeRange === "weekly" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => setTimeRange("weekly")}
              >
                Weekly
              </button>
              <button
                className={`px-4 py-2 rounded-md ${timeRange === "monthly" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => setTimeRange("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md ${timeRange === "yearly" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => setTimeRange("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div style={{ height: "400px" }}>
          <Line data={data} options={options} id="myChart" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
