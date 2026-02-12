import { useClickStore } from '../state';

const Counter = () => {
  const { current } = useClickStore();

  return <p>🪙{current.toLocaleString()}</p>;
}

export default Counter;