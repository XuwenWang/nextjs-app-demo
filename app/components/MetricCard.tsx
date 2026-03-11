"use client";

import React from "react";

interface MetricCardProps {
    title: string;
    value: string | number;
    change?: string;
    changeType?: "positive" | "negative" | "neutral";
    icon?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, changeType = "neutral", icon }) => {
    const changeColor = {
        positive: "text-green-600",
        negative: "text-red-600",
        neutral: "text-gray-600",
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
                    <div className="mt-2 flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
                        {change && <p className={`ml-2 text-sm font-medium ${changeColor[changeType]}`}>{change}</p>}
                    </div>
                </div>
                {icon && <div className="text-gray-400 dark:text-gray-500">{icon}</div>}
            </div>
        </div>
    );
};

export default MetricCard;
