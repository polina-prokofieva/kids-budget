export type Category = {
  id: string;
  name: string;
  description?: string;
  color: string;
  start: Date;
  end: Date;
  isRegular: boolean;
  amount: number;
};
