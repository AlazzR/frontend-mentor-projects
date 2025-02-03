import { useState, useRef, useEffect } from "react";
import { default as postings } from "./data";
import Posting from "./Posting";
import "./App.css";

const categoriesForFilteringSet = [
  ...postings.reduce((acc, posting) => {
    acc.add(posting.role);
    acc.add(posting.level);
    posting.tools?.forEach((t) => {
      acc.add(t);
    });
    posting.languages?.forEach((l) => {
      acc.add(l);
    });
    return acc;
  }, new Set<string>()),
];

const FilterComponent: React.FC<{
  selectedCategories: Set<string>;
  onRemove: (val: string) => void;
  onClear: () => void;
  onAdd: (val: string) => void;
}> = ({ selectedCategories, onRemove, onClear, onAdd }) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [showAvailableOptions, setShowAvailableOptions] = useState(false);
  const availableCategories: string[] = [];
  categoriesForFilteringSet.forEach((category) => {
    if (!selectedCategories.has(category)) {
      availableCategories.push(category);
    }
  });

  useEffect(() => {
    const handleFilterClick = (event) => {
      if (event.target.parentNode?.className.includes("selected-category"))
        return;
      if (event.target.className.includes("available-category")) {
        const category = event.target.dataset.category;
        onAdd(category);
      }
      if (filterRef.current && filterRef.current.contains(event.target)) {
        setTimeout(() => setShowAvailableOptions((prev) => !prev), 0);
        return;
      }
      setTimeout(() => setShowAvailableOptions(false), 0);
    };
    document.addEventListener("mousedown", handleFilterClick);
    return () => {
      // Prevent Memory leak
      document.removeEventListener("mousedown", handleFilterClick);
    };
  }, []);

  return (
    <div className="filter">
      <div className="container">
        <div className="selected-categories" ref={filterRef}>
          {[...selectedCategories].map((cat) => {
            return (
              <div className="selected-category">
                <span>{cat}</span>
                <button
                  className="remove-category-btn pointer"
                  onClick={() => onRemove(cat)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <button className="clear pointer" onClick={onClear}>
          Clear
        </button>
      </div>

      <div
        className={
          "available-categories" + (showAvailableOptions ? " show" : "")
        }
      >
        {availableCategories.map((cat) => {
          return (
            <div className="available-category pointer" data-category={cat}>
              {cat}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function App() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  const onClear = () => {
    setSelectedCategories(() => {
      return new Set<string>();
    });
  };
  const onAdd = (cat) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      newSet.add(cat);
      return newSet;
    });
  };
  const onRemove = (cat) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      newSet.delete(cat);
      return newSet;
    });
  };

  const getPostings = () => {
    return postings.filter((posting) => {
      if (selectedCategories.size === 0) return true;
      return [...selectedCategories].every((cat) => {
        return (
          cat === posting.role ||
          cat === posting.level ||
          posting.tools.includes(cat) ||
          posting.languages.includes(cat)
        );
      });
    });
  };
  return (
    <div className="job-listing">
      <div className="job-listing-header"></div>
      <FilterComponent
        selectedCategories={selectedCategories}
        onAdd={onAdd}
        onClear={onClear}
        onRemove={onRemove}
      />
      <div className="job-postings">
        {getPostings().map((posting) => (
          <Posting
            data={posting}
            onAdd={onAdd}
            onRemove={onRemove}
            selectedCategories={selectedCategories}
          />
        ))}
      </div>
    </div>
  );
}
