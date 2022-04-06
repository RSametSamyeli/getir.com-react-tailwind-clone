import React from 'react'

export default function Menu({ title, items }) {
  return (
    <section>
      <nav className="grid gap-y-4">
        <h6 className="text-lg text-primary-brand-color font-semibold">
          {title}
        </h6>
        <nav className="">
          <ul className="grid gap-y-2">
            {items.map((item, key) => (
              <li
                key={key}
                className=" text-gray-600  text-sm hover:text-brand-color tracking-widest"
              >
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  )
}
