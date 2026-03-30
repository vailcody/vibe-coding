import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide03Plan({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">—</span>
      <h2 className="reveal">План лекции</h2>
      <div className="steps reveal">
        <div className="step">
          <span className="step-number">01</span>
          <span className="step-text">Что такое вайб-кодинг?</span>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <span className="step-text">Анализ конкурентов и выбор ниши</span>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <span className="step-text">Создание прототипа (практика)</span>
        </div>
      </div>
    </>
  )
}
