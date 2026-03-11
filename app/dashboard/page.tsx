import React from "react";
import MetricCard from "../components/MetricCard";
import { UserGrowthChart, RevenueChart, PerformanceChart } from "../components/ChartComponents";
import { dashboardMetrics } from "../lib/sampleData";

const DashboardPage: React.FC = () => {
    return (
        <>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                <MetricCard title="Total Users" value={dashboardMetrics.totalUsers.toLocaleString()} change="+12.5%" changeType="positive" />
                <MetricCard title="Total Revenue" value={dashboardMetrics.totalRevenue} change="+8.2%" changeType="positive" />
                <MetricCard title="Active Users" value={dashboardMetrics.activeUsers.toLocaleString()} change="-2.1%" changeType="negative" />
                <MetricCard title="Conversion Rate" value={dashboardMetrics.conversionRate} change="+0.3%" changeType="positive" />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                <UserGrowthChart />
                <RevenueChart />
            </div>

            {/* Full Width Chart */}
            <div className="mt-6">
                <PerformanceChart />
            </div>
        </>
    );
};

export default DashboardPage;
