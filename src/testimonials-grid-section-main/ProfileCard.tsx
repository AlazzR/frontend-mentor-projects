import Profile from "./Profile";

export default function ProfileCard({
  profile,
  additionalClasses,
}: {
  profile: Profile;
  additionalClasses: string[];
}) {
  return (
    <div className={`profile-card ${additionalClasses.join(" ")}`}>
      <div className="profile-heading">
        <div className="image">
          <img src={profile.GetImagePath()} />
        </div>
        <div className="profile-details">
          <div className="name">{profile.fullName}</div>
          <div className="secondary-text">{profile.occupation}</div>
        </div>
      </div>
      <div className="quote">{profile.quote}</div>
      <div className="secondary-text">{profile.description}</div>
    </div>
  );
}
