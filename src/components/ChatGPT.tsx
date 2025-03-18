
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const ChatGPT = () => {
  const { t } = useLanguage();

  return (
    <section
      id="chat"
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
            className="text-3xl md:text-4xl text-center mb-12 text-balance text-canucci-dark"
          >
            Ask us anything about what we do
          </h2>

          <div
            className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
          >
            <iframe
              src="https://chat.openai.com/g/g-67d8265dec4481919ff71e430000753f-canucci-marketing-gpt"
              className="w-full h-[600px] border-0"
              allow="microphone; camera; fullscreen"
              title="Canucci Marketing GPT"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatGPT;
