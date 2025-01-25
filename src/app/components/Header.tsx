import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/images/bananaLogo.svg"
            alt="Logotipo Banana Business"
            width={64}
            height={25}
            priority
          />
        </Link>
        <h1 className="text-banana-business text-3xl font-extrabold">
          BANANA BUSINESS
        </h1>
      </div>

      <nav>
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              href="/#home"
              className="text-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-lg transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#sobre"
              className="text-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-lg transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#testemunhos"
              className="text-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-lg transition-all"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="/#contato"
              className="text-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white py-2 px-4 rounded-lg transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
