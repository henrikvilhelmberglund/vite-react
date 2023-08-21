const favoriteBands = [
  "Unlucky Morpheus",
  "Powerwolf",
  "Hammerfall",
  "Galneryus",
  "Onmyouza",
];
export default function MainComponent() {
  return (
    <main>
      <ul>
        {favoriteBands.map((band) => (
          <li>{band}</li>
        ))}
      </ul>
    </main>
  );
}
