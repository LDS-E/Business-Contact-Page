export default function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <a
          href="index.html"
          className="text-3xl font-extrabold text-white mb-10"
        >
          BANANA BUSINESS
        </a>
        <p className="mb-4">Products, Brands &amp; Business Experiences</p>
        <ul className="flex justify-center space-x-8 mb-4">
          <li>
            <a href="#" className="text-white hover:text-blue-400">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-400">
              Youtube
            </a>
          </li>
        </ul>
        <div className="text-sm">
          <p>
            &copy; Developed by
            <a href="https://github.com/LDS-E" target="_blank">
              {" "}
              LDS-E{" "}
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
