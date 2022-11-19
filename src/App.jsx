import { Box } from "@mui/material"
import { createReactRouter, createRouteConfig, RouterProvider } from "@tanstack/react-router"
import { Navbar } from "./components"
import { ChannelDetail, Home, VideoDetail } from "./pages"

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    component: Home,
  }),
  createRoute({
    path: "/video/:videoId",
    component: VideoDetail,
  }),
  createRoute({
    path: "/channel/:channelId",
    component: ChannelDetail,
  }),
])

const router = createReactRouter({ routeConfig })

function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
    </Box>
  )
}

export default App
