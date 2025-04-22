
import { LightbulbIcon } from "lucide-react";

const SurveyHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center gap-2 mb-4">
        <LightbulbIcon className="w-8 h-8 text-yellow-500" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-canucci-dark mb-6">
        Undersökningsresultat
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        En analys av hur organisationer ser på sin framtida strategi och utveckling
      </p>
    </div>
  );
};

export default SurveyHeader;
