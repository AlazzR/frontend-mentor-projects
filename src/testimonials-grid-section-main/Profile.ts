import Globals from "./Globals";

export default class Profile {
  public fullName: string;
  public occupation: string;
  public quote: string;
  public description: string;
  public profileImageName: string;

  public constructor(
    fullName,
    occupation,
    quote,
    description,
    profileImageName
  ) {
    this.fullName = fullName;
    this.occupation = occupation;
    this.quote = quote;
    this.description = description;
    this.profileImageName = profileImageName;
  }

  public GetImagePath() {
    return `${Globals.publicPath}/${this.profileImageName}`;
  }
}
