export default function SideBar({ isOpen, lightMode }) {
  console.log(isOpen);

  const darkColors = {
    background: "bg-gray-800",
    text: "text-white",
    hoverBackground: "hover:bg-gray-700",
    hoverText: "hover:text-gray-200",

    btnbg: "bg-gray-700"
  };

  const lightColors = {
    background: "bg-[#00544f]",
    text: "text-white",
    hoverBackground: "hover:bg-[#022a28]",
    hoverText: "hover:text-gray-200",
    btnbg: "bg-green-800"
  };

  const colors = lightMode ? lightColors : darkColors;

  return (
    <div className={`fixed top-[56px] left-0 xl:relative flex flex-col xl:w-1/5 h-[calc(100dvh-56px)] xl:h-auto xl:mt-[-56px] overflow-y-auto ${colors.background} ${colors.text}  text-white shadow-2xl `}>
      <div className="flex flex-row justify-center items-center gap-2 mt-4" >
        <input type="text" name="search" id="" placeholder="Search..." className="p-2 text-black rounded m-1 w-2/3" />
        <button className={`${colors.btnbg}  p-2 rounded text-base`}>Search</button>
      </div>

      <ul className="">
        <h4 className="text-2xl font-bold text-center mt-4 mb-2 ">All Dishes</h4>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>
          Chicken biryani
        </li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken curry</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken 65</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken fry</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>
          Chicken lollipop
        </li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>
          Chicken lollipop
        </li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken soup</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken curry</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken 65</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken fry</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>
          Chicken lollipop
        </li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken kebab</li>
        <li className={`tracking-wider ${colors.hoverBackground} p-2 border-b border-gray-700`}>Chicken soup</li>
        <li className="text-center mt-4">End Of List</li>
      </ul>
    </div>
  );
}
