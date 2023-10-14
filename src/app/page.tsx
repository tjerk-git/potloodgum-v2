import Accordion from "./accordion";
import Card from "./card";
import Marquee from "./marquee";


export default function Home() {
  return (

    <main>
      <section className="w-full border-b-8 border-black p-5">
        <h1 className="text-5xl uppercase w-full lg:w-1/2 lg:text-8xl">Jouw verhaal gratis<span className="text-indigo-600">*</span> online</h1>
      </section>
      <section className="p-5 border-b-8 border-black w-full">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <Card heading={"Ontworpen voor iedereen"} paragraph={"Digibeet, dyslectisch, kleurenblind, slechtziend een website moet door iedereen te gebruiken zijn."} background={"background-coral"}></Card>
          <Card heading={"Goede doelen, goede websites"} paragraph={"Elke website heeft een doel, tijd en aandacht is kostbaar, sommige mensen noemen het minimalisme. Ik noem het mensgericht ontwerpen."} background={"background-white"}></Card>
          <Card heading={"Privacy als standaard"} paragraph={"Geen marketing cookies en andere invasieve tracking mogelijkheden, websites zijn een openbare ruimte waarin je niet stiekem bespioneerd wordt."} background={"background"}></Card>
          <Card heading={"Duurzaam"} paragraph={"Websites kosten energie, ik ga daar in het ontwerp en techniek zuinig mee om."} background={"background-coral"}></Card>
        </div>
      </section>
      <section className="p-5 border-b-8 border-black w-full">
        <Marquee items={["Potloodgum", "Potloodgum", "Potloodgum", "Potloodgum", "Potloodgum", "Potloodgum"]}></Marquee>
      </section>
      <section id="contact" className="p-5 border-b-8 border-black w-full">

      </section>
    </main>
  )
}
