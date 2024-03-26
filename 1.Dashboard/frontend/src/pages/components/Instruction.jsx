import { useState } from 'react'
import { IoIosClose } from 'react-icons/io'

const Instruction = ({ formData, setFormData, portion }) => {
    const [newInstruction, setNewInstruction] = useState("");
    const [instructionTime, setInstructionTime] = useState("");

    const addInstruction = () => {
        if (newInstruction && instructionTime) {
            const newInstructionItem = {
                step: newInstruction,
                instruction_video_url: "",
                time: instructionTime
            };

            setFormData((prevForm) => ({
                ...prevForm,
                instructions: [...prevForm.instructions, newInstructionItem],
            }));

            localStorage.setItem("formData", JSON.stringify({
                ...formData,
                instructions: [...formData.instructions, newInstructionItem],
            }));

            setNewInstruction("");
            setInstructionTime("");
        }
    };

    const removeInstruction = (index) => {
        const updatedInstructions = formData.instructions.filter(
            (_, i) => i !== index
        );

        setFormData((prevForm) => ({
            ...prevForm,
            instructions: updatedInstructions,
        }));

        localStorage.setItem("formData", JSON.stringify({
            ...formData,
            instructions: updatedInstructions,
        }));
    };

    return (
        <>
            <p className="text-center text-sm italic font-semibold text-zinc-700">* Enter quantity for {portion} portion</p>
            <div className="p-1 pt-3 lg:p-8 lg:py-4">
                {/*  */}
                <div className="flex full px-4 lg:px-0">
                    <div className="items center w-full ">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-full">
                                <label className=" font-medium text-md">Enter a new Step  <span className="text-rose-600">*</span></label>
                                <textarea
                                    type="text"
                                    name="new_instruction"
                                    value={newInstruction}
                                    onChange={(e) => setNewInstruction(e.target.value)}
                                    placeholder={`Enter a new step`}
                                    className="border border-black w-full px-4 py-4 focus:border-orange-400  text-lg  rounded-md placeholder:italic placeholder-text-sm outline-none focus-border-orange-400"
                                />
                            </div>
                            <div className="w-full lg:w-auto flex flex-col">
                                <label className="text-black font-medium text-md">Enter Time <span className="text-rose-600">*</span> </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        value={instructionTime}
                                        onChange={(e) => setInstructionTime(e.target.value)}
                                        type="number"
                                        placeholder="eg. 20"
                                        className="border w-full  px-2 py-4 text-lg  focus:border-orange-400 border-black rounded-md placeholder:text-gray-400 outline-none placeholder:italic " />
                                    <p>min</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full items-center justify-center">
                            <button
                                onClick={addInstruction}
                                type="button"
                                className="text-white border  bg-zinc-700 p-2 px-6 my-4 rounded-xl hover:bg-zinc-950 "
                            >
                                Add Instruction
                            </button>
                        </div>
                    </div>
                </div>
                {formData.instructions.map((instruction, index) => (
                    <div key={index} className="w-full">
                        <div className="items-center w-full">
                            <div className=" font-medium text-md flex w-full ">
                                <span className=" px-4 max-w-full flex gap-2">
                                    <p>Step</p> <p>{index + 1} </p>  <p> -</p>
                                </span>
                                <p className="flex max-w-full break-all">{instruction.step} ({instruction.time} min)</p>
                                <button type="button" onClick={() => removeInstruction(index)} className=" mx-2">
                                    <IoIosClose className="text-rose-600 border border-rose-600 rounded-full hover:bg-rose-200 text-3xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Instruction