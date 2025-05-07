"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Loader2, RotateCcw } from "lucide-react";

import { FC, useState } from "react";
import { containerVariants, itemVariants } from "@/lib/constants";
import useCreativeAIStore from "@/store/useCreateivAIStroe";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  onBack: () => void;
};

const CreativeAI = ({ onBack }: Props) => {
  const router = useRouter();
  const [editingCard, seteditingCard] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isGenerating, setIsGnerating] = useState(false);
  const [editText, setEditText] = useState("");
  const [noOfCards, setNoOfCards] = useState(0);
  const { currentAiPrompt, setCurrentAiPrompt, outlines, resetOutlines } =
    useCreativeAIStore();

  const handleBack = () => {
    onBack(); // Set page back to "create"
  };
  const resetCards = () => {
    seteditingCard(null);
    setSelectedCard(null);
    setEditText("");

    setCurrentAiPrompt("");
    resetOutlines();
  };

  //const generateOutline = () => {}

  return (
    <motion.div
      className="space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Button onClick={handleBack} variant="outline" className="mb-4">
        <ChevronLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
      {/* After the back button: */}
      <motion.div variants={itemVariants} className="space-y-2 text-center">
        <h1 className="text-4xl font-bold text-primary">
          Generate with <span className="text-vivid">Creative AI</span>
        </h1>
        <p className="text-secondary">What would you like to create today?</p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-primary/10 p-4 rounded-xl"
      >
        <div className="flex flex-col sm:flex-row justify-between gap-3 items-center rounded-xl">
          <input
            required
            placeholder="Enter Prompt and add to the cards..."
            className="text-base sm:text-xl border-0 focus-visible:ring-0 shadow-none p-0 bg-transparent flex-grow"
            value={currentAiPrompt}
            onChange={(e) => setCurrentAiPrompt(e.target.value)}
          />

          <div className="flex items-center gap-3">
            <Select
              value={noOfCards.toString()}
              onValueChange={(val) => setNoOfCards(parseInt(val))}
            >
              <SelectTrigger className="w-fit gap-2 font-semibold shadow-xl">
                <SelectValue placeholder="Select number of cards" />
              </SelectTrigger>
              <SelectContent className="w-fit">
                {outlines.length === 0 ? (
                  <SelectItem value="0">No Cards</SelectItem>
                ) : (
                  Array.from(
                    { length: outlines.length },
                    (_, idx) => idx + 1
                  ).map((num) => (
                    <SelectItem
                      key={num}
                      value={num.toString()}
                      className="font-semibold"
                    >
                      {num} {num === 1 ? "Card" : "Cards"}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>

            <Button
              variant="destructive"
              onClick={resetCards}
              size="icon"
              aria-label="Reset cards"
            >
              <RotateCcw className="h-4 w-4"></RotateCcw>
            </Button>
          </div>
        </div>
      </motion.div>
      <div className="w-full flex justify-center items-center">
        <Button
          className="font-medium text-lg flex gap-2 items-center"
          disabled={isGenerating}
        >
          {isGenerating ? (
            <>
              <Loader2 className="animate-spin mr-2" />
            </>
          ) : (
            "Generate Outline"
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default CreativeAI;
