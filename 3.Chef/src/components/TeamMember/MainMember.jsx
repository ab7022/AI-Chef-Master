import MainMemberinfo from "../../Data/MainMemberInfo"


const MainMember = () => {
  return (
    <div className="bg-[#0C0C11]   text-white "> 
        <div className="text-center font-bold text-4xl">
            MEET <span className=" !font-montez">the</span> TEAM
           
        </div>
        <div className="text-center text-[#BCBCBC] text-lg font-medium"> <span>responsible for making the magic happen</span></div>

        <div>
            <ul className="flex  items-center justify-center py-24 gap-10">
                {
                    MainMemberinfo.map((item,index) => {
                        return (
                            <li key={index} className="text-center">
                                <div className="bg-gradient-to-b rounded-full from-blue-500 to-zinc-800 p-2">
                                <img src={item.img} alt="team member image" className=" h-40 w-40 rounded-full" />
                                </div>
                            ``
                                <p>{item.name}</p>
                                <p>{item.role}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default MainMember
