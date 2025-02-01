import ExpandableFAQ from "@/components/ui/faq/expandable-faq";

export default function FAQSection() {
  return (
    <div className="w-full space-y-3 rounded-lg bg-[#111827] p-6">
      <h2 className="mb-6 text-2xl font-semibold text-[#2DD4BF]">
        Getting Started
      </h2>
      <ExpandableFAQ
        question="What are the minimum system requirements?"
        answer="Windows 10, 8GB RAM, GTX 1060 or better, 50GB storage space. Mac users need OS 10.15 or newer."
        defaultOpen
      />
      <ExpandableFAQ
        question="How do I download and install the game?"
        answer="Visit our downloads page, select your platform, and follow the installation wizard instructions."
      />
    </div>
  );
}
