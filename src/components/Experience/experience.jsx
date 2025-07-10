import "./experience.scss";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <div className="content flex-centered">
          <span>Experience</span>
        </div>
        <div className="experience__description">
          <div className="experience__frontend experience__description-item">
            <h3>Frontend Technologies</h3>
            <div className="experience__content">
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>React.js</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>Next.js</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>TypeScript</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>JavaScript (ES6+)</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>HTML5 & CSS3</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend experience__description-item">
            <h3>Backend & Tools</h3>
            <div className="experience__content">
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>Node.js</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>Express.js</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>Git & GitHub</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>RESTful APIs</h4>
                  <small className="text-light">Advanced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiBadgeCheck className="experience__icon" />
                <div>
                  <h4>Responsive Design</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
