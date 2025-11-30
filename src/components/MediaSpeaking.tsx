import { ExternalLink } from "lucide-react";

const media = [
  {
    type: "Speaking",
    title: "Building AI-First Products",
    venue: "Product Conference 2024",
    link: "#",
  },
  {
    type: "Article",
    title: "The Future of Conversational Commerce",
    venue: "Medium",
    link: "#",
  },
  {
    type: "Speaking",
    title: "Mini Apps & Super App Strategy",
    venue: "Paytm Developer Conference",
    link: "#",
  },
  {
    type: "Article",
    title: "Zero to One: Launching Products in Crisis",
    venue: "Personal Blog",
    link: "#",
  },
];

const MediaSpeaking = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Media & Speaking</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {media.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group flex items-start justify-between p-6 border border-border rounded-lg hover:shadow-lg transition-all duration-200 bg-card"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-1">{item.type}</p>
              <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-foreground/80 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.venue}</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 ml-4" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default MediaSpeaking;
