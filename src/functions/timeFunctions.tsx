export function getTimePeriod(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const remainingSeconds = seconds - (hours * 3600) - (minutes * 60);

  let time = '';

  if (hours > 0) {
    time += hours.toString().padStart(2, '0') + ':';
  }

  if (minutes > 0 || hours > 0) {
    time += minutes.toString().padStart(2, '0') + ':';
  }

  time += remainingSeconds.toString().padStart(2, '0');

  return time;
}

export function dropHighscore() {
  localStorage.setItem("highscore", "0");
}

export function saveTime(time: number) {
  const stringified = JSON.stringify(time);
  localStorage.setItem("time", stringified);
}

export function getTime(): number {
  const timeString = localStorage.getItem("time");
  return JSON.parse(timeString || "0");
}

export function saveRunning(running: boolean) {
  const stringified = JSON.stringify(running);
  localStorage.setItem("running", stringified);
}

export function getRunning(): boolean {
  const running = localStorage.getItem("running");
  return JSON.parse(running || "false");
}

export function saveHighscore(score: number) {
  if (getHighscore() < score) {
    const stringified: string = JSON.stringify(score);
    localStorage.setItem("highscore", stringified);
  }
}

export function getHighscore(): number {
  const highscoreString = localStorage.getItem("highscore");
  return JSON.parse(highscoreString || "0");
}