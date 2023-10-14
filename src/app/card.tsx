type Props = {
  heading: string
  paragraph: string
  background: string
}

export default function Card({ heading, paragraph, background }: Props) {

  const extraClass = " rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";

  return (
    <div className={background + extraClass}>
      <div className="border-b-2 border-black p-4">
        <h2 className="text-lg">{heading}</h2>
      </div>
      <div className="p-4">
        <p>{paragraph}</p>
      </div>
    </div>
  )
}
