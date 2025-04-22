
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DreamState = () => {
  return (
    <Card className="glass-card mb-16">
      <CardHeader>
        <CardTitle className="text-2xl font-black">Drömläget</CardTitle>
      </CardHeader>
      <CardContent className="prose prose-lg max-w-none">
        <p className="text-gray-600 leading-relaxed">
          Undersökningen visar en vision av ett välfungerande företag med en sammanhållen och inkluderande kultur där kompetens, ansvar och resurser harmonierar. Fokus ligger stadigt på kärnverksamheten, med alla resurser dedikerade till att stödja den. Medarbetarengagemang, kundfokus och innovation är djupt förankrade i kulturen, vilket skapar en miljö präglad av design, snabbhet, beslutsamhet, trygghet, lyssnande och lärande. Det uppmuntrar transparens och tillåter medarbetare att misslyckas och lära, utan stelbenta strukturer som budgetar eller utvecklingssamtal. Tillit och förankring på alla nivåer är avgörande, med stöd av ett generöst informationsflöde.
        </p>
      </CardContent>
    </Card>
  );
};

export default DreamState;
