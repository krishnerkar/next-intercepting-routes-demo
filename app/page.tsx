/* eslint-disable @next/next/no-img-element */

"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { products } from "@/products";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} mx-auto max-w-7xl flex items-center flex-col px-6 py-12 lg:px-24`}
    >
      <h1 className="text-4xl font-bold">Preview Modals Demo</h1>
      <h2 className="text-xl text-gray-700 mt-4">
        Using Next 13.3{" "}
        <a
          className="font-semibold"
          href="https://beta.nextjs.org/docs/routing/intercepting-routes"
        >
          Intercepting Routes
        </a>{" "}
        along with{" "}
        <a
          className="font-semibold"
          href="https://beta.nextjs.org/docs/routing/parallel-routes"
        >
          Parallel routes
        </a>
      </h2>
      <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkrishnerkar%2Fnext-intercepting-routes-demo">
        <button className="bg-blue-600 hover:bg-blue-700 flex items-center justify-between gap-4 mt-4 text-white px-4 py-2 rounded-md">
          <Image
            width={15}
            height={15}
            src="/vercel.svg"
            alt="Deploy with Vercel"
          />
          <div className="h-8 w-[0.5px] bg-gray-100 opacity-50" />
          Deploy with Vercel
        </button>
      </a>
      <div className="grid grid-cols-1 mt-24 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group"
          >
            <div className="aspect-h-1 aspect-w-1 hover:ring-gray-300 cursor-pointer ring ring-gray-100 ring-offset-4 w-full overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                width={500}
                height={500}
                src={product.imageSrc}
                alt={product.name}
                className="object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-7d00">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
