import { useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "@/pages/home"
import { NotFound } from "@/pages/notfound"

function App() {
  const [isLoading, setIsLoading] =  useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
