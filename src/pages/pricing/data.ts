import EuroSvg01 from "../../components/EuroSvg01";
import EuroSvg02 from "../../components/EuroSvg02";
import { baseContactFormFields } from "../../data/globals";

export const heroData = {
  preheading: "Avoiding the taboo:",
  headline: "Pricing for video production and photography",
  paragraphs: [
    "Price is important to everybody, and we know this is a major factor in deciding who you'll want to work with. We like to think that clients work with us for a range of reasons, from our quality of output to our project management, but getting the budget in the right place is something that we spend a lot of time on.",
    "We can either quote from scratch once we understand your brief, or work to your target spend. This flexibility makes us a great fit for both small and large clients alike.",
    "You can read a bit more below about how we structure our rates for both video production and photography below, and we're always here for any queries.",
  ],
};

export const pricingOverviewData = {
  headline: "We use a modular pricing model:",
  checklist: [
    "Pay only for what you need",
    "No matter how large or small your project",
    "Oh, and no budget overruns!",
  ],
  infoBlocks: [
    {
      icon: EuroSvg01,
      title: "Everything you need and no hidden costs.",
      description:
        "There are lots of factors that affect the overall price of video production and photography shoots, such as props, backgrounds, models and locations. This is why there's no one-size-fits all price, and most creative agencies won't put any prices on their websites - as they can be misleading without a lot of description.",
    },
    {
      icon: EuroSvg02,
      title: "We'll get you from brief to quote in a flash!",
      description:
        "We will work with you to understand your brief and the full photography and video production requirements of your project, before delivering a budget breakdown to you at the beginning of the process. This gives you a fully honest and transparent view of the resources that make up your project. There's always room for conversation and tweaks, and we're also happy to start with your ideal spend and work backwards.",
    },
  ],
};

export const faqData = {
  sections: [
    {
      badge: "Cheap or Expensive?",
      paragraphs: [
        "To give you some context, we aim to be in the middle band in terms of our pricing structure, which means that our typical daily rates for photography and video production will sit in between those agencies who work at the very upper end of our industry, with individual freelancers at the lower end of the pricing range.",
        "It's important to note that we're not talking about quality here, just price. We're often chosen ahead of the largest of our competitors as we can deliver great quality photography and video production services for a lower price. This is because we run an efficient setup, with less overheads and no bloat.",
      ],
    },
    {
      badge: "So how does it work?",
      paragraphs: [
        "Our setup also makes us attractive to start-ups, those who are crowdfunding, and businesses who still need great photography and video production, but are working within tighter budgets.",
        "We do this by using modular pricing - knowing that each photography and video production project is different, you pay for just what you need.",
        "While some clients may need just an hour of photography to capture some simple pack shots for a new addition to their range, others may need a multiple camera setup for a TV advert to showcase their brand to the world. We have the ability to quote easily for both ends of that spectrum.",
        "If you already have a total budget available, share that with us and we can work out how to deliver as much as possible for what you have to spend.",
      ],
    },
  ],
};

export const contactFormData = {
  headline: "Get In Touch",
  subheading:
    "Drop us a mail, let us know your budget, and we'll share what we can offer",
  fields: baseContactFormFields,
  submitLabel: "Send",
};

export const serviceDetailsSliderData = {
  slides: [
    {
      headline: "Video Production…",
      image: {
        src: "",
        alt: "",
      },
      paragraphs: [
        {
          text: "Video production is a more complex process compared with photography, both in planning, production and the fact that the edit time will span days rather than hours, as it does it photography.",
          highlightedTexts: ["Video production"],
        },
        {
          text: "Similarly to a photo shoot, you'll need to think about the location: from studio spaces to Airbnbs for lifestyle work, and the consideration for sound as well.",
          highlightedTexts: [],
        },
        {
          text: "We may need a bigger team, if lighting, sound, or set requirements are needed. Additional equipment such as autocues, specialist lighting and microphones, cameras dedicated to slow motion may also be considered for more creative briefs.",
          highlightedTexts: [],
        },
        {
          text: "Actors and presenters, hair and makeup, set elements, props and materials, even fashion stylists, food stylists may required too.",
          highlightedTexts: [],
        },
        {
          text: "Editing often needs multiple days to complete, and we'll best estimate this for you, allowing for time to feed back and make changes. We can also include music, sound effects and voiceover.",
          highlightedTexts: [],
        },
        {
          text: "The Pocket Creatives team will always provide a full breakdown when we quote for you, which then makes it easier to see what resources your project needs to get made.",
          highlightedTexts: ["Pocket Creatives"],
        },
        {
          text: "To give you a general idea, a full day of filming with us starts at £940+VAT.",
          highlightedTexts: ["£940+VAT"],
        },
      ],
      nextLabel: "Photography",
    },
    {
      headline: "Photography…",
      image: {
        src: "",
        alt: "",
      },
      paragraphs: [
        {
          text: "Video production is a more complex process compared with photography, both in planning, production and the fact that the edit time will span days rather than hours, as it does it photography.",
          highlightedTexts: ["Video production"],
        },
        {
          text: "Similarly to a photo shoot, you'll need to think about the location: from studio spaces to Airbnbs for lifestyle work, and the consideration for sound as well.",
          highlightedTexts: [],
        },
        {
          text: "We may need a bigger team, if lighting, sound, or set requirements are needed. Additional equipment such as autocues, specialist lighting and microphones, cameras dedicated to slow motion may also be considered for more creative briefs.",
          highlightedTexts: [],
        },
        {
          text: "Actors and presenters, hair and makeup, set elements, props and materials, even fashion stylists, food stylists may required too.",
          highlightedTexts: [],
        },
        {
          text: "Editing often needs multiple days to complete, and we'll best estimate this for you, allowing for time to feed back and make changes. We can also include music, sound effects and voiceover.",
          highlightedTexts: [],
        },
        {
          text: "The Pocket Creatives team will always provide a full breakdown when we quote for you, which then makes it easier to see what resources your project needs to get made.",
          highlightedTexts: ["Pocket Creatives"],
        },
        {
          text: "To give you a general idea, a full day of filming with us starts at £940+VAT.",
          highlightedTexts: ["£940+VAT"],
        },
      ],
      nextLabel: "Video Production",
    },
  ],
};
