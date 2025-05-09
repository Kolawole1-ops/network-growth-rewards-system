
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Product as MLMProduct } from "@/data/mlmData";

// Define the Product type to match what's needed in this component
type Product = {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
  description?: string;
  variations?: { label: string; price: number }[];
};

type Props = {
  products: MLMProduct[] | Product[];
};

const ProductGallery: React.FC<Props> = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="mt-8 text-center text-lg text-muted-foreground">
        No products uploaded yet.
      </div>
    );
  }

  // Function to get price from product (either direct price or from variations)
  const getProductPrice = (product: MLMProduct | Product): number | string => {
    if ('price' in product) {
      return product.price;
    } else if (product.variations && product.variations.length > 0) {
      // Use the first variation's price if direct price is not available
      return product.variations[0].price;
    }
    return "N/A"; // Fallback if no price information is available
  };

  // Function to get variations in consistent format
  const getVariations = (product: MLMProduct | Product) => {
    if ('variations' in product) {
      if (Array.isArray(product.variations)) {
        if ('label' in product.variations[0]) {
          // Already in the right format
          return product.variations;
        } else if ('name' in product.variations[0]) {
          // Convert from MLMProduct variation to the format needed
          return product.variations.map((v: any) => ({
            label: v.name,
            price: v.price
          }));
        }
      }
    }
    return [];
  };

  return (
    <div className="mx-auto px-2 py-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl">
      {products.map((product) => (
        <Card
          key={product.id}
          className="bg-gradient-to-b from-[#FFD700]/70 to-[#fff8e1] shadow-xl border-none hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <div className="w-full aspect-[4/3] rounded-t-lg overflow-hidden bg-gradient-to-tr from-yellow-200 via-yellow-50 to-yellow-100">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-mlm-primary mb-1">{product.name}</h3>
            <div className="text-lg font-bold text-yellow-900 mb-2">
              {typeof getProductPrice(product) === "number"
                ? `$${(getProductPrice(product) as number).toLocaleString()}`
                : getProductPrice(product)}
            </div>
            {getVariations(product).length > 0 && (
              <div className="mb-1">
                <div className="text-xs text-muted-foreground mb-1">Variations:</div>
                <ul className="flex flex-wrap gap-2">
                  {getVariations(product).map((v, idx) => (
                    <li
                      key={idx}
                      className="bg-yellow-200 text-yellow-900 rounded px-2 py-0.5 text-xs border border-yellow-300"
                    >
                      {v.label}: ${v.price}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGallery;
