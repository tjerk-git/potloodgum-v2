
import Card from "./card";
import Marquee from "./marquee";
import Image from "next/image";
import Link from "next/link";
import { SubmitButton } from "./submitButton";
import { submit } from '@/app/actions'

export default function Home() {
  return (

    <main>
      <section className="w-full border-b-8 border-black p-5">
        <h1 className="text-5xl uppercase w-full lg:w-1/2 lg:text-8xl">Jouw verhaal gratis<span className="text-indigo-600">*</span> online</h1>
      </section>
      <section className="p-5 border-b-8 border-black w-full">
        <div className="flex flex-col lg:flex-row w-full gap-10" >
          <Card heading={"Ontworpen voor iedereen"} paragraph={"Digibeet, dyslectisch, kleurenblind, slechtziend een website moet door iedereen te gebruiken zijn."} background={"background-coral"}></Card>
          <Card heading={"Goede doelen, goede websites"} paragraph={"Elke website heeft een doel, tijd en aandacht is kostbaar, sommige mensen noemen het minimalisme. Ik noem het mensgericht ontwerpen."} background={"background-white"}></Card>
          <Card heading={"Privacy als standaard"} paragraph={"Geen marketing cookies en andere invasieve tracking mogelijkheden, websites zijn een openbare ruimte waarin je niet stiekem bespioneerd wordt."} background={"background"}></Card>
          <Card heading={"Duurzaam"} paragraph={"Websites kosten energie, ik ga daar in het ontwerp en techniek zuinig mee om."} background={"background-coral"}></Card>
        </div>
      </section>
      <section className="p-5  w-full">
        <Marquee items={["Potloodgum", "Werk van", "Potloodgum", "Werk van", "Potloodgum", "Werk van"]}></Marquee>
      </section>
      <section className="items-center flex p-5 border-b-8 border-black w-full gap-10 place-content-evenly">
        <Link target="_blank" href="https://hamaki.pro"><Image src="/hamaki.webp" width={100} height={100} alt="Potloodgum" /></Link>
        <Link target="_blank" href="https://sneup.it"><Image src="/sneup.webp" width={130} height={130} alt="Sneup logo" /></Link>
        <Link target="_blank" href="https://sprint.cards"><Image src="/sprint.webp" width={100} height={100} alt="Sprint cards" /></Link>
      </section>
      <section id="contact">
        {/* <form action={submit}>
          <input type="text" name="field-name" className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none" />
          <input type="email" required name="field-email" className="rounded-md border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none" />
          <SubmitButton />
        </form> */}
      </section>
    </main>
  )
}
