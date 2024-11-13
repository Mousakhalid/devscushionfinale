"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

interface Option {
    label: string;
    value: string;
}

const QuoteForm: React.FC = () => {
    const [selectedBudget, setSelectedBudget] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d00bb588-3836-48a8-b421-7891e9b62c0d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form successfully submitted!");
                // Wait for 2 seconds to show the success message, then reload the page
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                console.error("Error:", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("An error occurred while submitting the form.");
        }
    };


    const options: Option[] = [
        { label: "Bring a new product to market 🚀", value: "newProduct" },
        { label: "Scale or revamp an existing platform 📈", value: "scalePlatform" },
        { label: "Rescue my project 🔥", value: "rescueProject" },
        { label: "Something else entirely... 👽", value: "somethingElse" },
    ];

    const handleOptionClick = (e: FormEvent<HTMLButtonElement>, value: string) => {
        e.preventDefault();
        setSelectedOption(value);
    };

    const handleBudgetChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedBudget(event.target.value);
    };

    return (
        <div className="bg-[#F8F7FA] md:px-52 px-8 py-16 rounded-md">
            <div className="">
                <form onSubmit={onSubmit} className="space-y-8 flex flex-col">
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="flex flex-col">
                            <label className="text-[15px] font-bold" htmlFor="first_name">
                                FIRST NAME*
                            </label>
                            <input
                                className="py-4 pl-3 pr-12 border border-gray-200 rounded"
                                id="first_name"
                                name="first_name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[15px] font-bold" htmlFor="second_name">
                                SECOND NAME*
                            </label>
                            <input
                                className="py-4 pl-3 pr-12 border border-gray-200 rounded"
                                id="second_name"
                                name="second_name"
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="flex flex-col">
                            <label className="text-[15px] font-bold" htmlFor="email">
                                EMAIL*
                            </label>
                            <input
                                className="py-4 pl-3 pr-12 border border-gray-200 rounded"
                                id="email"
                                name="email"
                                type="email"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[15px] font-bold" htmlFor="phone">
                                PHONE NUMBER*
                            </label>
                            <input
                                className="py-4 pl-3 pr-12 border border-gray-200 rounded"
                                id="phone"
                                name="phone"
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <p className="uppercase text-[15px] font-bold">Your Budget*</p>
                        <div className="flex flex-col">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    id="budget1"
                                    name="budget"
                                    value="<5K"
                                    checked={selectedBudget === "<5K"}
                                    onChange={handleBudgetChange}
                                    className="form-radio text-blue-600"
                                    required
                                />
                                $5K
                            </label>

                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    id="budget2"
                                    name="budget"
                                    value="<10K - 15K"
                                    checked={selectedBudget === "<10K - 15K"}
                                    onChange={handleBudgetChange}
                                    className="form-radio text-blue-600"
                                    required
                                />
                                $10K - $15K
                            </label>

                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    id="budget3"
                                    name="budget"
                                    value="<20K - 25K"
                                    checked={selectedBudget === "<20K - 25K"}
                                    onChange={handleBudgetChange}
                                    className="form-radio text-blue-600"
                                    required
                                />
                                $20K - $25K
                            </label>

                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    id="budget4"
                                    name="budget"
                                    value="<35K - 40K"
                                    checked={selectedBudget === "<35K - 40K"}
                                    onChange={handleBudgetChange}
                                    className="form-radio text-blue-600"
                                    required
                                />
                                $35K - $40K
                            </label>

                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    id="budget5"
                                    name="budget"
                                    value="Others"
                                    checked={selectedBudget === "Others"}
                                    onChange={handleBudgetChange}
                                    className="form-radio text-blue-600"
                                    required
                                />
                                Others
                            </label>
                        </div>


                        {/* Add other budget options similarly */}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">I NEED TO*</h2>
                        <div className="space-y-3">
                            {options.map((option) => (
                                <button name="option"
                                    key={option.value}
                                    onClick={(e) => handleOptionClick(e, option.value)}
                                    className={`flex justify-between items-center w-full px-4 py-3 rounded-full text-left text-gray-700 ${selectedOption === option.value
                                        ? "bg-blue-100"
                                        : "bg-gray-100 hover:bg-gray-200"
                                        }`}
                                >
                                    <span >{option.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Textarea Section */}
                    <div className="space-y-3">
                        <label className="text-[15px] font-bold" htmlFor="additional_info">
                            WHAT ELSE SHOULD WE KNOW?*
                        </label>
                        <textarea
                            id="additional_info"
                            name="additional_info"
                            placeholder="Tell us about your product, your timeline, how you heard about us and where you are located? Or just say hi!"
                            className="w-full p-4 border rounded-lg"
                            required
                            rows={3} cols={4}
                        ></textarea>

                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-6 bg-gradient-to-r from-pink-500 to-[#6F31A2] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center"
                    >
                        <span className="mr-2">🚀</span> Submit
                    </button>
                </form>
                <div className="space-y-3 text-[#6F31A2]">
                    <span>{result}</span>
                </div>
            </div>
        </div>
    );
};

export default QuoteForm;
