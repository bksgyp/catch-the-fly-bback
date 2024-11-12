export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameRecord {
  name: string;
  difficulty: Difficulty;
  time: number;
}

export interface Ranking {
  difficulty: Difficulty;
  rankings: Array<{ name: string; time: number }>;
} 