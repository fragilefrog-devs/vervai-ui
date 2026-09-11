import SpeechHeader from "@/components/brand-voice/speech/SpeechHeader";
import SpeechProfilePanel from "@/components/brand-voice/speech/SpeechProfilePanel";
import SpeechNegativeVocabulary from "@/components/brand-voice/speech/SpeechNegativeVocabulary";
import SpeechVoiceSamples from "@/components/brand-voice/speech/SpeechVoiceSamples";
import SpeechCadenceSimulator from "@/components/brand-voice/speech/SpeechCadenceSimulator";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <SpeechHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-gutter">
        <SpeechProfilePanel />
        <SpeechNegativeVocabulary />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <SpeechVoiceSamples />
        <SpeechCadenceSimulator />
      </div>
    </div>
  );
}