import { FaStairs, FaFlagCheckered } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export const processIntro = {
  headline:
    "Looking for a team with a proven approach to creating great video and photography? Then this is for you.",
  highlightedText: "proven approach",
  subheadline:
    "Why deliver boring and uninspiring content when visuals can be exciting, engaging and can work harder to really impact your audience.",
  ctaIcon: HiOutlineMail,
  ctaLabel: "Have questions?",
};

export const processHighlights = [
  {
    icon: FaStairs,
    title: "How we work",
    description:
      "It's as important to understand how a company works, as it is to see the quality of their end results. The way that we go about running our projects and constructing our service plays a big part in deciding whether we get to work together.",
  },
  {
    icon: FaFlagCheckered,
    title: "A successful project starts with great service",
    description:
      "Our current process is based on years of experience and learning: reflecting on the times that we got it wrong, doing more of what we get right and constantly reviewing and refining. Every decision that's formed our creative approach is based on one of these factors.",
  },
];

export const processAccordion = [
  {
    title: "It starts by understanding",
    content: [
      "You'll have to forgive us, but we ask a lot of questions at the start. There's a good reason for this, stay with me...",
      "Our initial consultation is designed to get what's in your head into ours. The more that we understand your brand and the context around your project, the better we can offer our expertise and tailor it to your needs. There are no templates here or off the shelf packages that 396 clients have bought before you, we're responding to your individual requirements.",
    ],
  },
  {
    title: "It's not all about the money",
    content: [
      "We all hate talking about money, right, and we're no different. Unless you tell us you have a million pounds to spend then that might change our feelings towards the conversation.",
      "The reality is that not many people get in touch with a million pounds to spend, but the important thing to understand is what you do have. The budget available will impact the route that we take to deliver your project. Once we've understood the scope of your project we can give you a really good idea of the likely spend. We'll advise if we can cut any corners without the results suffering, and give plenty of recommendations at this point.",
      "We're here because we want to work with you, not put you off with unrealistic costings. If we can understand either what you want to spend, what you need to bring the project in for, or we can walk you through all of the options with which to make an informed decision.",
      "   Let's get that out of the way early so that we can get on with the fun stuff!",
    ],
  },
  {
    title: "Planning is the most important stage",
    content: [
      "I'm not sure we could sound any more boring if we tried, but spending time planning, and then planning some more, is crucial in the success of any project we take on.",
      "Sure, the filming team will argue that the choice of lenses are crucial, and the editors will chip-in with any of a hundred different cutting techniques. But if your project has missed a beat in the planning stage, it gets felt further down the line. Fact.",
      "The idea here is that if we can be detailed with our decisions as we can about production, before any lens gets mounted or any lights get switched on, production will run smoother. And it takes the guesswork out of knowing what you're going to get at the end.",
      "We have invested in a great team of Producers who will look after your project from start to finish, always on, running the show with your best interests at heart.",
    ],
  },
];

export const processFeatures = [
  {
    image: "/how-we-work/sample1.jpg",
    title: "Yes, you can join us for the shoot!",
    content: [
      "Crazily, we still hear stories about clients being banned from attending shoots when working with some other agencies or production companies. It just doesn't make sense to us. We love having clients with us on set, and here's why... If the shot isn't as you like, you can tell us and we can change it. As simple as it is brilliant! We can avoid all of those difficult conversations in the edit about \"wishing that cup was placed just a bit more to the left…\" and just fix it there and then.",
      "The beauty of anything creative is that there's no right and wrong, just loads of grey between the black and white. Whether something looks right is often perception, and as you're the client, we're here to make sure that the work we produce looks right to you.",
      "And who doesn't like those orgasmic sounds of pleasure when that shot is EXACTLY as you like it? Believe it or not, most creatives suffer with imposter syndrome — we question every one of our own decisions, but take tremendous pride in delivering high quality work. That little noise you make when you like what you see on the screen means the world.",
    ],
  },
  {
    image: "/how-we-work/sample2.jpg",
    title: "If it's right first time, something's wrong",
    content: [
      "With a million and one ways to edit a video or a still image, the distance between right and wrong gets further apart. One great aspect of working digitally is that you get to move things, delete things, put things back as they were four versions ago, all with relative ease.",
      "We don't expect you to know whether you're happy until you've seen it, and if you don't love it, we can change it. Your budget will have included time for review, feedback and for us to deliver updated versions back to you, so the pressure's off. Unless you're on a particularly tight deadline, in which case, scrap all of the above, WE NEED TO KNOW NOW :)",
    ],
  },
];

export const processForm = {
  headline: "See you next time",
  content: [
    "The truth of the matter, is that we love all this. We're here because we chose to be (and because we failed the GCHQ entry quiz). We've built a team who genuinely care about delivering you the best service that we're able to.",
    "The next step in the process is seeing how we can get it even better for your next time.",
  ],
  subheadline: "Ready to see what we could do with your next project?",
  form: {
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        placeholder: "Full Name",
        required: true,
      },
      {
        name: "contactNumber",
        label: "Contact Number",
        placeholder: "Contact Number",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        placeholder: "Email Address",
        required: true,
        type: "email",
      },
      {
        name: "message",
        label: "Message",
        placeholder: "Message",
        required: false,
        type: "textarea",
      },
    ],
    submitLabel: "Send",
  },
};
