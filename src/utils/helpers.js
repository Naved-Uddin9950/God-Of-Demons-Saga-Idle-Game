export const calculateNextCost = (base, rate, owned) =>
  Math.floor(base * Math.pow(rate, owned));

export const formatGeneratorOutput = (clicks, seconds) =>
  `${clicks.toLocaleString()} ${clicks === 1 ? 'click' : 'clicks'} per ${seconds.toLocaleString()} ${
    seconds === 1 ? 'second' : 'seconds'
  }`;
