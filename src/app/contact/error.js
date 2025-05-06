"use client";
import { useEffect } from "react";
import ErrorDisplay from "@/components/common/ErrorDisplay";
import Header from "@/components/Header";

export default function ContactError({ error, reset }) {
  useEffect(() => {
    console.error("Erreur sur la page de contact:", error);
  }, [error]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <ErrorDisplay 
          message="Une erreur s'est produite lors du chargement de la page de contact. Veuillez réessayer ultérieurement."
          onRetry={reset}
        />
      </div>
    </>
  );
}
