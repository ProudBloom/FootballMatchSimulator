export type MatchData = {
  id: number;
  teams: string[];
  scores: number[];
};

export type MatchProps = {
  matchData: MatchData;
};
