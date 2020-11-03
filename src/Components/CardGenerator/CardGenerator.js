import './CardGenerator.css'
import Card from '../Card/Card';
const data = require('./projects.json');

const CardGenerator = () => (
  <article className="CardGenerator">
    {data.projects.map((project) => <Card key={project.title} title={project.title} link={project.link} />)}
  </article>
);

export default CardGenerator;
