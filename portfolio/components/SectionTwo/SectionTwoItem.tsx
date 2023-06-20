import { Idata } from ".";

interface SectionTwoItemProps {
  itemKey: number;
  data: Idata;
}
export const SectionTwoItem: React.FC<SectionTwoItemProps> = ({
  itemKey,
  data,
}) => {
  return (
    <article className={(itemKey % 2 === 0) ? "" : "reverse"}>
      <div className="text">
        <h4>{data.type}</h4>
        <h3>{data.title}</h3>
        <p className="blackbox">
          {data.description} and multiple links look{" "}
          <a href={data.link}>like this</a>
        </p>
        <h4>Technologies used include:</h4>
        <ul>
          {data.technologies.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <img key={itemKey} src={data.image} alt={data.title} />
    </article>
  );
};
