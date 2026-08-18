import { LoadingScreen } from "@/components/loading-screen"
import { MyFirstAmazonInterview } from "@/pages/blog/my-first-amazon-interview"
import { ClaudeTextWatermark } from "@/pages/blog/claude-text-watermark"
import { Home } from "@/pages/home"
import { NotFound } from "@/pages/notfound"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="blog/my-first-amazon-interview" element={<MyFirstAmazonInterview />} />
          <Route path="blog/claude-text-watermark" element={<ClaudeTextWatermark />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
