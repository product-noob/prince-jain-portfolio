import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Flippi - GenAI Assistant",
    tag: "AI Tools",
    description: "Evolved Flipkart's AI-powered shopping assistant from rule-based flows to LLM-chained workflows. Scaled to 3M+ MAU with 5% assisted conversions.",
    link: "#",
  },
  {
    title: "AI Shopping App",
    tag: "AI Commerce",
    description: "Driving 0-to-1 development of a multi-marketplace AI shopping app using agentic workflows and multimodal reasoning.",
    link: "#",
  },
  {
    title: "Mini Apps Platform",
    tag: "Platform",
    description: "Built Paytm's Super App ecosystem, scaling to 600+ merchant apps and 10M+ MAU. Powered 60% of Paytm's app traffic.",
    link: "#",
  },
  {
    title: "Covid-19 Vaccine Finder",
    tag: "Health Tech",
    description: "Built and launched in 2 weeks. Scaled to 10M+ users, facilitated 3M+ bookings during the pandemic.",
    link: "#",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border"
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="mb-2">{project.tag}</Badge>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
