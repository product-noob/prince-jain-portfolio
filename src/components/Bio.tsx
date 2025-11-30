import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Bio = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">About</h2>
      <Tabs defaultValue="short" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="short">Short Bio</TabsTrigger>
          <TabsTrigger value="long">Long Bio</TabsTrigger>
        </TabsList>
        <TabsContent value="short" className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed text-lg">
            Product Builder with engineering roots and a track record of shipping high-impact 0-to-1 products. 
            Currently leading Flipkart's GenAI & Agentic Commerce initiatives, including a 3M+ MAU conversational 
            AI assistant. Previously built Paytm's Mini Apps Platform (10M+ MAU) and launched the Covid-19 
            Vaccine Finder in just 2 weeks during the pandemic.
          </p>
        </TabsContent>
        <TabsContent value="long" className="prose prose-lg max-w-none">
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Product Builder with engineering roots and a proven track record of shipping high-impact 
              0-to-1 products. Currently serving as Group Product Manager at Flipkart, where I'm leading 
              the company's AI-commerce charter across multiple surfaces.
            </p>
            <p>
              My journey in product management has been marked by significant milestones: I evolved Flipkart's 
              GenAI Assistant (Flippi) from rule-based flows to sophisticated LLM-chained workflows, scaling 
              it to 3M+ monthly active users with 5% assisted conversions. I'm also driving the 0-to-1 
              development of an AI-native shopping app using agentic workflows and multimodal reasoning.
            </p>
            <p>
              At Paytm, I spearheaded the creation of the Mini Apps ecosystem, scaling it to 600+ merchant 
              apps and 10M+ MAU, which powered 60% of Paytm's first-party app traffic. During the pandemic, 
              I conceptualized and launched the Covid-19 Vaccine Finder in just 2 weeks, which scaled to 10M+ 
              users and facilitated 3M+ bookings.
            </p>
            <p>
              I hold an MBA from Faculty of Management Studies (FMS), Delhi, and a B.Tech from National 
              Institute of Technology (NIT), Jaipur. My work has been recognized with multiple awards, 
              including Flipkart's "Business Excellence" award and consistently exceeding expectations 
              in performance reviews.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Bio;
