import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const PricingTabs = () => {
    return (
        <div className="py-8 bg-white">
            <div className="container mx-auto px-4">
                <Tabs defaultValue="product_design" >
                    <div className='py-12 bg-gray-100  pt-8 max-sm:pb-36 md:pb-8 w-full'>
                        <TabsList className="flex flex-wrap gap-2 ">
                            <TabsTrigger
                                value="product_design"
                                className="px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-black hover:bg-gray-100 active:bg-black active:text-white transition-colors duration-200 w-full sm:w-auto min-w-[100px] sm:min-w-[150px] text-center"
                            >
                                Product Design
                            </TabsTrigger>
                            <TabsTrigger
                                value="strategy_consulting_&_audits"
                                className="px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-black hover:bg-gray-100 active:bg-black active:text-white transition-colors duration-200 w-full sm:w-auto min-w-[100px] sm:min-w-[150px] text-center"
                            >
                                Strategy Consulting & Audits
                            </TabsTrigger>
                            <TabsTrigger
                                value="software_app_development"
                                className="px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-black hover:bg-gray-100 active:bg-black active:text-white transition-colors duration-200 w-full sm:w-auto min-w-[100px] sm:min-w-[150px] text-center"
                            >
                                Software & App Development
                            </TabsTrigger>
                            <TabsTrigger
                                value="product_marketing"
                                className="px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-black hover:bg-gray-100 active:bg-black active:text-white transition-colors duration-200 w-full sm:w-auto min-w-[100px] sm:min-w-[150px] text-center"
                            >
                                Product Marketing
                            </TabsTrigger>
                        </TabsList>
                    </div>


                    <TabsContent value="product_design">
                        <Accordion type="single" collapsible className="w-full space-y-5 py-5">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        UI/UX DESIGN
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            6 to 12 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $5K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700">
                                        This service focuses on crafting intuitive and visually engaging user interfaces and experiences. It prioritizes understanding user needs and behaviors to deliver designs that are both functional and aesthetically pleasing. The process typically includes site maps, user journeys, low-fidelity and high-fidelity wireframes, and can involve prototyping to enhance the user experience.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        DESIGN SYSTEM
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            1 to 2 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $10K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700 text-left">
                                        Developing a design system involves creating a comprehensive set of design standards, components, and guidelines to ensure consistency in branding and user experience across products. This system aids in maintaining a cohesive look and feel, streamlines the design process, and ensures scalability and coherence in product development.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        UI REFRESH
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            4 to 8 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $13K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700 text-left">
                                        A UI refresh service focuses on updating and improving the visual design of a product. It aims to enhance user engagement and modernize the product’s appearance by incorporating the latest design trends, improving color schemes, typography, and other visual elements.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        UX REFRESH
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            4 to 6 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $13K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700 text-left">
                                        This service involves revitalizing the user experience of a product to improve its usability and effectiveness. It includes reevaluating user journeys, optimizing navigation, and enhancing overall user interactions to boost satisfaction and engagement.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        PRODUCT ANIMATIONS
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            FROM 1-2 WEEKS
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $1K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700 text-left">
                                        Create tailored motion graphics to make interfaces more engaging and intuitive. This enhancement includes refining transitions, improving feedback animations, and introducing micro-interactions that enrich the user experience, leading to increased user delight and interaction efficiency.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>


                    <TabsContent value="strategy_consulting_&_audits">
                        <Accordion type="single" collapsible className="w-full space-y-5 py-5">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        Strategy Sprint
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            1 to 3 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $6K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base sm:text-lg md:text-[18px] text-gray-700">
                                        Strategy Sprints are short, intensive sessions aimed at developing strategic insights and action plans rapidly. These sprints involve collaborative workshops, stakeholder interviews, and rapid problem-solving techniques to align business goals with market opportunities, and the outcome is geared to build you an actionable plan to get to market.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        USER RESEARCH
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            2 to 7 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $8K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base sm:text-lg md:text-[18px] text-gray-700">
                                        User research is crucial in understanding the target audience’s behavior, needs, and challenges. This service involves various methodologies like surveys, interviews, and usability testing to gather insights that inform product strategy, design, and development.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        MARKET RESEARCH
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            1 to 2 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $10K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base sm:text-lg md:text-[18px] text-gray-700">
                                        Market research services provide comprehensive insights into market trends, competitor analysis, and customer preferences. This information is crucial for making informed business decisions and identifying new market opportunities.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        EVALUATIVE RESEARCH
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            2 to 4 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $13K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base sm:text-lg md:text-[18px] text-gray-700">
                                        This research evaluates existing products or services to identify strengths, weaknesses, and areas for improvement. It involves user feedback, performance analysis, and benchmarking against industry standards.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        PRODUCT AUDIT
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            2 TO 4 WEEKS
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $12K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base sm:text-lg md:text-[18px] text-gray-700">
                                        A product audit is a thorough review of a product to assess its market fit, usability, and performance. Recommendations are provided for enhancements, feature additions, or modifications to better meet user needs and business objectives.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        DESIGN AUDIT
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            1 TO 2 WEEKS
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $10K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base sm:text-lg md:text-[18px] text-gray-700">
                                        Design audits assess the effectiveness and appeal of a product’s design. They involve evaluating visual elements, user interface, and user experience, ensuring they align with best practices and meet user expectations.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        CODE AUDIT
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            1 WEEKS
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $1.5K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base sm:text-lg md:text-[18px] text-gray-700">
                                        Code audits involve a deep inspection of a software application’s codebase to identify issues with performance, security, and scalability. A detailed report is generated with suggestions for improvements.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>




                    <TabsContent value="software_app_development">
                        <Accordion type="single" collapsible className="w-full space-y-5 py-5">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        PROOF OF CONCEPT (POC) or PROTOTYPE
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            6 to 8 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $25K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="w-full text-base md:text-[18px] text-gray-700">
                                        Developing a Proof of Concept or prototype demonstrates the feasibility and potential of a product idea. This early-stage development helps in validating concepts, attracting stakeholder buy-in, and guiding further development efforts.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        Minimum Viable Product (MVP)
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            8 to 15 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $30K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="w-full text-base md:text-[18px] text-gray-700">
                                        MVP development focuses on creating a product with the essential features to satisfy early adopters. This approach allows for market testing, user feedback collection, and iterative development, ensuring product-market fit before full-scale development.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        Minimum Lovable Product (MLP)
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            10 to 20 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $40K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="w-full text-base md:text-[18px] text-gray-700">
                                        MLP development goes beyond functionality, adding features and elements that delight early users. This approach aims to create a more engaging and satisfying initial user experience, fostering loyalty and positive word-of-mouth.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        Multi-phase Cross-platform System
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            6 to 12 MONTHS
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $70K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="w-full text-base md:text-[18px] text-gray-700">
                                        This service involves developing complex software solutions that require multiple development phases and compatibility across various platforms. It’s ideal for products needing a broad range of functionalities and integration across different operating systems and devices.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        Project Rescue
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            8 TO 20 WEEKS
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $80K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="w-full text-base md:text-[18px] text-gray-700">
                                        This service is designed to rescue projects that are off-track or underperforming. It involves evaluating the current state, identifying issues, and implementing a recovery plan that includes redesigning, redeveloping, or restructuring parts or all of the project.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        Hardware & Connected Devices Solutions
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            4 TO 12 MONTHS
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $70K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="w-full text-base md:text-[18px] text-gray-700">
                                        This service focuses on developing software solutions that integrate seamlessly with hardware components. It’s ideal for IoT applications, wearables, and other technology products that require a synergy between hardware and software.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0">
                                        Platform Maintenance & Support
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:mr-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            ONGOING
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 text-[6px] text-black border hover:bg-[#919092] rounded-full">
                                            STARTS AT $2K/MONTH
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="w-full text-base md:text-[18px] text-gray-700">
                                        This service includes continuous maintenance and support for platforms to ensure their optimal performance. It covers bug fixes, software updates, security patches, and overall system health monitoring.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>



                    <TabsContent value="product_marketing">
                        <Accordion type="single" collapsible className="w-full space-y-5 py-5">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0 text-left">
                                        One-page Marketing site and Newsletter template
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:ml-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            2 to 4 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[12px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $2K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700">
                                        Creating a single-page website dedicated to marketing a product is an effective way to convey concise, impactful information. This service focuses on designing a visually appealing and user-friendly page that highlights the product’s key features and benefits, driving conversions and engagement.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0 text-left">
                                        Multi-page marketing site and Newsletter template
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:ml-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            3 to 5 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $5K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700 text-left">
                                        Developing a multi-page marketing site involves creating a comprehensive online presence for a product. This service includes designing various pages that detail the product’s features, benefits, user testimonials, and other relevant content to engage potential customers and drive sales.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0 text-left">
                                        APP STORE pack
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:ml-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            1 to 2 Weeks
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $7K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700 text-left">
                                        This service entails crafting optimized assets and content for app stores to maximize an application’s visibility and appeal. It includes designing compelling app icons, screenshots, and descriptions that effectively communicate the app’s value proposition and encourage downloads.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <p className="text-sm md:text-2xl font-medium uppercase mb-2 md:mb-0 text-left">
                                        Marketing Campaign
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-2 ml-auto md:ml-5 mr-2">
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            MONTHLY
                                        </Badge>
                                        <Badge className="bg-[#919092] md:py-2 py-1 max-sm:text-[10px] text-black border hover:bg-[#919092] rounded-full">
                                            Starts at $0.5K
                                        </Badge>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="md:w-1/2 w-full text-base md:text-[18px] text-gray-700 text-left">
                                        Designing and executing a marketing campaign involves a strategic approach to promote a product or offering across various channels to a targeted audience. This service includes campaign planning, content creation, and performance analysis to ensure a successful product launch and sustained market presence.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </TabsContent>

                </Tabs>
            </div>
        </div>
    );
};

export default PricingTabs;
