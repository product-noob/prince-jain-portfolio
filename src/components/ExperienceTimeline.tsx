import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    id: "flipkart",
    period: "Apr 2022 – Present",
    company: "Flipkart",
    role: "Group Product Manager",
    details: [
      "Leading Flipkart's AI-commerce charter across multiple surfaces",
      "Built Flippi GenAI Assistant (3M+ MAU, 5% assisted conversions)",
      "Designed LLM evaluation frameworks and fine-tuning pipelines",
      "Drove Rs. 3,000 Cr GMV uplift through payment funnel optimization",
      "Received 'Business Excellence' award (1 product team annually)",
    ],
  },
  {
    id: "paytm",
    period: "May 2019 – Mar 2022",
    company: "Paytm",
    role: "Senior Product Manager",
    details: [
      "Spearheaded Mini Apps Platform (600+ apps, 10M+ MAU)",
      "Built developer suite reducing integration time by 70%",
      "Launched Covid-19 Vaccine Finder in 2 weeks (10M+ users)",
      "Partnered with NHA to build Unified Health Interface (UHI)",
      "Rated 'Significantly Exceeds Expectations' in all appraisals",
    ],
  },
  {
    id: "oracle",
    period: "Aug 2015 – May 2017",
    company: "Oracle (OFSAA)",
    role: "Software Developer",
    details: [
      "Engineered core Java/SQL components for banking regulatory standards",
      "Designed automation utility boosting team productivity by 20%",
      "Rated among Top 10% performers for product contributions",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Experience</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {experiences.map((exp) => (
          <AccordionItem 
            key={exp.id} 
            value={exp.id}
            className="border border-border rounded-lg px-6 bg-card"
          >
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-left w-full pr-4">
                <span className="text-sm font-medium text-muted-foreground min-w-[140px]">
                  {exp.period}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <ul className="space-y-2 ml-0 md:ml-[156px]">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-muted-foreground flex gap-3">
                    <span className="text-foreground mt-1.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ExperienceTimeline;
