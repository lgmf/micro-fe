import { INCREMENT } from './Types';

export default function IncrementEvent() {
  return new CustomEvent(INCREMENT);
}