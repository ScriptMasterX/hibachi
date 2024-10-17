import React, { useState, useRef } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getContentHeight = (index) => {
    if (contentRefs.current[index]) {
      return activeIndex === index
        ? contentRefs.current[index].scrollHeight
        : 0;
    }
    return 0;
  };

  const accordionData = [
    {
      title: "How much does your service cost?",
      content:
        "Our Service has a base price of $50 per person with a $500 minimum spend. All fees are included EXCEPT gratuity. Suggested gratuity is 20% of total bill. Cash or Credit Card (with a 4% admin fee) are the accepted payment methods. If paying with credit card must be done 72 hours prior to the event! You can not pay at the end of the party with credit card- must be done 72 hours prior. ",
    },
    {
      title: "What time will the chef arrive?",
      content:
        "The chef will arrive approximately 10 minutes prior to reservation time. Our set up process is seamless and only takes a few minutes.",
    },
    {
      title: "Do you set up tables and chairs?",
      content:
        "No we do not! We provide the chef, grill, food, sake and the best part ENTERTAINMENT! Customers will provide utensils and table set ups. For more information on set ups please check out our Instagram @hibachi2u_ to see how other customers set up!",
    },
    {
      title: "Do you cook inside homes?",
      content:
        "We only cook on outside premises. Our experience is open to terraces, balconies, and under awnings. At this time we do not cook in any indoor premises. All though you can set your party up inside, the chef will cook outside ! We are licensed and insured.",
    },
    {
      title: "Do you cook with nuts or sesame products?",
      content:
        "No, our food does not contain any nuts or sesame products. Please notify the booking agent of any other food allergy a customer may have.",
    },
    {
      title: "Can you accommodate Gluten Free?",
      content:
        "Yes we have serviced many gluten free customers. We ask that you bring your favorite gluten free soy sauce and teriyaki sauce for the chef to cook your portion separate!",
    },
    {
      title: "What if someone does not eat meat?",
      content:
        "We can provide tofu to meet Vegetarian and Vegan needs. The price per person does not change. We will supplement their dishes with additional food such as extra veggies, salad, and noodles.",
    },
    {
      title: "Can the customer provide their own proteins?",
      content:
        "Due to insurance and pricing requirements, we do not cook any outside protein or food at this time.",
    },
    {
      title: "How can I make a reservation?",
      content:
        "All of our bookings are currently done through our website. If you are going to be 30+ guests, please book two reservations for the same date and time, so we can send two chefs. There are no extra fees for an additional chef.",
    },
    {
      title: "What is your cancellation policy?",
      content:
        "48 hours notice for all cancellations and rescheduled parties or guest will be charged a fee of $200.00. If it rains, customer is required to provide some type of covering for the chef to cook under so they can stay dry. We can cook under tents, and patios. Customer is responsible for canceling due to inclement weather within 48 hours of your party.",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <h2>{item.title}</h2>
            <span className="accordion-icon">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="accordion-content-wrapper"
            style={{
              height: `${getContentHeight(index)}px`,
              transition: "height 0.3s ease",
              overflow: "hidden",
            }}
          >
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
