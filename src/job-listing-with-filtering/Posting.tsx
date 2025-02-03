const getPostedAtDiff: (d: Date) => number[] = (postedAt) => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - postedAt.getTime()); // Difference in milliseconds
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
  let totalWeeks = Math.floor(diffDays / 7);
  if (totalWeeks === 0) return [0, 0, 0, diffDays];
  let totalMonths = Math.floor(totalWeeks / 4);
  if (totalMonths === 0) return [0, 0, totalWeeks, diffDays - totalWeeks * 7];
  let totalYears = Math.floor(totalMonths / 12);
  if (totalYears === 0)
    return [
      0,
      totalMonths,
      totalWeeks - totalMonths * 4,
      diffDays - totalWeeks * 7,
    ];

  return [
    totalYears,
    totalMonths - totalYears * 12,
    totalWeeks - totalMonths * 4,
    diffDays - totalWeeks * 7,
  ];
};

export type Posting = {
  id: string | number;
  company: string;
  logo: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: Date;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

const Flag = ({ isNew = false, featured = false }) => {
  if (isNew) return <span className="flag new-flag">New!</span>;
  if (featured) return <span className="flag">Featured</span>;
  return "";
};

const JobHeading: React.FC<{
  company: string;
  isNew: boolean;
  featured: boolean;
}> = ({ company, isNew, featured }) => {
  return (
    <div className="heading">
      <h2>{company}</h2>
      <div className="flags">
        <Flag isNew={isNew} />
        <Flag featured={featured} />
      </div>
    </div>
  );
};

const Footer: React.FC<{
  postedAt: Date;
  contract: string;
  location: string;
}> = ({ postedAt, contract, location }) => {
  const formattedDate =
    getPostedAtDiff(postedAt)
      .map((num, indx) => {
        if (num === 0) return null;
        if (indx === 0) return `${num}y`;
        if (indx === 1) return `${num}m`;
        if (indx === 2) return `${num}w`;
        return `${num}d`;
      })
      .filter((str) => !!str)
      .join(" ") + " ago";
  const footerKeys: string[] = [formattedDate, contract, location];

  return (
    <div className="footer">
      {footerKeys.map((key) => (
        <span>{key}</span>
      ))}
    </div>
  );
};

const Tag = ({ cat, onAdd, onRemove, selectedCategories }) => {
  const onClick = () => {
    if (selectedCategories.has(cat)) return onRemove(cat);
    return onAdd(cat);
  };
  return (
    <span
      className={"tag pointer " + (selectedCategories.has(cat) ? "active" : "")}
      onClick={onClick}
    >
      {cat}
    </span>
  );
};

export default function Posting(props: {
  data: Posting;
  onAdd: (cat) => void;
  onRemove: (cat) => void;
  selectedCategories: Set<string>;
}) {
  const { data, onAdd, onRemove, selectedCategories } = props;
  return (
    <div className={"job-posting" + (data.isNew ? " new-posting" : "")}>
      <div className="image">
        <img src={"./job-listing-with-filtering/" + data.logo} />
      </div>
      <div className="main-section">
        <JobHeading
          company={data.company}
          isNew={data.isNew}
          featured={data.featured}
        />
        <div className="title pointer">
          <a href="http://localhost">{data.position}</a>
        </div>
        <Footer
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
        />
      </div>
      <div className="side-section">
        <Tag
          cat={data.role}
          onAdd={onAdd}
          onRemove={onRemove}
          selectedCategories={selectedCategories}
        />
        <Tag
          cat={data.level}
          onAdd={onAdd}
          onRemove={onRemove}
          selectedCategories={selectedCategories}
        />
        {data.tools.map((tool) => (
          <Tag
            cat={tool}
            onAdd={onAdd}
            onRemove={onRemove}
            selectedCategories={selectedCategories}
          />
        ))}
        {data.languages.map((lang) => (
          <Tag
            cat={lang}
            onAdd={onAdd}
            onRemove={onRemove}
            selectedCategories={selectedCategories}
          />
        ))}
      </div>
    </div>
  );
}
