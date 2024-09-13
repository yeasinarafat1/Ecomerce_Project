import { faqList } from "@/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import OrangeButton from "@/components/Shared/OrangeButton";

const page = () => {
  return (
    <>
      <div className="w-full min-h-[70vh] md:container flex-center flex-col md:flex-row gap-8 my-3">
        <div className="flex flex-col justify-start gap-2 w-full md:w-[650px]">
          <h3 className="text-gray-900 text-3xl font-semibold">
            Frequently Asked Question
          </h3>
          {faqList.map((item, index) => {
            return (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="w-full px-2 border-[.5px] border-gray-100 rounded-sm  !no-underline text-lg text-gray-900 ">
                    {item.title}
                  </AccordionTrigger>
                  {/* ?:comlete this section */}
                  <AccordionContent className="border border-t-0 border-gray-100 w-full">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
        <div className="flex-center flex-col  gap-2 rounded-md w-[424px] h-[400px] bg-Warning-100 px-2">
          <h2 className="text-lg text-gray-900 font-medium w-[360px]">
            Don’t find your answer, Ask for support.
          </h2>
          <p className="text-sm text-gray-700 w-[360px]">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
            molestie accumsan dui, non iaculis primis in faucibu raesent eget
            sem purus.
          </p>
          <Input
            placeholder="Email Address"
            className="!ring-0 !ring-offset-0 bg-white border border-Warning-200 w-[360px] h-11"
          />
          <Input
            placeholder="Subjects"
            className="!ring-0 !ring-offset-0 bg-white border border-Warning-200 w-[360px] h-11"
          />
          <Textarea
            placeholder="Meseage"
            className="!ring-0 !ring-offset-0 bg-white border border-Warning-200 w-[360px] h-20"
          />
          <div className="w-[360px]">
            <OrangeButton>Send Meseage</OrangeButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
