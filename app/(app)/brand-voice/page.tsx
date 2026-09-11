import BrandVoiceHeader from "@/components/brand-voice/BrandVoiceHeader";
import VoiceProfilePanel from "@/components/brand-voice/VoiceProfilePanel";
import NegativeVocabulary from "@/components/brand-voice/NegativeVocabulary";
import VoiceSamples from "@/components/brand-voice/VoiceSamples";
import CadenceSimulator from "@/components/brand-voice/CadenceSimulator";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <BrandVoiceHeader />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <VoiceProfilePanel />
        <NegativeVocabulary />
        <VoiceSamples />
        <CadenceSimulator />
      </div>
    </div>
  );
}