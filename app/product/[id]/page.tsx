/* eslint-disable @next/next/no-img-element */
import { products } from "@/products";
import Image from "next/image";

export default function Product({ params }: { params: { id: string } }) {
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div
      className={`mx-auto max-w-7xl justify-center h-screen flex items-center flex-col px-6 py-12 lg:px-24`}
    >
      <div>
        <div className="aspect-h-1 aspect-w-1 hover:ring-gray-300 cursor-pointer ring ring-gray-100 ring-offset-4 w-full overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image
            width={500}
            height={500}
            src={product.imageSrc}
            alt={product.name}
            className="object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="mt-6 text-3xl font-bold text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}
