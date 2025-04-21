
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from '@/components/Layout/Navbar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus, Trash2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/mlmData";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  category: z.string().min(1, {
    message: "Category is required",
  }),
  commissionRate: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100, {
    message: "Commission rate must be between 0 and 100",
  }),
});

const ProductForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const isEditing = !!id;
  
  const [variations, setVariations] = useState<Array<{id: string, name: string, price: string}>>([
    { id: crypto.randomUUID(), name: "", price: "" }
  ]);
  
  const existingProduct = isEditing 
    ? products.find(p => p.id === id)
    : null;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: existingProduct?.name || "",
      description: existingProduct?.description || "",
      category: existingProduct?.category || "",
      commissionRate: existingProduct?.commissionRate?.toString() || "10",
    },
  });

  // Initialize variations if editing
  React.useEffect(() => {
    if (existingProduct && existingProduct.variations) {
      setVariations(existingProduct.variations.map(v => ({
        id: v.id,
        name: v.name,
        price: v.price.toString()
      })));
    }
  }, [existingProduct]);

  const addVariation = () => {
    setVariations([...variations, { id: crypto.randomUUID(), name: "", price: "" }]);
  };

  const removeVariation = (id: string) => {
    if (variations.length > 1) {
      setVariations(variations.filter(v => v.id !== id));
    } else {
      toast({
        title: "Cannot remove",
        description: "You must have at least one product variation",
        variant: "destructive",
      });
    }
  };

  const updateVariation = (id: string, field: 'name' | 'price', value: string) => {
    setVariations(variations.map(v => 
      v.id === id ? { ...v, [field]: value } : v
    ));
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Validate variations
    const allVariationsValid = variations.every(v => v.name.trim() && v.price.trim() && !isNaN(Number(v.price)));
    
    if (!allVariationsValid) {
      toast({
        title: "Form error",
        description: "Please fill in all variation names and prices correctly",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would send this to a backend API
    toast({
      title: isEditing ? "Product updated" : "Product created",
      description: `${values.name} has been ${isEditing ? 'updated' : 'created'} successfully`,
    });
    
    navigate('/admin');
  };

  // Check if current user is admin
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  if (!currentUser || currentUser.role !== 'admin') {
    // Redirect non-admin users
    React.useEffect(() => {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page",
        variant: "destructive",
      });
      navigate('/');
    }, []);
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{isEditing ? "Edit Product" : "Add New Product"}</h1>
          <p className="text-muted-foreground mt-1">
            {isEditing ? "Update product information and variations" : "Create a new product with variations"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Details Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Product Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Premium Health Supplement" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Enter product description" 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Input placeholder="Health & Wellness" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="commissionRate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Commission Rate (%)</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" max="100" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <FormLabel className="text-base">Product Variations</FormLabel>
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          onClick={addVariation}
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Variation
                        </Button>
                      </div>
                      
                      {variations.map((variation, index) => (
                        <div 
                          key={variation.id}
                          className="flex items-center gap-3 p-3 border rounded-md"
                        >
                          <div className="flex-1">
                            <Input
                              placeholder="Variation name (e.g. Small, 30-day supply)"
                              value={variation.name}
                              onChange={(e) => updateVariation(variation.id, 'name', e.target.value)}
                            />
                          </div>
                          <div className="w-24">
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Price"
                              value={variation.price}
                              onChange={(e) => updateVariation(variation.id, 'price', e.target.value)}
                            />
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeVariation(variation.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 flex justify-end space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate('/admin')}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-mlm-primary hover:bg-mlm-primary/90">
                        {isEditing ? "Update Product" : "Create Product"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          {/* Image Upload */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full h-48 border-2 border-dashed rounded-lg flex items-center justify-center bg-gray-50">
                    <div className="text-center p-4">
                      <Upload className="h-8 w-8 mx-auto text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500">Drag & drop or click to upload</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id="product-image"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        className="mt-4"
                        onClick={() => document.getElementById('product-image')?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    You can upload multiple images for each product variation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductForm;
