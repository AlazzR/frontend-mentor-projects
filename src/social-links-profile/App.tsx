import "./App.css";

type ProfileType = {
  imgFileName: string;
  profileName: string;
  location: string;
  desc: string;
  githubAccount: string;
  frontEndMentorAccount: string;
  linkinAccount: string;
  twitterAccount: string;
  instagramAccount: string;
};

const Link = ({ placeHolder, url }) => {
  return (
    <a href={url} className="link">
      {placeHolder}
    </a>
  );
};

const Profile = ({ profile }: { profile: ProfileType }) => {
  const profileUrls = [
    ["Github", profile.githubAccount],
    ["Frontend Mentor", profile.frontEndMentorAccount],
    ["LinkedIn", profile.linkinAccount],
    ["Twitter", profile.twitterAccount],
    ["Instagram", profile.instagramAccount],
  ];

  return (
    <div className="modal">
      <div className="modal__img">
        <img src={`./social-links-profile/${profile.imgFileName}`}></img>
      </div>
      <div className="modal__name">{profile.profileName}</div>
      <div className="modal__location">{profile.location}</div>
      <div className="modal__desc">"{profile.desc}"</div>
      {profileUrls.map(([placeHolder, url]) => (
        <Link placeHolder={placeHolder} url={url} />
      ))}
    </div>
  );
};

export default function App() {
  const profile: ProfileType = {
    profileName: "Jessica Randall",
    location: "London, United Kingdom",
    imgFileName: "avatar-jessica.jpeg",
    desc: "Front-end developer and avid reader.",
    frontEndMentorAccount: "https://x.com/test123",
    githubAccount: "https://x.com/test123",
    instagramAccount: "https://x.com/test123",
    linkinAccount: "https://x.com/test123",
    twitterAccount: "https://x.com/test123",
  };
  return <Profile profile={profile} />;
}
