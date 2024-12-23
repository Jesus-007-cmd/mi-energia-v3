import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    "/images/screens/electromovilidad/img17.png",
    "/images/screens/electromovilidad/img18.jpg",
    "/images/screens/electromovilidad/img19.jpg",
    "/images/screens/electromovilidad/img20.jpg",
    "/images/screens/electromovilidad/img21.jpg",
    "/images/screens/electromovilidad/img22.jpg",
  ];

  const texts = [
    {
      title: "Educación",
      description:
        "Fomentar la sostenibilidad adaptando en los campus cargadores de vehículos eléctricos para estudiantes, personal y visitantes.",
    },
    {
      title: "Flotillas",
      description:
        "Ofrecemos monitoreo avanzado de flotillas para que su empresa pueda centrarse en la disponibilidad y confiabilidad de sus estaciones de carga y flota.",
    },
    {
      title: "Centros Comerciales",
      description:
        "Ofrecer puntos de recarga en centros comerciales, ayudará a mejorar la experiencia del cliente, y contribuirá a la sostenibilidad y modernización.",
    },
    {
      title: "Restaurantes",
      description:
        "La instalación de puntos de recarga para vehículos eléctricos puede llegar a ser una toma de decisión para el cliente a la hora de elegir dónde ir a comer.",
    },
    {
      title: "Hoteles",
      description:
        "Al incorporar estaciones de carga para vehículos eléctricos, no solo mejora la experiencia del huésped, sino también posiciona al hotel como un establecimiento moderno y sostenible.",
    },
    {
      title: "Casa Club Desarrollo Inmobiliario",
      description:
        "Posicione a su desarrollo inmobiliario como líder en sostenibilidad ofreciendo a residentes e invitados estaciones de carga para vehículos eléctricos.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      {/* Carrusel */}
      <div className="carousel">
        <div
          className="slides"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Texto alineado debajo */}
      <div className="carousel-text">
        {texts.map((text, index) => (
          <label
            key={index}
            className={`text-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
          >
            <hr className="mb-1" />
            <h3>{text.title}</h3>
            <p>{text.description}</p>
          </label>
        ))}
      </div>

      {/* Estilos en línea */}
      <style>{`
        .carousel-container {
           text-align: center;
            width: 100%;
            max-width: 85.5%;
            margin: auto;
            z-index: 1; 
        }

        .carousel {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }

        .slides {
          display: flex;
          transition: transform 1s ease-in-out;
          width: 100%;
        }

        .slide {
          flex: 0 0 100%;
          height: 600px;
          background-size: cover;
          background-position: center;
        }

        .carousel-text {
          display: flex;
          justify-content: space-around;
          padding: 20px 5px;
          flex-wrap: wrap;
        }

        .text-item {
          flex: 1;
          min-width: 150px;
          text-align: center;
          padding: 5px;
          cursor: pointer;
          color: lightgray;
          transition: color 0.3s ease;
        }

        .text-item.active h3,
        .text-item.active p {
          color: black;
          font-weight: bold;
        }

        .text-item h3 {
          font-size: 0.9em;
          font-weight: bold;
          margin-bottom: 0;
        }

        .text-item p {
          font-size: 0.85em;
        }

        hr {
          border: none;
          border-top: 2px solid lightgray;
        }

        .text-item.active hr {
          border-top: 2px solid black;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
