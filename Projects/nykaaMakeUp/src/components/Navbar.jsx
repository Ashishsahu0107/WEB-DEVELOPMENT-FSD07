import React from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'

const Navbar = () => {
  const navItems = ['Categories', 'Brands', 'Luxe', 'Nykaa Fashion', 'Beauty Advice']

  return (
    <header className="border-b border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex min-h-16 max-w-[1160px] items-center gap-6 px-4">
        <a
          href="#home"
          className="text-3xl font-black italic tracking-tight text-[#fc2779]"
          aria-label="Nykaa home"
        >
          NYKAA
        </a>

        <nav className="hidden flex-1 items-center gap-8 text-sm font-bold text-[#171426] lg:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-[#fc2779]" href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <label className="hidden h-10 w-[248px] items-center gap-3 rounded bg-[#f4f4f6] px-3 text-[#6f6f78] md:flex">
            <FiSearch className="text-xl" />
            <input
              className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-[#77777f]"
              placeholder="Search on Nykaa"
              type="search"
            />
          </label>

          <button className="rounded-lg bg-[#e80071] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#c90062]">
            Sign in
          </button>

          <button
            className="grid size-10 place-items-center rounded-full text-[#171426] transition hover:bg-gray-100"
            aria-label="Shopping bag"
          >
            <FiShoppingBag className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  )
}

//  http://makeup-api.herokuapp.com/api/v1/products

export default Navbar
