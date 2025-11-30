import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import MediaSpeaking from "@/components/MediaSpeaking";
import Bio from "@/components/Bio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <Hero />
        <FeaturedWork />
        <ExperienceTimeline />
        <MediaSpeaking />
        <Bio />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
