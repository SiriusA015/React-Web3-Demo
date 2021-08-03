import Heading from "components/Heading/Heading";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const FAQDATA = [
  {
    question: 'Question 1?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
  },
  {
    question: 'Question 2?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
  },
  {
    question: 'Question 3?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
  },
  {
    question: 'Question 4?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
  },
  {
    question: 'Question 5?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.'
  },
]
const PageFAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Admin || Mind Chill</title>
      </Helmet>

      <div className="container relative space-y-10 mt-6 mb-10 sm:space-y-12 sm:my-12 lg:space-y-16 lg:my-16">
        <Heading>Frequently Asked Questions</Heading>
        <div className="accordion">
          {FAQDATA && FAQDATA.map(item =>
            <div className="border-b-2 border-indigo-300 ">
              <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">{item.question}</span><span className="icon" aria-hidden="true"></span></button>
              <div className="accordion-content">
                <p>{item.answer}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default PageFAQ;