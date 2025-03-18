
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const ChatGPT = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      if (titleRef.current) titleRef.current.classList.add("animate-slideDown");
      
      setTimeout(() => {
        if (iframeRef.current) iframeRef.current.classList.add("animate-fadeIn");
      }, 300);
    }
  }, [inView]);

  return (
    <section
      id="chat"
      ref={sectionRef}
      className="section-padding relative bg-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-0 w-80 h-80 bg-canucci-salmon/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-canucci-peach/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={titleRef}
            className="opacity-0 text-3xl md:text-4xl text-center mb-12 text-balance text-canucci-dark"
          >
            Ask us anything about what we do
          </h2>

          <div
            ref={iframeRef}
            className="opacity-0 aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden"
          >
            <iframe
              src="https://chatgpt.com/g/g-67d8265dec4481919ff71e430000753f-canucci-marketing-gpt"
              className="w-full h-[600px] border-0"
              allow="microphone; camera; fullscreen"
              title="Canucci Marketing GPT"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatGPT;
