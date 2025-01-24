import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero relative text-white min-h-[60vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
        {" "}
        {/* Fundo semitransparente */}
        <Image
          src="/images/businessRoom.webp"
          alt="Marketing digital"
          layout="fill"
          objectFit="cover"
          priority
          className="filter blur-sm" // Filtro de desfoque na imagem
        />
      </div>

      <div className="relative z-10 container mx-auto text-center py-32">
        <header>
          <h1
            className="text-5xl font-bold mb-6 text-white"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)" }} // Sombreamento mais forte
          >
            Transform your digital presence and win more customers
          </h1>
          <p
            className="mb-10 text-lg text-white"
            style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
          >
            Strategic solutions for small and medium-sized companies seeking
            growth and visibility.
          </p>
        </header>

        <Link href="/contact">
          <span className="btn bg-blue-400 inline-block  hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-lg transition-all cursor-pointer">
            <span className="relative z-10">Get in touch</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
