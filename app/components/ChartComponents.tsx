"use client";

import React from "react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Sample data for charts
const userGrowthData = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 300 },
    { month: "Mar", users: 600 },
    { month: "Apr", users: 800 },
    { month: "May", users: 700 },
    { month: "Jun", users: 900 },
];

const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 4500 },
    { month: "May", revenue: 6000 },
    { month: "Jun", revenue: 5500 },
];

const performanceData = [
    { name: "Page A", pv: 2400, amt: 2400 },
    { name: "Page B", pv: 1398, amt: 2210 },
    { name: "Page C", pv: 9800, amt: 2290 },
    { name: "Page D", pv: 3908, amt: 2000 },
    { name: "Page E", pv: 4800, amt: 2181 },
    { name: "Page F", pv: 3800, amt: 2500 },
];

export const UserGrowthChart: React.FC = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">User Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export const RevenueChart: React.FC = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Revenue Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export const PerformanceChart: React.FC = () => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Performance Metrics</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#ffc658" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);
