
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HiddenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-canucci-dark mb-6">
            Dold sida
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Denna sida är endast tillgänglig via direktlänk.
          </p>
          <Button asChild variant="outline">
            <Link to="/" className="inline-flex items-center gap-2">
              Tillbaka till startsidan
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HiddenPage;
