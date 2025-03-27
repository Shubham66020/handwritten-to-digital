import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Upload, Edit3, History } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient relative">
        {/* Decorative elements */}
        <div className="decoration-dot top-20 left-[10%] animate-float" />
        <div className="decoration-dot top-40 right-[15%] animate-float" style={{ animationDelay: '1s' }} />
        <div className="decoration-circle w-32 h-32 -top-16 -left-16 animate-float" style={{ animationDelay: '2s' }} />
        <div className="decoration-circle w-48 h-48 -bottom-24 -right-24 animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto max-w-4xl relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Transform Your Handwriting into Digital Text with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Fast, accurate, and secure handwriting recognition powered by advanced machine learning
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-red-700 hover:from-primary/90 hover:to-red-700/90" asChild>
              <Link href="/convert">Start Converting</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-600/10" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-card-gradient transform hover:-translate-y-1 transition-all duration-300">
              <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Upload Image</h3>
              <p className="text-muted-foreground">
                Simply upload your handwritten text image in any common format
              </p>
            </Card>
            <Card className="p-6 text-center hover-card-gradient transform hover:-translate-y-1 transition-all duration-300">
              <Edit3 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
              <p className="text-muted-foreground">
                Our AI model analyzes and converts your handwriting to digital text
              </p>
            </Card>
            <Card className="p-6 text-center hover-card-gradient transform hover:-translate-y-1 transition-all duration-300">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Get Results</h3>
              <p className="text-muted-foreground">
                Download your converted text in multiple formats
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5" />
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-700">99%</h3>
              <p className="text-muted-foreground">Accuracy Rate</p>
            </div>
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-700">1M+</h3>
              <p className="text-muted-foreground">Documents Converted</p>
            </div>
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-700">50K+</h3>
              <p className="text-muted-foreground">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Ready to Convert Your Handwriting?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start converting your handwritten text to digital format today
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-red-700 hover:from-primary/90 hover:to-red-700/90" asChild>
            <Link href="/convert">Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}