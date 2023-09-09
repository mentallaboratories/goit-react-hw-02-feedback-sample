import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Roadmap } from './Roadmap/Roadmap';

import { ItTip } from './ItTip/ItTip';




import css from './App.module.css';

// Експортуємо клас Застосунок , що розширює (об'єкт)Компонент

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // оновлення стану компонента
  updateState = nameFeedback => {
    // отримання старого стану компонента oldData
    this.setState(oldData => {
      let obj = { ...oldData }; // Створення копії старого стану через ...спред-оператор.

      // Створення нового об'єкта obj з оновленим значенням ключа, що збільшується на одиницю.
      obj[nameFeedback] = oldData[nameFeedback] + 1;

      return obj; //повернення obj з методу, що призведе до оновлення стану компонента
    });
  };

  // підрахунок загальної кількості відгуків
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  // підрахунок відсотка позитивних відгуків
  countPositiveFeedbackPercentage = () => {
    // Підрахунок за формулою: (good / (good + neutral + bad)) * 100.
    // Округлення в (меншу сторону) до цілого числа за допомогою Math.floor()
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100 || 0 //Якщо загальна кількість відгуків дорівнює нулю, повертається 0.
    );
  };

  render() {
    return (

      
      <div className={css.container}>
        <Section title="Proposition">
          <ItTip message="This is a paragraph"/>
       <p> Пропоную Вам долучитися до розробки сайту <strong>SkoolTimez</strong>, 
        Він містить readme файлів шкільних проєктів які дають бали з різних предметів. 
        Крім того ми залучимо дітей у якості інтернів і оформимо проект як наукову МАН роботу з інформатики по <code>HTML, CSS, JS, React.</code> 
        Це допоможе Вам добре стартонути в якості вчителя.</p>
      </Section>
        <Section title="Please Leave feedback">
          <FeedbackOptions

            // Пропс options є масивом, який містить ключі зі стану
            // компонента, які відповідають за відгуки, які можна залишити.
            options={Object.keys(this.state)}

            // Пропс onLeaveFeedback є функцією, яка
            // виконується при кліку на елементи відгуків.
            onLeavefeedback={this.updateState}
          />
        </Section>

        <Section title="Statistics">
          {/* Рендер за умовою */}
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There are no statistics..." />
          ) : (
            <Statistics

              // масив, який містить ключі зі стану компонента, які відповідають за типи відгуків.
              options={Object.keys(this.state)}

              // об'єкт, який містить значення кількості кожного типу відгуку.
              statistic={this.state}

              // загальна кількість відгуків
              total={this.countTotalFeedback()}

              // функція, яка розраховує відсоток позитивних відгуків
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>

        <Section title="Roadmap">
        <Roadmap message="Follow the steps...">
          </Roadmap>
        </Section>
      </div>
    );
  }
}

// Діма Берестень
