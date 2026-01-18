export type UserDoc = {
  currency: string;
  startingBalance: number;
  onboardingCompleted: boolean;
};

export type Users = UserDoc[];
