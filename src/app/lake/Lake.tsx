import React from 'react'

export default function Lake() {
  return (
    <div className="relative w-full h-screen bg-cover bg-no-repeat bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:bg-black after:opacity-50"
    style={{ backgroundImage: "url('assets/lake-bg.jpg')" }}></div>
  )
}
