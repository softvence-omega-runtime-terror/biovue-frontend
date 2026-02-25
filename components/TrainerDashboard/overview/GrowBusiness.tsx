"use client";

import { Button } from "@/components/ui/button";

export default function GrowBusiness() {
  return (
    <div className="bg-teal-600 rounded-lg p-8 text-white">
      <div className="max-w-md">
        <h3 className="text-2xl font-bold mb-2">Grow your business</h3>
        <p className="text-teal-50 mb-6 text-sm leading-relaxed">
          Deliver personalized wellness programs to your clients and scale your
          coaching practice with proven methodologies.
        </p>
        <Button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
          Explore Programs
        </Button>
      </div>
    </div>
  );
}
