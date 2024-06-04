// sort-imports-ignore
import React from "react"
import ReactDOM from "react-dom/client"

import { RouterProvider, createRouter } from "@tanstack/react-router"

import "@fontsource/inter/100.css"
import "@fontsource/inter/200.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"
import "@fontsource/inter/900.css"

import "./index.css"

import { routeTree } from "./routeTree.gen"

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
