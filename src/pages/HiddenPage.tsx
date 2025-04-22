
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SurveyHeader from "@/components/survey/SurveyHeader";
import DreamState from "@/components/survey/DreamState";
import ComparisonTable from "@/components/survey/ComparisonTable";
import BeforeAfter from "@/components/survey/BeforeAfter";

const HiddenPage = () => {
  const perspectiveData = {
    title: "Vem pratar om vad?",
    headers: ["VD-perspektiv", "Ledarperspektiv"] as [string, string],
    rows: [
      ["Ledarskap", "Kommunikation"],
      ["Ansvar", "Ledarskap"],
      ["Kommunikation", "Förståelse för strategin"],
      ["Förståelse för strategin", "Samarbete"],
      ["Kultur", "Kultur"],
    ] as Array<[string, string]>,
  };

  const sizeData = {
    title: "Hur stor är din organisation, påverkar det dina prioriteringar?",
    headers: ["0-500", "501-10,000+"] as [string, string],
    rows: [
      ["Ledarskap", "Kommunikation"],
      ["Kommunikation", "Ledarskap"],
      ["Ansvar", "Förståelse för strategin"],
      ["Kultur", "Samarbete"],
      ["Förståelse för strategin", "Kultur"],
      ["Samarbete", "Ansvar"],
    ] as Array<[string, string]>,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till startsidan
          </Link>
        </Button>

        <div className="max-w-5xl mx-auto">
          <SurveyHeader />
          <DreamState />
          <ComparisonTable {...perspectiveData} />
          <ComparisonTable {...sizeData} />
          <BeforeAfter />
        </div>
      </div>
    </div>
  );
};

export default HiddenPage;
