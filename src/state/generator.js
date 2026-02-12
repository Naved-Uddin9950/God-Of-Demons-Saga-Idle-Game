import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import soulWellImage from "../assets/images/soul_well.png";
import impServantImage from "../assets/images/imp_servant.png";
import cursedGraveyardImage from "../assets/images/cursed_graveyard.png";
import demonAcolyteImage from "../assets/images/demon_acolyte.png";
import hellHoundPackImage from "../assets/images/hell_hound_pack.png";
import demonWarriorImage from "../assets/images/demon_warrior.png";
import bloodRitualCircleImage from "../assets/images/blood_ritual_circle.png";
import demonGeneralImage from "../assets/images/demon_general.png";
import abyssPortalImage from "../assets/images/abyss_portal.png";
import ancientDemonImage from "../assets/images/ancient_demon.png";
import hellFortressImage from "../assets/images/hell_fortress.png";
import soulReactorImage from "../assets/images/soul_reactor.png";
import demonTitanImage from "../assets/images/demon_titan.png";
import worldDevourerImage from "../assets/images/world_devourer.png";
import darkStarImage from "../assets/images/dark_star.png";
import demonGodImage from "../assets/images/demon_god.png";

import { calculateNextCost } from '../utils';
import { useClickStore, useMessageStore } from '.';

export const useGeneratorStore = create(
  devtools(
    persist(
      (set) => ({
        generator1: {
          label: 'Soul Well',
          message: 'A Soul Well begins harvesting lost souls.',
          image: soulWellImage,
          owned: 0,
          delay: 10,
          cost: { base: 15, next: 15, rate: 1.15 },
          output: { base: 1, next: 1, current: 0 },
        },

        generator2: {
          label: 'Imp Servant',
          message: 'Imp servants now gather souls for you.',
          image: impServantImage,
          owned: 0,
          delay: 1,
          cost: { base: 100, next: 100, rate: 1.15 },
          output: { base: 1, next: 1, current: 0 },
        },

        generator3: {
          label: 'Cursed Graveyard',
          message: 'The dead rise and serve your will.',
          image: cursedGraveyardImage,
          owned: 0,
          delay: 1,
          cost: { base: 11e2, next: 11e2, rate: 1.15 },
          output: { base: 8, next: 8, current: 0 },
        },

        generator4: {
          label: 'Demon Acolyte',
          message: 'Acolytes channel dark rituals.',
          image: demonAcolyteImage,
          owned: 0,
          delay: 1,
          cost: { base: 12e3, next: 12e3, rate: 1.15 },
          output: { base: 47, next: 47, current: 0 },
        },

        generator5: {
          label: 'Hell Hound Pack',
          message: 'Hell hounds hunt souls relentlessly.',
          image: hellHoundPackImage,
          owned: 0,
          delay: 1,
          cost: { base: 13e4, next: 13e4, rate: 1.15 },
          output: { base: 260, next: 260, current: 0 },
        },

        generator6: {
          label: 'Demon Warrior',
          message: 'Demon warriors conquer mortal realms.',
          image: demonWarriorImage,
          owned: 0,
          delay: 1,
          cost: { base: 14e5, next: 14e5, rate: 1.15 },
          output: { base: 14e2, next: 14e2, current: 0 },
        },

        generator7: {
          label: 'Blood Ritual Circle',
          message: 'Blood rituals multiply your power.',
          image: bloodRitualCircleImage,
          owned: 0,
          delay: 1,
          cost: { base: 2e7, next: 2e7, rate: 1.15 },
          output: { base: 78e2, next: 78e2, current: 0 },
        },

        generator8: {
          label: 'Demon General',
          message: 'A general commands your hell army.',
          image: demonGeneralImage,
          owned: 0,
          delay: 1,
          cost: { base: 33e7, next: 33e7, rate: 1.15 },
          output: { base: 44e3, next: 44e3, current: 0 },
        },

        generator9: {
          label: 'Abyss Portal',
          message: 'A portal to the abyss opens.',
          image: abyssPortalImage,
          owned: 0,
          delay: 1,
          cost: { base: 51e8, next: 51e8, rate: 1.15 },
          output: { base: 26e4, next: 26e4, current: 0 },
        },

        generator10: {
          label: 'Ancient Demon',
          message: 'Ancient demons awaken.',
          image: ancientDemonImage,
          owned: 0,
          delay: 1,
          cost: { base: 75e9, next: 75e9, rate: 1.15 },
          output: { base: 16e5, next: 16e5, current: 0 },
        },

        generator11: {
          label: 'Hell Fortress',
          message: 'A fortress rises in hell.',
          image: hellFortressImage,
          owned: 0,
          delay: 1,
          cost: { base: 1e12, next: 1e12, rate: 1.15 },
          output: { base: 1e7, next: 1e7, current: 0 },
        },

        generator12: {
          label: 'Soul Reactor',
          message: 'Souls are converted into raw power.',
          image: soulReactorImage,
          owned: 0,
          delay: 1,
          cost: { base: 14e12, next: 14e12, rate: 1.15 },
          output: { base: 65e6, next: 65e6, current: 0 },
        },

        generator13: {
          label: 'Demon Titan',
          message: 'A titan walks under your command.',
          image: demonTitanImage,
          owned: 0,
          delay: 1,
          cost: { base: 17e13, next: 17e13, rate: 1.15 },
          output: { base: 43e7, next: 43e7, current: 0 },
        },

        generator14: {
          label: 'World Devourer',
          message: 'Worlds begin to fall.',
          image: worldDevourerImage,
          owned: 0,
          delay: 1,
          cost: { base: 21e14, next: 21e14, rate: 1.15 },
          output: { base: 29e8, next: 29e8, current: 0 },
        },

        generator15: {
          label: 'Dark Star',
          message: 'A dark star feeds your dominion.',
          image: darkStarImage,
          owned: 0,
          delay: 1,
          cost: { base: 26e15, next: 26e15, rate: 1.15 },
          output: { base: 21e9, next: 21e9, current: 0 },
        },

        generator16: {
          label: 'Demon God',
          message: 'You ascend as Demon God.',
          image: demonGodImage,
          owned: 0,
          delay: 1,
          cost: { base: 31e16, next: 31e16, rate: 1.15 },
          output: { base: 15e10, next: 15e10, current: 0 },
        },

        purchase: (generatorId) =>
          set((state) => {
            const generator = state[generatorId];
            const { cost, output } = generator;
            const owned = ++generator.owned;

            cost.next = calculateNextCost(cost.base, cost.rate, owned);
            output.current = output.next;
            output.next = Math.round(output.base * (owned + 1));

            state.setInterval(generatorId);

            return state;
          }),

        setInterval: (generatorId) =>
          set((state) => {
            const generator = state[generatorId];

            if (generator.intervalId) {
              clearInterval(generator.intervalId);
            }

            generator.intervalId = setInterval(() => {
              useClickStore.getState().increase(generator.output.current);
              useMessageStore.getState().update();
            }, generator.delay * 1000);

            return state;
          }),
      }),

      {
        name: 'generator-storage',
      },
    ),
  ),
);
