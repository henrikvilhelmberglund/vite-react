const name = "Henrik";
const schoolClassName = "FEND22";
const educationName = "Frontend Development";

export default function Header() {
  return (
    <header>
      <h1>{educationName}</h1>
      <h2>
        {name} ({schoolClassName})
      </h2>
    </header>
  );
}
