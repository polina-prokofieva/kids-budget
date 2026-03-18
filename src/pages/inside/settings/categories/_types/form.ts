import type { Category } from "./categories";

export type CategoryFormValues = Omit<Category, "id" | "start" | "end">;
