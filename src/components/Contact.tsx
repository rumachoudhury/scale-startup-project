"use client";

import { Calendar } from "lucide-react";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Confetti from "react-confetti";
import toast from "react-hot-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Contact() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isBusinessOwner, setIsBusinessOwner] = useState("");
  const [wantsGrowth, setWantsGrowth] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !name ||
      !mobile ||
      !email ||
      !selectedDate ||
      !isBusinessOwner ||
      !wantsGrowth
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Form submitted successfully!");

    // Clear form fields
    setName("");
    setMobile("");
    setEmail("");
    setSelectedDate(null);
    setIsBusinessOwner("");
    setWantsGrowth("");

    // Clear textarea
    const messageInput = document.querySelector<HTMLTextAreaElement>(
      "textarea[name='message']"
    );
    if (messageInput) messageInput.value = "";
  };

  return (
    <div>
      <section
        id="contact"
        className="#FFFFFF] flex-grow py-10 px-10   mx-5  rounded-md shadow-2xl mt-8 border-2 border-gray-200"
      >
        <div className="text-card-foreground bg-card  mx-4 my-2 overflow-hidden rounded-lg  md:mx-0 md:my-4">
          <h2 className="text-2xl font-semibold mb-4 ">
            Book a FREE Career Consultation
          </h2>
          <p className="mb-6 dark:text-gray-300">
            Please fill out the form below to schedule a 15-minute career
            auditing session
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-black ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-bold md:text-lg">
                  Name<span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
                />
              </div>

              <div>
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-bold md:text-lg">
                  Mobile<span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-bold md:text-lg">
                Email<span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded border border-gray-300 px-3 py-2 dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-bold md:text-lg">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message here"
                rows={5}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-medium dark:text-white">
                What is the best time for a 15-minute career auditing session? *
              </label>

              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select date and time"
                  popperPlacement="top-start"
                  className="h-11 rounded border border-gray-300 pl-4 pr-12 text-sm dark:bg-[#444] dark:border-gray-600 dark:placeholder-gray-400 w-[1220px]"
                />
                <button
                  type="button"
                  onClick={() => {
                    const input = document.querySelector(
                      "input[placeholder='Select date and time']"
                    );
                    (input as HTMLInputElement)?.focus();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
                  aria-label="Toggle calendar"
                >
                  <Calendar className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
                Select your preferred date and time for the meeting.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-bold md:text-lg">
                  Are you a business owner?
                  <span className="text-destructive">*</span>
                </label>

                <RadioGroup
                  value={isBusinessOwner}
                  onValueChange={setIsBusinessOwner}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="business-yes" />
                    <label htmlFor="business-yes">Yes</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="business-no" />
                    <label htmlFor="business-no">No</label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-bold md:text-lg">
                  Do you want&nbsp;revenue&nbsp;growth?
                  <span className="text-">*</span>
                </label>

                <RadioGroup
                  value={wantsGrowth}
                  onValueChange={(value) => setWantsGrowth(value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="growth-yes" />
                    <label htmlFor="growth-yes" className="text-sm font-medium">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="growth-no" />
                    <label htmlFor="growth-no" className="text-sm font-medium">
                      No
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#375EFB] text-white font-semibold rounded-lg px-6 py-2 hover:bg-[#5571DB] transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
