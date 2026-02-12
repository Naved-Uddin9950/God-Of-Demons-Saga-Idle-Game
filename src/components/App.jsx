import { useEffect } from 'react';
import { initTWE, Ripple } from 'tw-elements';

import DemonLord from './DemonLord';
import Generators from '../components/Generators';
import Header from './Header';
import { useMessageStore } from '../state';
import { notify } from '../utils/notification';

export default function App() {
  const { message } = useMessageStore();

  useEffect(() => {
    initTWE({ Ripple });
  }, []);

  useEffect(() => {
    notify({ message, type: 'info' });
  }, [message]);

  return (
    <main className="bg-gray-900 h-screen w-full">
      <Header />

      <section className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row gap-4 px-3 sm:px-4 py-3 overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-full bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-xl overflow-y-auto p-3 sm:p-4">
          <h2 className="text-purple-400 font-bold mb-3 text-center text-sm sm:text-base">
            Demon Lord Army
          </h2>

          <Generators />
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 sm:h-[60vh] md:h-full bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-xl overflow-y-auto p-3 sm:p-4 flex items-center justify-center">
          <DemonLord />
        </div>
      </section>
    </main>
  );
}
