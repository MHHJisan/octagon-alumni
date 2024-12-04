// components/Header.js
import Link from "next/link";

const Header = () => (
  <header className="bg-gray-100 border-b border-gray-300 py-4 px-8">
    <div className="flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-xl font-bold text-black">
        <Link href="/">Stanford Alumni</Link>
      </div>
    </div>

    <nav>
      <ul className="flex gap-6 justify-center text-black">
        <li>
          <Link href="/network" className="text-blue-600 hover:text-blue-950">
            Alumni Network
          </Link>
        </li>
        <li>
          <Link href="/events" className="text-blue-600 hover:text-blue-950">
            Events
          </Link>
        </li>
        <li>
          <Link href="/news" className="text-blue-600 hover:text-blue-950">
            News
          </Link>
        </li>
        <li>
          <Link href="/login" className="text-blue-600 hover:text-blue-950">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
