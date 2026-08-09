import { LoadingScreen } from "@/components/loading-screen"
import { TestPage } from "@/pages/blog/test"
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
          <Route path="blog/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
