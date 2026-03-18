import type { Category } from "./categories";

export type CategoryForm = Omit<Category, "id">;
