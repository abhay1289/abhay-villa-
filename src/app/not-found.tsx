import Link from "next/link";
import { Brand } from "@/components/Brand";

export default function NotFound() {
  return (
    <main className="not-found">
      <Link className="brand" href="/" aria-label="Abhay Villa home">
        <Brand />
      </Link>
      <h1 className="section-title">Page not found</h1>
      <p>That page is not part of this site. Head back to the homepage.</p>
      <Link className="pill pill-dark" href="/">
        Back home
      </Link>
    </main>
  );
}
