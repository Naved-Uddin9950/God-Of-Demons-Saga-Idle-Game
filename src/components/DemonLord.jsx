import { useCallback } from 'react';
import demonLordImage from '../assets/images/demon_lord.png';
import { FaArrowUp, FaSkull, FaCoins, FaBolt } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";

import { useClickStore, useCursorStore, useMessageStore } from '../state';

const DemonLord = ({ containerStyles }) => {
  const clickStore = useClickStore();
  const cursorStore = useCursorStore();
  const messageStore = useMessageStore();

  const handleClick = useCallback(() => {
    clickStore.increase(cursorStore.output.current);
    messageStore.update();
  }, []);

  const handleUpgrade = useCallback(() => {
    clickStore.decrease(cursorStore.cost.next);
    cursorStore.purchase();
    messageStore.update(cursorStore.message);
  }, []);

  return (
    <div className={`relative inline-block ${containerStyles}`}>

      {/* 🔼 Upgrade icon */}
      <button
        disabled={clickStore.current < cursorStore.cost.next}
        onClick={handleUpgrade}
        className="absolute -top-2 -right-2 z-20 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 shadow-lg border border-purple-300/30 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
        title="Upgrade"
      >
        <FaArrowUp size={14} />
      </button>

      {/* 👹 Main Button */}
      <img
        onClick={handleClick}
        title="Click Button"
        src={demonLordImage}
        alt="Click Button"
        className="border rounded-full shadow-lg w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 cursor-pointer transition-transform active:scale-95 hover:scale-105"
      />
    </div>
  );
}

export default DemonLord;