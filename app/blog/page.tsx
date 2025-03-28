"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Handwriting Recognition Technology",
    excerpt: "Explore how AI and machine learning are revolutionizing the way we digitize handwritten text...",
    date: "March 20, 2024",
    category: "Technology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "5 Tips for Better Handwriting Recognition Results",
    excerpt: "Learn how to improve the accuracy of your handwriting conversions with these simple tips...",
    date: "March 18, 2024",
    category: "Tips & Tricks",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "How AI is Preserving Historical Documents",
    excerpt: "Discover how modern OCR technology is helping preserve and digitize important historical manuscripts...",
    date: "March 15, 2024",
    category: "Case Studies",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Insights, updates, and stories about handwriting recognition and technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                  <Button variant="ghost" size="sm" className="hover:text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}