'use client'

export function SubmitButton() {

  return (
    <button role="button" aria-label="Verstuur contactformulier" type="submit" className="flex cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
      Versturen!
    </button>
  )
}