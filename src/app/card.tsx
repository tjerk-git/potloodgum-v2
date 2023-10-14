type Props = {
  heading: string
  paragraph: string
}

export default function Card({ heading, paragraph }: Props) {

  const colors = ["-pink-500", "-red-500", "-yellow-500"];

  return (
    <div className="
    bg-gradient-to-r
    from{colors[0]}
    via{colors[0]}
    to{colors[0]}
    background-animate
    rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-2 border-black p-4">
        <h2 className="text-lg">{heading}</h2>
      </div>
      <div className="p-4">
        <p>{paragraph}</p>
      </div>
    </div>
  )
}
