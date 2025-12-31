export default function random(initial: number, final: number): number {
  return Math.floor(Math.random() * (final - initial + 1)) + initial
}
