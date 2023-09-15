import React, { Component } from 'react';
import "./style.css"
import logo from "./01.jpg";
import logo2 from "./02.jpg";




class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      images: [
        {
          id: 1,
          src: logo,
          title: 'Фото 1',
          description: 'Описание фото 1',
        },
        {
          id: 2,
          src: logo2,
          title: 'Фото 2',
          description: 'Описание фото 2',
        },
        {
          id: 3,
          src: logo,
          title: 'Фото 3',
          description: 'Описание фото 3',
        },
        {
          id: 4,
          src: logo,
          title: 'Фото 4',
          description: 'Описание фото 4',
        },
        {
          id: 5,
          src: logo,
          title: 'Фото 5',
          description: 'Описание фото 5',
        },
        {
          id: 6,
          src: logo,
          title: 'Фото 6',
          description: 'Описание фото 6',
        },
      ],
    };
  }
  componentDidMount() {
    this.startAutoPlay();
  }

  componentWillUnmount() {
    this.stopAutoPlay();
  }

  startAutoPlay = () => {
    this.autoPlayInterval = setInterval(this.nextSlide, 3000);
  };

  stopAutoPlay = () => {
    clearInterval(this.autoPlayInterval);
  };

  prevSlide = () => {
    if (!this.state.isAnimating) { // Проверяем, выполняется ли анимация
      this.setState(
        (prevState) => ({
          currentIndex: (prevState.currentIndex - 1 + prevState.images.length) % prevState.images.length,
          isAnimating: true, // Устанавливаем флаг анимации в true
        }),
        () => {
          setTimeout(() => {
            this.setState({ isAnimating: false }); // Завершаем анимацию после таймаута
          }, 500); // Допустим, анимация длится 0.5 секунды (зависит от ваших CSS-анимаций)
        }
      );
    }
  };

  nextSlide = () => {
    if (!this.state.isAnimating) {
      this.setState(
        (prevState) => ({
          currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
          isAnimating: true,
        }),
        () => {
          setTimeout(() => {
            this.setState({ isAnimating: false });
          }, 500);
        }
      );
    }
  };

  render() {
    const { currentIndex, images, isAnimating } = this.state;
    const currentImage = images[currentIndex];
    const imageStyle = {
      opacity: isAnimating ? 0 : 1, // Установите opacity 0 во время анимации
    };
    const imageClassName = isAnimating ? "image-enter" : "image"; // Добавляем класс анимации только во время анимации

    return (
      <div className="slider">
        <button onClick={this.prevSlide} className="button">&lt;</button>
        <div className={imageClassName}>
          <img src={currentImage.src} alt={currentImage.title} style={imageStyle} />
        </div>
        <div className="info">
          <h2>{currentImage.title}</h2>
          <p>{currentImage.description}</p>
        </div>
        <button onClick={this.nextSlide} className="button">&gt;</button>
      </div>
    );
  }
}

export default Slider;
