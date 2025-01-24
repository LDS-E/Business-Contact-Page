import Image from "next/image";

export default function Branding() {
  return (
    <section className="branding py-24" id="sobre">
      <article className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Branding & Design System for Small and Medium Businesses
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Create, Preview, and Perfect Your Designs
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <span className="mr-2">See More Detail</span>
          <Image
            src="/images/Arrow.svg"
            alt="Arrow"
            width={24}
            height={24}
            aria-hidden="true"
          />
        </a>
      </article>

      {/* Grid de Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <article className="bg-gradient-to-r from-blue-200 to-indigo-200 shadow-lg rounded-lg overflow-hidden p-6 text-center">
          <Image
            src="/images/KPIs.webp"
            alt="Front-end course"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Analysis</h3>
            <p className="text-gray-700 mt-2">
              Gain insights and optimize performance with advanced analysis
              tools designed to drive your business growth efficiently.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-gradient-to-r from-blue-200 to-indigo-200 shadow-lg rounded-lg overflow-hidden p-6 text-center">
          <Image
            src="/images/businessDeal2.jpg"
            alt="UI/UX Design"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">UI/UX Designer</h3>
            <p className="text-gray-700 mt-2">
              Create intuitive and engaging user experiences with modern UI/UX
              design principles that captivate and convert
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="bg-gradient-to-r from-blue-200 to-indigo-200 shadow-lg rounded-lg overflow-hidden p-6 text-center">
          <Image
            src="/images/businessDesk.webp"
            alt="Digital Marketing"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-md"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Digital Marketing</h3>
            <p className="text-gray-700 mt-2">
              Boost your brand’s online presence with powerful digital marketing
              strategies that drive engagement and growth.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
