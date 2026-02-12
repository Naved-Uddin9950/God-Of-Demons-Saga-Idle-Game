import { useEffect } from "react";
import { FaCoins, FaBolt, FaShoppingCart } from "react-icons/fa";

import { useGenerators } from "../hooks";
import { useClickStore, useGeneratorStore, useMessageStore } from "../state";
import { formatGeneratorOutput } from "../utils";

// temporary placeholder image
const placeholder =
  "https://via.placeholder.com/80x80.png?text=Unit";

export default function Generators() {
  const clickStore = useClickStore();
  const generatorStore = useGeneratorStore();
  const generators = useGenerators();
  const messageStore = useMessageStore();

  useEffect(() => {
    generators.forEach((generator) => {
      if (generator.output.current) {
        generatorStore.setInterval(generator.id);
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-10 w-full">
      {generators.map((generator) => {
        const canBuy = clickStore.current >= generator.cost.next;

        return (
          <div
            key={generator.id}
            className="flex flex-col items-center gap-3 relative"
          >

            {/* 🖼 image */}
            <img
              src={generator.image || placeholder}
              alt={generator.label}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-purple-500/40 shadow-lg hover:scale-105 transition"
            />

            {/* name */}
            <div className="text-purple-300 font-semibold text-center">
              {generator.label}
            </div>

            {/* info */}
            <div className="text-xs text-gray-300 text-center space-y-1">
              <div>Owned: {generator.owned.toLocaleString()}</div>

              <div className="flex items-center justify-center gap-1">
                <FaBolt className="text-purple-400" />
                {formatGeneratorOutput(
                  generator.output.current,
                  generator.delay
                )}
              </div>

              <div className="text-green-400">
                Next:{" "}
                {formatGeneratorOutput(
                  generator.output.next,
                  generator.delay
                )}
              </div>

              <div className="flex items-center justify-center gap-1 text-yellow-400">
                <FaCoins />
                {generator.cost.next.toLocaleString()}
              </div>
            </div>

            {/* buy */}
            <button
              disabled={!canBuy}
              onClick={() => {
                clickStore.decrease(generator.cost.next);
                generatorStore.purchase(generator.id);

                if (generator.message) {
                  messageStore.update(generator.message);
                }
              }}
              className={`mt-1 px-4 py-1 rounded-lg text-sm font-semibold transition
              ${canBuy
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
            >
              Summon
            </button>

          </div>
        );
      })}
    </div>
  );

}
