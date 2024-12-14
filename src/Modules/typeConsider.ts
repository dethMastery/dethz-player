export function TypeConsider(ext: string): number {
  const videoExt = ["mp4", "webm"];
  const audioExt = ["wav", "mp3"];

  if (videoExt.includes(ext)) {
    return 1;
  } else if (audioExt.includes(ext)) {
    return 2;
  } else {
    return 0;
  }
}
