// pages/about.tsx
import React from "react";
import Button from "@/components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <p className="mb-8 text-gray-700">
        This page demonstrates our reusable Button component with different
        sizes and shapes.
      </p>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-xl font-semibold w-full">Size Variants:</h2>
          <Button
            size="small"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Small Button
          </Button>
          <Button
            size="medium"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Medium Button
          </Button>
          <Button
            size="large"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Large Button
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-xl font-semibold w-full">Shape Variants:</h2>
          <Button
            shape="rounded-sm"
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Slightly Rounded
          </Button>
          <Button
            shape="rounded-md"
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Medium Rounded
          </Button>
          <Button
            shape="rounded-full"
            className="bg-green-600 text-white hover:bg-green-700 px-6"
          >
            Fully Rounded
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-xl font-semibold w-full">
            Combination Examples:
          </h2>
          <Button
            size="small"
            shape="rounded-full"
            className="bg-purple-600 text-white hover:bg-purple-700 px-4"
          >
            Small Pill
          </Button>
          <Button
            size="large"
            shape="rounded-sm"
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Large Square
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

