
import * as React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTooltipContent, ChartConfig } from "./chart";

interface DonutChartProps {
  data: Array<{ name: string; value: number }>;
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  dataKey?: string;
  nameKey?: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
}

export const DonutChart = ({
  data,
  width = 400,
  height = 400,
  innerRadius = 60,
  outerRadius = 100,
  dataKey = "value",
  nameKey = "name",
  colors = ["#a0b41c", "#c9db4c", "#8c9e0f", "#d2e07f", "#5e6a0a"],
  valueFormatter = (value: number) => `${value}`,
}: DonutChartProps) => {
  // Create config for the chart tooltip
  const chartConfig: ChartConfig = data.reduce((acc, item, index) => {
    acc[item[nameKey as keyof typeof item] as string] = {
      color: colors[index % colors.length],
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <ChartContainer className="h-full w-full" config={chartConfig}>
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          dataKey={dataKey}
          nameKey={nameKey}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]} 
            />
          ))}
        </Pie>
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0];
              return (
                <div className="rounded-lg border bg-background p-2 shadow-md">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium">{data.name}</p>
                    <p className="text-xs">
                      {valueFormatter(data.value as number)}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
      </PieChart>
    </ChartContainer>
  );
};
