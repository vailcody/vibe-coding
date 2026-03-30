import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide29PrototypeMethod({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">B5</span>
      <h2 className="reveal">Методология: от промпта до прототипа</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <span className="step-text"><strong>Пишем промпт</strong> — описываем идею, аудиторию, ключевые экраны. Чем конкретнее, тем лучше результат.</span>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <span className="step-text"><strong>Генерируем в нескольких сервисах</strong> — один промпт запускаем в Harvi, Lovable и v0 параллельно.</span>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <span className="step-text"><strong>Сравниваем результаты</strong> — смотрим UI, удобство, полноту реализации. Выбираем лучший вариант.</span>
        </div>
      </div>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'var(--text-secondary)', marginTop: '2rem' }}>
        Правило 3x: всегда генерируй в 3 сервисах — лучший результат не предсказать заранее.
      </p>
    </>
  )
}
