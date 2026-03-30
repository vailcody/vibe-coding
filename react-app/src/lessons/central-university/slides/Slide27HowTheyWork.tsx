import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide27HowTheyWork({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">B3</span>
      <h2 className="reveal">Как работают</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <span className="step-text"><strong>Базовый промпт</strong> — описываем идею приложения. Что делает, для кого, ключевые экраны.</span>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <span className="step-text"><strong>Генерация</strong> — AI создаёт рабочий прототип за 1-3 минуты. Уже можно кликать и смотреть.</span>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <span className="step-text"><strong>Итерации</strong> — говорим что изменить: "сделай кнопку красной", "добавь поле для email", "убери боковое меню". Продолжаем до результата.</span>
        </div>
      </div>
    </>
  )
}
