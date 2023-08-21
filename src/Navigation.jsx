export default function Navigation(props) {

  return (
    <nav>
      <ul className="nav">
        {props.links.map((link) => {
          return (
            <li>
              <a href={link.url}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
