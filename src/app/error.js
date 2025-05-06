"use client";
import { useEffect } from "react";
import ErrorDisplay from "@/components/common/ErrorDisplay";
import Header from "@/components/Header";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log l'erreur sur le serveur
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <ErrorDisplay 
          message="Une erreur inattendue s'est produite. Veuillez réessayer ou contacter notre support."
          onRetry={reset}
        />
      </div>
    </>
  );
}
