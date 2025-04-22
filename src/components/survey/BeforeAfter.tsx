
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ComparisonItem {
  before: string;
  after: string;
  description: string;
}

const comparisons: ComparisonItem[] = [
  {
    before: "Kulturell splittring",
    after: "Kulturell harmoni",
    description: "En inkluderande och sammanhållen kultur där kompetens, ansvar och resurser samverkar.",
  },
  {
    before: "Otydligt fokus",
    after: "Fokus på kärnverksamheten",
    description: "Alla resurser riktas mot att stödja företagets kärna.",
  },
  {
    before: "Svag värdegrund",
    after: "Djupförankrad värdegrund",
    description: "Medarbetarengagemang, kundfokus och innovation är centrala delar av kulturen.",
  },
  {
    before: "Hämmad arbetsmiljö",
    after: "Utvecklande arbetsmiljö",
    description: "En miljö som främjar snabbhet, beslutsamhet, trygghet, lyhördhet och lärande.",
  },
  {
    before: "Styrning genom rädsla",
    after: "Tillåtande klimat",
    description: "Transparens uppmuntras, där det är tillåtet att misslyckas och dra lärdom.",
  },
];

const BeforeAfter = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-black mb-6">Från nuläge till drömläge</h2>
      <div className="grid gap-6">
        {comparisons.map((item, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 p-4 bg-red-50 rounded-lg">
                  <p className="font-semibold text-red-700">{item.before}</p>
                </div>
                <ArrowRight className="flex-shrink-0 text-gray-400" />
                <div className="flex-1 p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-700">{item.after}</p>
                </div>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfter;
