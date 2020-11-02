import Link from "next/link";

export default function PageTwoRoute() {
  return <main>
    Hello, PageTwo
    <Link href="/">
      <a>Index</a>
    </Link>
  </main>;
}