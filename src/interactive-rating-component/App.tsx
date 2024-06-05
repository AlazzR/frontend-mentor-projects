import "./App.css";
import { useState, Dispatch, SetStateAction } from "react";

type Rating = {
  key: number;
  val: number;
  isSelected: boolean;
};

type Ratings = Array<Rating>;

function getSubmissionForm(
  ratings: Ratings,
  setRatings: Dispatch<SetStateAction<Ratings>>,
  submitted: boolean,
  setSubmitted: Dispatch<SetStateAction<boolean>>
) {
  if (submitted) return;

  const ratingHandler = (key: number) => {
    setRatings((prevState) => {
      return prevState.map((rating) => {
        rating.isSelected = rating.key === key;
        return rating;
      });
    });
  };

  return (
    <div className="container">
      <div>
        <img
          className="star"
          src="./interactive-rating-component/icon-star.svg"
        ></img>
        <h2>How did we do?</h2>
        <div className="content">
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="ratings">
          {ratings.map((r) => {
            return (
              <button
                className={`rating-val ${r.isSelected ? "selected" : ""}`}
                key={r.key}
                onClick={() => ratingHandler(r.key)}
              >
                {r.val}
              </button>
            );
          })}
        </div>
        <button className="submit-button" onClick={() => setSubmitted(true)}>
          Submit
        </button>
      </div>
    </div>
  );
}

function getNotification(ratings: Ratings, submitted: boolean) {
  if (!submitted) return;
  const selectedRating = ratings.filter((rating) => rating.isSelected)[0];
  return (
    <div>
      <img src="./interactive-rating-component/illustration-thank-you.svg"></img>
      <h2>Thank you!</h2>
      <div>You selected {selectedRating?.val} out of 5</div>
      <div>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </div>
    </div>
  );
}

export default function App() {
  const [ratings, setRatings] = useState<Ratings>([
    {
      key: 1,
      val: 1,
      isSelected: false,
    },
    {
      key: 2,
      val: 2,
      isSelected: false,
    },
    {
      key: 3,
      val: 3,
      isSelected: false,
    },
    {
      key: 4,
      val: 4,
      isSelected: false,
    },
    {
      key: 5,
      val: 5,
      isSelected: false,
    },
  ]);

  const [submitted, setSubmitted] = useState(false);

  const SubmissionForm = getSubmissionForm(
    ratings,
    setRatings,
    submitted,
    setSubmitted
  );

  const Notification = getNotification(ratings, submitted);

  return submitted ? Notification : SubmissionForm;
}
