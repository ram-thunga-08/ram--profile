import "./workExperience.scss";
import { HiBadgeCheck } from "react-icons/hi";
import { useState, useEffect } from "react";
import { workExperienceData } from "../../constants/workExperienceData";

const WorkExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === workExperienceData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === workExperienceData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? workExperienceData.length - 1 : currentIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="work-experience">
      <div className="container work-experience__container">
        <div className="content flex-centered">
          <span>Professional Experience</span>
        </div>

        <div className="work-experience__carousel">
          <div className="carousel-controls">
            <button
              className="carousel-btn prev-btn"
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              ‹
            </button>
            <button
              className="carousel-btn next-btn"
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              ›
            </button>
          </div>

          <div className="work-experience__content">
            <div
              className="work-experience__slides"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {workExperienceData.map((experience) => (
                <div key={experience.id} className="work-experience__item">
                  <div className="work-experience__header">
                    <div className="header-left">
                      <h3>{experience.title}</h3>
                      <span className="company">{experience.company}</span>
                    </div>
                    <div className="header-right">
                      <span className="duration">{experience.duration}</span>
                      {/* <span className="location">{experience.location}</span> */}
                    </div>
                  </div>
                  <div className="work-experience__details">
                    <ul>
                      {experience.responsibilities.map(
                        (responsibility, index) => (
                          <li key={index}>
                            <HiBadgeCheck className="work-experience__icon" />
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="carousel-pagination">
            {workExperienceData.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
