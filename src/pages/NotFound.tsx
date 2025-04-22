
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-crypto-gray-darker p-4">
      <div className="text-center space-y-6 max-w-md animate-fade-in">
        <div className="mx-auto w-24 h-24 rounded-full bg-crypto-gray-dark flex items-center justify-center mb-4">
          <span className="text-4xl">🔎</span>
        </div>
        <h1 className="text-4xl font-bold text-gradient-orange">404</h1>
        <h2 className="text-2xl font-semibold text-white">Page Not Found</h2>
        <p className="text-crypto-gray-light">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-crypto-orange hover:bg-crypto-orange-light text-white">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
