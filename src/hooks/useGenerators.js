import { useGeneratorStore } from '../state';

export function useGenerators() {
  const generatorStore = useGeneratorStore();

  return Object.keys(generatorStore)
    .filter((generatorId) => /^generator\d+$/.test(generatorId))
    .map((generatorId) => ({
      id: generatorId,
      ...generatorStore[generatorId],
    }));
}
