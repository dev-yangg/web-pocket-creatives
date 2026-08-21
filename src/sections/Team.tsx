import { useState } from "react";
import { cn } from "../lib/utils";
import ContactCta from "../components/ContactCta";
import { BsLinkedin } from "react-icons/bs";

interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  roles: string[];
  bio: string;
  image: string;
  linkedinUrl: string;
}

const team: TeamMember[] = [
  {
    id: "steven",
    firstName: "Steven",
    lastName: "Mayatt",
    roles: [
      "Managing Director",
      "Creative Director",
      "Photographer",
      "Entrepreneur",
      "Marketeer",
      "Coffee Drinker",
    ],
    bio: "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.",
    image: "/images/directors/steven-mayatt.webp",
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    id: "haider",
    firstName: "Haider",
    lastName: "Romero Perez",
    roles: [
      "Technical Director",
      "Cinematographer",
      "Cameraman",
      "Editor",
      "Colourist",
      "Intrepid Cyclist",
    ],
    bio: "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.",
    image: "/images/directors/haider-romero.webp",
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    id: "lauren",
    firstName: "Lauren",
    lastName: "Hodge",
    roles: [
      "Production Director",
      "Organiser",
      "Planner",
      "Emergency Hand model",
      "Prop Shopper",
      "Recipe Wrangler",
    ],
    bio: "Lorem ipsum dolor sit amet consectetur. Placerat quisque feugiat porta quam ornare. In nec lacinia consectetur placerat vestibulum sem odio. In feugiat elit fames eget lobortis turpis scelerisque tincidunt. Enim.",
    image: "/images/directors/lauren-hodge.webp",
    linkedinUrl: "https://www.linkedin.com",
  },
];

export default function Team() {
  const [activeId, setActiveId] = useState(team[0]?.id);

  return (
    <section className="py-14">
      <div className="content-boundary">
        <div className="team-grid">
          <h3 className="team-header text-grayblue font-extrabold">
            Meet the Team
          </h3>

          <div
            role="tablist"
            aria-label="Team members"
            className="team-tablist flex max-[530px]:justify-between max-[530px]:gap-x-0 gap-x-4">
            {team.map((member) => {
              const isActive = member.id === activeId;
              return (
                <button
                  key={member.id}
                  role="tab"
                  id={`tab-${member.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${member.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(member.id)}
                  className={cn("text-grayblue rounded-sm px-3 py-1", {
                    "bg-yellow text-white": isActive,
                  })}>
                  {member.firstName}
                </button>
              );
            })}
          </div>

          {team.map((member) => {
            const isActive = member.id === activeId;
            return (
              <div
                key={member.id}
                id={`panel-${member.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${member.id}`}
                hidden={!isActive}
                className="contents">
                {/* Director Image */}
                <img
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  className="team-image w-full h-full rounded-md object-cover object-center aspect-5/6"
                />

                {/* Director Name */}
                <div className="team-name @container flex items-center md:self-end py-4 sm:py-0 md:py-4">
                  <h3 className="leading-[.85] w-full">
                    <span className="max-xs:text-[clamp(1.85rem,15cqi,6rem)] text-[clamp(2.25rem,15cqi,6rem)] text-yellow font-extrabold">
                      {member.firstName}
                    </span>{" "}
                    <br className="md:hidden" />
                    <span className="text-[clamp(1.4rem,6cqi,4rem)] text-blue font-extrabold">
                      {member.lastName}
                    </span>
                  </h3>
                </div>

                {/* CTAs */}
                <div className="@container team-cta flex items-center w-full justify-end sm:justify-center gap-4 sm:gap-14 md:gap-4">
                  <ContactCta
                    className="w-[clamp(1.75rem,15cqi,5rem)] sm:w-[clamp(3rem,15cqi,5rem)] text-white bg-blue hover:bg-yellow"
                    label={`Msg ${member.firstName}`}
                  />
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-[clamp(1.75rem,15cqi,5rem)] sm:w-[clamp(3rem,15cqi,3rem)]">
                    <BsLinkedin className="max-w-full w-full h-full fill-[#0072B1]" />
                  </a>
                </div>

                {/* Roles & Bio */}
                <div className="team-bio flex flex-col gap-5">
                  {member.roles.length > 0 && (
                    <ul className="flex flex-wrap gap-x-4 font-extrabold text-grayblue">
                      {member.roles.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  )}
                  {member.bio && <p className="text-grayblue ">{member.bio}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
