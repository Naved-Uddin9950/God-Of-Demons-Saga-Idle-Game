import Counter from "./Counter";
import { FaArrowUp, FaCoins, FaBolt } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";
import { useCursorStore } from "../state";

const Header = () => {
  const cursorStore = useCursorStore();

  return (
    <header className="
      bg-neutral-900 border-b border-purple-500/20
      px-3 sm:px-5 md:px-8
      py-2 sm:py-3
      font-mono text-gray-100 shadow-lg
    ">

      {/* MAIN ROW */}
      <div className="flex items-center justify-between gap-3">

        {/* 🪙 coins */}
        <div className="scale-90 sm:scale-100">
          <Counter />
        </div>

        {/* 📊 compact stats */}
        <div className="
          flex items-center gap-3
          text-[11px] sm:text-sm md:text-base
          whitespace-nowrap
        ">

          {/* level */}
          <div className="flex items-center gap-1">
            <GiUpgrade className="text-purple-400" />
            <span className="text-purple-300 font-semibold">
              {(cursorStore.owned - 1).toLocaleString()}
            </span>
          </div>

          {/* cost */}
          <div className="flex items-center gap-1">
            <FaCoins className="text-yellow-400" />
            <span className="text-yellow-300 font-semibold">
              {cursorStore.cost.next.toLocaleString()}
            </span>
          </div>

          {/* power */}
          <div className="flex items-center gap-1">
            <FaBolt className="text-purple-300" />
            <span className="font-semibold">
              {cursorStore.output.current.toLocaleString()}
            </span>
          </div>

          {/* next */}
          <div className="flex items-center gap-1">
            <FaArrowUp className="text-green-400" />
            <span className="text-green-300 font-semibold">
              {cursorStore.output.next.toLocaleString()}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
