"use client";

import {
  ProductDialog,
  ProductDialogCancel,
  ProductDialogContent,
  ProductDialogDescription,
  ProductDialogHeader,
} from "@/components/ProductDialog";

import { products } from "@/products";
import { Maximize2, X } from "lucide-react";
import Image from "next/image";

export default function Product({ params }: { params: { id: string } }) {
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <ProductDialog open={true}>
        <ProductDialogContent className="sm:px-10 sm:py-8">
          <ProductDialogHeader>
            <ProductDialogDescription className="flex items-center justify-center flex-col">
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
            </ProductDialogDescription>

            <button
              onClick={() => {
                window.location.reload();
              }}
              className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-800 absolute right-6 top-4"
            >
              <Maximize2 color="#fff" size={20} />
            </button>
          </ProductDialogHeader>
          <ProductDialogCancel
            onClick={() => {
              window.location.href = "/";
            }}
            className=" p-3 rounded-full absolute left-6 top-4"
          >
            <X color="#000" size={20} />
          </ProductDialogCancel>
        </ProductDialogContent>
      </ProductDialog>
    </div>
  );
}
