import {
  Signal,
  Wifi,
  BatteryFull,
} from 'lucide-react'

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-1 bg-[#D71E28] text-white">
      <span className="text-[13px] font-semibold tracking-wide">9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal size={13} strokeWidth={2.5} />
        <Wifi size={13} strokeWidth={2.5} />
        <BatteryFull size={15} strokeWidth={2.5} />
      </div>
    </div>
  )
}
