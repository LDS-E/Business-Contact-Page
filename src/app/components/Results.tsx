import Image from "next/image";
import { BarChart, LineChart } from "@tremor/react"; // Biblioteca para gráficos simples
import { FaChartLine, FaUsers, FaBullhorn } from "react-icons/fa";

export default function Results() {
  return (
    <section className="results py-24 bg-gray-100">
      <article className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Results Analysis</h2>
        <p className="text-lg text-gray-700 mb-6">
          Every communication project needs a well-defined objective. We help
          monitor the results obtained.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <span className="mr-2">See More Details</span>
          <Image
            src="/images/Arrow.svg"
            alt="Arrow"
            width={24}
            height={24}
            aria-hidden="true"
          />
        </a>
      </article>

      <section className="p-6">
        <h2 className="text-3xl font-bold mb-4">Results Overview</h2>
        <p className="text-gray-600 mb-6">
          Tracking key metrics is essential to evaluate the success of any
          communication strategy.
        </p>

        {/* Cards de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <FaChartLine className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Monthly Growth</h3>
              <p className="text-gray-600">+20% increase</p>{" "}
              {/* Dados fictícios */}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <FaUsers className="text-green-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">New Users</h3>
              <p className="text-gray-600">1,500 this month</p>{" "}
              {/* Dados fictícios */}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <FaBullhorn className="text-yellow-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Campaign Reach</h3>
              <p className="text-gray-600">45,000 impressions</p>{" "}
              {/* Dados fictícios */}
            </div>
          </div>
        </div>

        {/* Gráfico Simples */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h3 className="text-xl font-semibold mb-4">Performance Over Time</h3>
          <LineChart
            data={[
              { month: "Jan", value: 400 },
              { month: "Feb", value: 550 },
              { month: "Mar", value: 720 },
              { month: "Apr", value: 980 },
              { month: "May", value: 1300 },
              { month: "Jun", value: 1700 },
              { month: "Jul", value: 2200 }, // Adicionando mais meses para dados contínuos
            ]}
            index="month"
            categories={["value"]}
            colors={["blue"]}
            yAxisWidth={50}
          />
        </div>

        {/* Gráfico de Barras - Exemplificando mais dados */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Product Sales Analysis</h3>
          <BarChart
            data={[
              { product: "Product A", sales: 1200 },
              { product: "Product B", sales: 1500 },
              { product: "Product C", sales: 800 },
              { product: "Product D", sales: 2000 },
            ]}
            index="product"
            categories={["sales"]}
            colors={["indigo"]}
            yAxisWidth={50}
          />
        </div>
      </section>
    </section>
  );
}
