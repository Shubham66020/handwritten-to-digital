"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, Copy, Download, Loader2 } from "lucide-react";

export default function ConvertPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [convertedText, setConvertedText] = useState("");
  const [language, setLanguage] = useState("en"); // Default language is English
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    // Simulate file upload
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsUploading(false);
    setIsProcessing(true);
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate different outputs based on file name and language
    if (file.name === "image1.jpg") {
      setConvertedText(language === "en" ? "this one is good" : "esto es bueno");
    } else if (file.name === "image2.jpg") {
      setConvertedText(language === "en" ? "nice one" : "uno bueno");
    } else if (file.name === "image3.jpg") {
      setConvertedText(language === "en" ? "it is working" : "está funcionando");
    } else if (file.name === "image4.jpg") {
      setConvertedText(language === "en" ? "good weather" : "buen clima");
    } else {
      setConvertedText(language === "en" ? "Unable to process check image type" : "No se puede procesar, verifica el tipo de imagen");
    }

    setIsProcessing(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(convertedText);
    toast({
      title: "Copied to clipboard",
      description: "The converted text has been copied to your clipboard.",
    });
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([convertedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted-text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center">Convert Handwriting to Text</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
        <Card className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Upload Image</h2>
          <div className="border-2 border-dashed rounded-lg p-4 md:p-8 text-center">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-upload"
              onChange={handleFileUpload}
              disabled={isUploading || isProcessing}
            />
            <div className="flex flex-col items-center">
              <Upload className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 text-muted-foreground" />
              <p className="text-base md:text-lg mb-2">Upload your image here</p>
              <p className="text-sm text-muted-foreground mb-4">
                Supported formats: JPG, PNG, GIF
              </p>
              <Button 
                className="w-full max-w-xs"
                disabled={isUploading || isProcessing}
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Select Image"
                )}
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-semibold">Converted Text</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                disabled={!convertedText}
                className="h-8 w-8 md:h-10 md:w-10"
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={downloadText}
                disabled={!convertedText}
                className="h-8 w-8 md:h-10 md:w-10"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Textarea
            value={convertedText}
            onChange={(e) => setConvertedText(e.target.value)}
            placeholder="Converted text will appear here..."
            className="min-h-[200px] md:min-h-[300px] text-sm md:text-base"
          />
          <div className="mt-4">
            <label htmlFor="language-select" className="block text-sm font-medium mb-2">
              Choose Language:
            </label>
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded-md p-2 w-full"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              
              {/* Add more languages as needed */}
            </select>
          </div>
        </Card>
      </div>
    </div>
  );
}