import Link from "next/link";
import { Suspense } from 'react'
import ProductCard from "./components/ProductCard";
import Product from "./components/Product";
import Review from "./components/review";

export default function Page() {

  return (
    <>
    <div>
        <h1>Hello, Next.js!</h1>
        <Link href="/blog">Blog</Link>
        <ProductCard />

      </div>
      <div>
          <Suspense fallback={<p>🌀 Loading product details......</p>}>
              <Product/>
          </Suspense>
          <Suspense fallback={<p>🌀 Loading review details......</p>}>
              <Review/>
          </Suspense>
      </div>
      </>
  )
}