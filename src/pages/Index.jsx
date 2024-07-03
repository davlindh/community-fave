import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Container from "@/models/Container";

const Index = () => {
  const navigate = useNavigate();

  // Example usage of Container model
  const exampleContainer = new Container({
    name: "Example Container",
    description: "This is an example container",
    contentMetadata: { type: "example" },
  });

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to The Faving Ecosystem</h1>
      <p className="mb-6">Your go-to platform for secure and seamless file sharing and real-time collaboration.</p>
      <Button onClick={() => navigate("/fileflow")}>Explore FileFlow</Button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Example Container</h2>
        <p>Name: {exampleContainer.name}</p>
        <p>Description: {exampleContainer.description}</p>
        <p>Type: {exampleContainer.contentMetadata.type}</p>
      </div>
    </div>
  );
};

export default Index;