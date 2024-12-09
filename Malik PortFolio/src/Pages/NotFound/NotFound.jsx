import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#0d0d0d]">
	<h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div class="bg-[#34D399] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button class="mt-5">
      <a
        class="relative inline-block text-sm font-medium text-[#34D399] group active:text-[#34D399] focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#34D399] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span class="relative block px-8 py-3 bg-[#0d0d0d] border border-current">
          <NavLink to="/">Go Home</NavLink>
        </span>
      </a>
    </button>
</main>
    </div>
  )
}

export default NotFound
