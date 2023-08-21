import { useState } from "react";

export default function MainComponent(props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <main className="m-2">
      <h3 className="inline pr-1">{props.profile.firstName}</h3>
      {showMore ? (
        <>
          <h3 className="inline pr-1"> {props.profile.lastName}</h3>
          <span>({props.profile.age})</span>
          <h4>
            hobby:
            {props.profile.hobby}
          </h4>
        </>
      ) : null}
      <button onClick={() => setShowMore((prevState) => !prevState)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </main>
  );
}
