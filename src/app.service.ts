import { Injectable } from '@nestjs/common';
import { GameRecord, Difficulty, Ranking } from './types';

@Injectable()
export class AppService {
  private records: GameRecord[] = [];

  saveRecord(record: GameRecord): GameRecord {
    this.records.push(record);
    return record;
  }

  getRankings(difficulty: Difficulty): Ranking {
    const filteredRecords = this.records
      .filter(record => record.difficulty === difficulty)
      .sort((a, b) => a.time - b.time)
      .slice(0, 5)
      .map(({ name, time }) => ({ name, time }));

    return {
      difficulty,
      rankings: filteredRecords,
    };
  }
}
