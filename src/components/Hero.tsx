import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Hi, I'm Prince Jain.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Product Builder with engineering roots. Leading AI & Platform initiatives at Flipkart,
          building the future of AI-powered commerce.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="gap-2">
            Connect <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <FileText className="h-4 w-4" /> Read Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
