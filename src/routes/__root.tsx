import React, { Suspense } from "react"

import { Outlet, createRootRoute } from "@tanstack/react-router"

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />

      <Suspense>
        <TanStackRouterDevtools position="top-right" />
      </Suspense>
    </>
  ),
})
