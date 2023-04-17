import style from './Condition.module.scss';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Step from '../../components/Step/Step';
import { useAppSelector } from '../../store/hooks';
import { selectCurrentStep } from '../../store/stepsSlice';

// steps
const stepsList = [
  {
    question:
      '1. Какой жанр фильма ты бы предпочел посмотреть? Можешь выбрать <br/> номер из списка или написать свой вариант.',
    checkboxList: [
      [
        {
          name: 'name',
          title: 'Боевик',
        },
        {
          name: 'name',
          title: 'Комедия',
        },
        {
          name: 'name',
          title: 'Драма',
        },
        {
          name: 'name',
          title: 'Фантастика',
        },
        {
          name: 'name',
          title: 'Ужасы',
        },
      ],
      [
        {
          name: 'name',
          title: 'Мелодрама',
        },
        {
          name: 'name',
          title: 'Триллер',
        },
        {
          name: 'name',
          title: 'Мультфильм',
        },
      ],
    ],
  },
  {
    question:
      '2. Есть ли конкретные актеры, которых ты бы хотел увидеть в фильме? <br/> Можешь назвать их имена или ответить "Любой".',
    userInput: true,
    inputPlaceholder: 'Имена актёров',
    hideBtns: true,
  },
  {
    question:
      '3. Есть ли конкретный режиссер, работы которого ты бы хотел посмотреть? <br/> Можешь назвать его имя или ответить "Любой".',
    userInput: true,
    inputPlaceholder: 'Имя режиссёра',
    hideBtns: true,
  },
  {
    question:
      '4. Какой год выпуска фильма тебя интересует? Можешь назвать конкретный год или <br/> период времени, который тебе ближе, или ответить "Любой".',
    userInput: true,
    inputPlaceholder: '2006',
    hideBtns: true,
  },
  {
    question:
      '5. В какое место и время событий тебе хотелось бы попасть? <br /> Если есть конкретные предпочтения, то можешь их озвучить.',
    subtitle:
      'Например, это может быть фантастический мир, средневековье, постапокалиптика или даже космос. Любое место и время, которое тебе интересно',
    userInput: true,
    isFinalStep: true,
  },
];

const Condition = () => {
  const currentStep = useAppSelector(selectCurrentStep);

  return (
    <div className={style.condition}>
      <div className='container'>
        <div className={`${style.conditionBody} screen-body`}>
          {currentStep === 0 ? (
            <div className='screen__text'>
              Приветствую! Я буду рад помочь тебе подобрать фильм для просмотра!
              Для начала, давай я задам тебе несколько вопросов, чтобы узнать
              твои предпочтения и настроение
            </div>
          ) : (
            ''
          )}
          <ProgressBar
            className={style.conditionBody__progress}
            percentage={(100 / (stepsList.length - 1)) * currentStep}
          />

          {stepsList.map((item: any, index: number) => {
            if (currentStep === index) {
              return (
                <Step
                  key={index}
                  question={item.question}
                  subtitle={item.subtitle}
                  checkboxList={item.checkboxList}
                  currentStep={currentStep}
                  inputPlaceholder={item.inputPlaceholder}
                  hideBtns={item.hideBtns ? true : false}
                  userInput={item.userInput ? true : false}
                  isFinalStep={item.isFinalStep ? true : false}
                />
              );
            } else {
              return '';
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Condition;
