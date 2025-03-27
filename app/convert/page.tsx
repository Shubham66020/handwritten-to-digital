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
    setIsProcessing(false);
    setConvertedText("This is a sample converted text. In a real implementation, this would be the actual text extracted from your handwritten image using OCR and AI processing.");
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
      <h1 className="text-3xl font-bold mb-8 text-center">Convert Handwriting to Text</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-upload"
              onChange={handleFileUpload}
              disabled={isUploading || isProcessing}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload className="w-12 h-12 mb-4 text-muted-foreground" />
              <p className="text-lg mb-2">Drag and drop your image here</p>
              <p className="text-sm text-muted-foreground mb-4">
                or click to browse files
              </p>
              <Button disabled={isUploading || isProcessing}>
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
            </label>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Converted Text</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                disabled={!convertedText}
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={downloadText}
                disabled={!convertedText}
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Textarea
            value={convertedText}
            onChange={(e) => setConvertedText(e.target.value)}
            placeholder="Converted text will appear here..."
            className="min-h-[300px]"
          />
        </Card>
      </div>
    </div>
  );
}