import Image from "next/image";

export default function Brands() {
  return (
    <section className="brands bg-gray-100 py-24">
      <h2 className="text-center text-xl font-light text-gray-500 mb-6">
        Some companies that trust our services
      </h2>
      <ul className="flex justify-center space-x-8">
        <li>
          <Image
            src="/images/spotify.svg"
            alt="Spotify"
            width={80}
            height={80}
            className="w-20"
          />
        </li>
        <li>
          <Image
            src="/images/slack.svg"
            alt="Slack"
            width={80}
            height={80}
            className="w-20"
          />
        </li>
        <li>
          <Image
            src="/images/dropbox.svg"
            alt="Dropbox"
            width={80}
            height={80}
            className="w-20"
          />
        </li>
        <li>
          <Image
            src="/images/zoom.svg"
            alt="Zoom"
            width={80}
            height={80}
            className="w-20"
          />
        </li>
      </ul>
    </section>
  );
}
