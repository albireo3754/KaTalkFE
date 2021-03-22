export function getTime(): string {
  const now = new Date();
  const sliceEnd = now.toLocaleTimeString().lastIndexOf(':');
  return now.toLocaleTimeString().slice(0, sliceEnd);
}
