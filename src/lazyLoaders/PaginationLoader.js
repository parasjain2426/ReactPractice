import { lazy } from "react";

export const PaginationLoader = lazy(() =>
  import("../containers/PageContainer")
);
