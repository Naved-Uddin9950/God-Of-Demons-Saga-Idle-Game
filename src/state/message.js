import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { useClickStore } from './click';

export const useMessageStore = create(
  devtools(
    persist(
      (set) => ({
        message: 'Welcome to God Of Demons Saga.',

        messages: {
          1: 'The clicking has commenced...',
          1e1: 'The button has been clicked ten times.',
          1e2: 'The button has been clicked one hundred times.',
          1e3: 'The button has been clicked one thousand times.',
          1e4: 'The button has been clicked ten thousand times.',
          1e5: 'The button has been clicked one hundred thousand times.',
          1e6: 'The button has been clicked one million times.',
          1e7: 'The button has been clicked ten million times.',
          1e8: 'The button has been clicked one hundred million times.',
          1e9: 'The button has been clicked one billion times.',
          1e10: 'The button has been clicked ten billion times.',
          1e12: 'The button has been clicked one hundred billion times.',
          1e13: 'The button has been clicked one trillion times.',
          1e14: 'The button has been clicked ten trillion times.',
          1e15: 'The button has been clicked one hundred trillion times.',
          1e16: 'The button has been clicked one quadrillion times.',
          1e17: 'The button has been clicked ten quadrillion times.',
          1e18: 'The button has been clicked one hundred quadrillion times.',
          1e19: 'The button has been clicked one quitillion times.',
          1e20: 'The button has been clicked ten quitillion times.',
          1e21: 'The button has been clicked one hundred quitillion times.',
          1e22: 'The button has been clicked one sextillion times.',
        },

        update: (message) =>
          set((state) => {
            if (message) {
              return { message };
            }

            const { total } = useClickStore.getState();
            if (state.messages[total]) {
              const message = state.messages[total];
              delete state.messages[total];
              return { message };
            }

            for (const messageKey in state.messages) {
              const messageId = Number(messageKey);

              if (total >= messageId) {
                const message = state.messages[messageId];
                delete state.messages[messageId];
                return { message };
              }
            }

            return state;
          }),
      }),

      {
        name: 'message-storage',
      },
    ),
  ),
);
