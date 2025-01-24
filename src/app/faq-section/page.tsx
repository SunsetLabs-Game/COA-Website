import ExpandableFAQ from "../../components/ExpandableFAQ";

export default function FAQSection() {
    return (
      <div className="w-full space-y-2 rounded-lg bg-slate-950 p-4">
        <h2 className="mb-4 text-xl font-semibold text-cyan-400">Getting Started</h2>
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
    )
  }
  
  