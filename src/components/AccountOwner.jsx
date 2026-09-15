export default function AccountOwner({ onShowPopup }) {
  return (
    <section className="px-5 sm:px-8 py-4 sm:py-6" data-aos="fade-up" data-aos-delay="50">
      <p className="text-[13px] sm:text-[14px] text-gray-900 font-bold mb-1">
        Account owner
      </p>
      <p 
        className="text-[26px] sm:text-[30px] text-[#9b1b22] mb-1"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Daniel R. Caine
      </p>
      <a href="#" onClick={(e) => { e.preventDefault(); onShowPopup?.(); }} className="text-[13px] sm:text-[14px] text-[#064789] hover:underline">
        Manage account nickname
      </a>
    </section>
  )
}
