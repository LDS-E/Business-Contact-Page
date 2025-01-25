import { LineChart } from "@tremor/react";

export default function SimpleChart() {
  return (
    <div className="p-4 bg-black">
      <LineChart
        data={[
          { month: "Jan", value: 100 },
          { month: "Feb", value: 200 },
          { month: "Mar", value: 300 },
        ]}
        index="month"
        categories={["value"]}
        colors={["blue"]}
        yAxisWidth={50}
      />
    </div>
  );
}
