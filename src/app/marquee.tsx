"use client"

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden bg-white font-bold">
      <div className="animate-marquee whitespace-nowrap">
        {items.map((item, index) => {
          return (
            <span key={index} className="mx-4 text-4xl uppercase">
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap  ">
        {items.map((item, index) => {
          return (
            <span key={index} className="mx-4 text-4xl uppercase">
              {item}
            </span>
          )
        })}
      </div>

    </div>

  )
}
