/** Field names match Django `AthleteTest` model (capstone API). */

export type TestFieldKey =
  | "sprint_40yd"
  | "sprint_30m"
  | "flying_sprint"
  | "accel_10m"
  | "split_5m"
  | "split_10m"
  | "split_20m"
  | "agility_t"
  | "shuttle_run"
  | "lateral_agility"
  | "illinois_agility"
  | "beep_level"
  | "cooper_test"
  | "interval_run"
  | "vertical_jump"
  | "broad_jump"
  | "medicine_ball_throw"
  | "push_ups"
  | "sit_ups"
  | "plank"
  | "lunges"
  | "box_jump";

export const TEST_FIELD_LABELS: Record<TestFieldKey, string> = {
  sprint_40yd: "40-yard dash",
  sprint_30m: "30 m sprint",
  flying_sprint: "Flying sprint",
  accel_10m: "10 m acceleration",
  split_5m: "5 m split",
  split_10m: "10 m split",
  split_20m: "20 m split",
  agility_t: "T-test",
  shuttle_run: "Shuttle run",
  lateral_agility: "Lateral agility",
  illinois_agility: "Illinois agility",
  beep_level: "Beep test level",
  cooper_test: "Cooper test",
  interval_run: "Interval run",
  vertical_jump: "Vertical jump",
  broad_jump: "Broad jump",
  medicine_ball_throw: "Medicine ball throw",
  push_ups: "Push-ups",
  sit_ups: "Sit-ups",
  plank: "Plank",
  lunges: "Lunges",
  box_jump: "Box jump",
};

export const TEST_FIELD_GROUPS: { title: string; keys: TestFieldKey[] }[] = [
  {
    title: "Speed & splits",
    keys: [
      "sprint_40yd",
      "sprint_30m",
      "flying_sprint",
      "accel_10m",
      "split_5m",
      "split_10m",
      "split_20m",
    ],
  },
  {
    title: "Agility",
    keys: ["agility_t", "shuttle_run", "lateral_agility", "illinois_agility"],
  },
  {
    title: "Endurance",
    keys: ["beep_level", "cooper_test", "interval_run"],
  },
  {
    title: "Power & jumps",
    keys: ["vertical_jump", "broad_jump", "medicine_ball_throw", "box_jump"],
  },
  {
    title: "Strength & conditioning",
    keys: ["push_ups", "sit_ups", "plank", "lunges"],
  },
];

export const ALL_TEST_KEYS: TestFieldKey[] = TEST_FIELD_GROUPS.flatMap((g) => g.keys);
