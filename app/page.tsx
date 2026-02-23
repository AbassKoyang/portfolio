import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <div className="link">
        <span>&#8594;</span>
        <Link href='/projects'>All projects</Link>
      </div>
    </div>
  );
}
