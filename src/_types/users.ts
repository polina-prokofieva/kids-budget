export type UserDoc = {
  currency: string;
  startingBalance: number;
  onboardingCompleted: boolean;
  createdAt: string | null;
  updatedAt: string | null;
};

export type Users = UserDoc[];
