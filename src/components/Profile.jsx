import { useState } from "react";

export default function MainComponent({ firstName, lastName, age, hobby }) {
  // export default function MainComponent(props) {
  // deconstructing
  // const { firstName, lastName, age, hobby } = props.profile;
  const [showMore, setShowMore] = useState(false);
  return (
    <main className="m-2 flex flex-col h-full">
      <h3 className="inline pr-1">{firstName}</h3>
      {showMore ? (
        <>
          <h3 className="inline pr-1"> {lastName}</h3>
          <span>({age})</span>
          <h4>
            hobby:
            {hobby}
          </h4>
        </>
      ) : null}
      <div className="justify-end">
        <button onClick={() => setShowMore((prevState) => !prevState)}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </main>
  );
}
