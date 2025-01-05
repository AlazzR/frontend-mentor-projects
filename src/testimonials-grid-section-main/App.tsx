import Profile from "./Profile";
import ProfileCard from "./ProfileCard";
import "./App.css";

const locationMapper = {
  0: ["row-one primary"],
  1: ["row-one grayish"],
  2: ["row-two"],
  3: ["row-two blackish"],
  4: ["span-multiple-rows"],
};

export default function App() {
  const profiles = [
    new Profile(
      "Daniel Clifford",
      "Verified Graduate",
      `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`,
      `"I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."`,
      "image-daniel.jpg"
    ),
    new Profile(
      "Jonathan Walters",
      "Verified Graduate",
      `I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself.`,
      `"I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."`,
      "image-jonathan.jpg"
    ),
    new Profile(
      "Jeanette Harmon",
      "Verified Graduate",
      `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`,
      `"I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."`,
      "image-jeanette.jpg"
    ),
    new Profile(
      "Patrick Abrams",
      "Verified Graduate",
      `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`,
      `"I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."`,
      "image-patrick.jpg"
    ),
    new Profile(
      "Kira Whittle",
      "Verified Graduate",
      `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.`,
      `Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!`,
      "image-kira.jpg"
    ),
  ];

  return (
    <div className="grid">
      {profiles.map((profile, indx) => {
        return (
          <ProfileCard
            profile={profile}
            additionalClasses={[locationMapper[indx] ?? ""]}
          />
        );
      })}
    </div>
  );
}
