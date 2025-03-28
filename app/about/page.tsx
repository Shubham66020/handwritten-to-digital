"use client";

import { Card } from "@/components/ui/card";
import { User, Target, Award, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Scribble2Text</h1>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Transforming the way you digitize handwritten content with cutting-edge AI technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <User className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2024, Scribble2Text emerged from a simple idea: making handwritten text digitization accessible to everyone. Our journey began with a team of passionate developers and AI enthusiasts.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-muted-foreground">
              We're on a mission to bridge the gap between handwritten and digital content, making information more accessible, searchable, and shareable for individuals and businesses alike.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Our Values</h2>
            <p className="text-muted-foreground">
              Innovation, accuracy, and user privacy are at the core of everything we do. We believe in creating technology that serves humanity while protecting user data.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Globe className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Global Impact</h2>
            <p className="text-muted-foreground">
              With users across 50+ countries, we're helping people worldwide convert their handwritten notes, documents, and archives into searchable digital text.
            </p>
          </Card>
        </div>

        <div className="bg-muted rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Technology</h2>
          <p className="text-muted-foreground mb-6">
            Scribble2Text uses advanced machine learning algorithms and neural networks to achieve industry-leading accuracy in handwriting recognition. Our technology can:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Process multiple handwriting styles and languages</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Handle various document formats and image types</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Maintain high accuracy even with poor image quality</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Process documents in real-time with minimal latency</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-muted-foreground">
            We're constantly improving and expanding our services. Join thousands of satisfied users who have already discovered the power of Scribble2Text.
          </p>
        </div>
      </div>
    </div>
  );
}