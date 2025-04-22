
import React, { useState } from 'react';
import Navbar from '@/components/Layout/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGallery from '@/components/Dashboard/ProductGallery';
import { products } from "@/data/mlmData";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

// Define product categories for Export PrimeTaste Global
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'grains', name: 'Grains' },
  { id: 'tubers', name: 'Tubers' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'seafood', name: 'Seafood' }
];

// Define Nigerian export products
const nigerianProducts = [
  {
    id: 'garri-1',
    name: 'Premium Ijebu Garri',
    description: 'High-quality Ijebu Garri, finely processed from the best cassava roots. Known for its unique sour taste and fine texture.',
    price: 50,
    image: 'https://i.imgur.com/ZE7jZH2.jpg',
    category: 'tubers',
    variations: [
      { label: '5kg Pack', price: 50 },
      { label: '10kg Pack', price: 95 },
      { label: '25kg Bulk', price: 220 }
    ]
  },
  {
    id: 'cassava-1',
    name: 'Fresh Cassava Tubers',
    description: 'Freshly harvested cassava tubers from Nigerian farms. Rich in carbohydrates and perfect for various traditional dishes.',
    price: 45,
    image: 'https://i.imgur.com/CznJEvQ.jpg',
    category: 'tubers',
    variations: [
      { label: '10kg Bundle', price: 45 },
      { label: '25kg Bundle', price: 105 }
    ]
  },
  {
    id: 'kulikuli-1',
    name: 'Organic Kulikuli',
    description: 'Traditional Nigerian snack made from groundnut paste. Rich in protein and natural oils, perfect as a healthy snack.',
    price: 35,
    image: 'https://i.imgur.com/KS3nR1d.jpg',
    category: 'snacks',
    variations: [
      { label: '500g Pack', price: 35 },
      { label: '1kg Pack', price: 65 },
      { label: '2kg Family Pack', price: 120 }
    ]
  },
  {
    id: 'snail-1',
    name: 'Giant African Land Snails',
    description: 'Premium carefully sourced Giant African Land Snails. Cleaned, processed and ready for export.',
    price: 120,
    image: 'https://i.imgur.com/9CdVCLW.jpg',
    category: 'seafood',
    variations: [
      { label: '1kg Pack', price: 120 },
      { label: '2kg Pack', price: 230 }
    ]
  },
  {
    id: 'driedfish-1',
    name: 'Dried Catfish',
    description: 'Naturally dried Nigerian catfish. Preserved using traditional smoking methods for enhanced flavor and long shelf life.',
    price: 85,
    image: 'https://i.imgur.com/3KVJCnD.jpg',
    category: 'seafood',
    variations: [
      { label: '500g Pack', price: 85 },
      { label: '1kg Pack', price: 160 }
    ]
  },
  {
    id: 'ofada-rice',
    name: 'Ofada Rice',
    description: 'Premium locally grown Ofada rice from Southwest Nigeria. Known for its unique taste and nutritional properties.',
    price: 65,
    image: 'https://i.imgur.com/6Qgpe1S.jpg',
    category: 'grains',
    variations: [
      { label: '5kg Pack', price: 65 },
      { label: '10kg Pack', price: 125 },
      { label: '25kg Bulk', price: 295 }
    ]
  }
];

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { toast } = useToast();
  
  const filteredProducts = activeCategory === 'all' 
    ? nigerianProducts 
    : nigerianProducts.filter(product => product.category === activeCategory);
  
  const handleRequestQuote = (productName: string) => {
    toast({
      title: "Quote Requested",
      description: `Your quote request for ${productName} has been sent. Our team will contact you shortly.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-mlm-primary">Nigerian Export Products</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of authentic Nigerian food products, 
            sourced directly from local farmers and processed with traditional methods.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <Tabs 
            defaultValue={activeCategory} 
            onValueChange={setActiveCategory}
            className="w-full max-w-3xl"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
              {categories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        <ProductGallery products={filteredProducts} />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Why Choose Export PrimeTaste Global?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-b from-[#fff8e1] to-white shadow-md border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                  <span className="text-yellow-800 text-xl font-bold">1</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Direct Sourcing</h3>
                <p className="text-muted-foreground">
                  We work directly with local farmers to ensure the highest quality products.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-[#fff8e1] to-white shadow-md border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                  <span className="text-yellow-800 text-xl font-bold">2</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Traditional Processing</h3>
                <p className="text-muted-foreground">
                  We maintain traditional processing methods to preserve authentic taste and quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-[#fff8e1] to-white shadow-md border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                  <span className="text-yellow-800 text-xl font-bold">3</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Export Expertise</h3>
                <p className="text-muted-foreground">
                  Our team handles all export logistics, ensuring smooth delivery worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Contact us today to discuss your specific requirements, bulk orders, or to request a customized quote.
          </p>
          <Button 
            size="lg" 
            className="bg-mlm-primary hover:bg-mlm-primary/90"
            onClick={() => window.location.href = 'mailto:adebayoajani23@gmail.com'}
          >
            Contact Us Now
          </Button>
        </div>
      </main>
      
      <footer className="mt-16 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Export PrimeTaste Global</h3>
              <p className="text-gray-300 max-w-md">
                Bringing the Best of Nigeria's Taste to the World
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <p className="text-gray-300">Email: adebayoajani23@gmail.com</p>
              <p className="text-gray-300">WhatsApp: 07067412852</p>
              <div className="mt-3">
                <a 
                  href="https://www.facebook.com/kolawole.adebayo.1069" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  Facebook: Kolawole Adebayo
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-gray-700" />
          <div className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Export PrimeTaste Global. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductShowcase;
