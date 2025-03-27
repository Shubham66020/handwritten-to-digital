import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our service",
    features: [
      "5 conversions per month",
      "Basic OCR accuracy",
      "JPG & PNG support",
      "Export to TXT",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Best for regular users",
    features: [
      "100 conversions per month",
      "Enhanced OCR accuracy",
      "Priority processing",
      "All image formats supported",
      "Export to TXT, DOC, PDF",
      "Edit history for 30 days",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited conversions",
      "Highest OCR accuracy",
      "Instant processing",
      "All image formats supported",
      "All export formats",
      "Unlimited history",
      "API access",
      "Dedicated support",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full" asChild>
              <Link href="/convert">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}