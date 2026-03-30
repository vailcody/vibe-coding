import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide23AnalysisTools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">A4</span>
      <h2 className="reveal">Инструменты анализа</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <span className="step-text"><strong>Perplexity</strong> — быстрый AI-обзор с источниками, отлично для первого среза рынка</span>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <span className="step-text"><strong>ChatGPT Deep Research</strong> — глубокий анализ, сравнительные таблицы, поиск по сотням источников</span>
        </div>
        <div className="step">
          <span className="step-number">03</span>
          <span className="step-text"><strong>Вручную прокликивать каждого</strong> — зарегистрироваться, пройти онбординг, потрогать продукт. Ничто не заменит личный опыт</span>
        </div>
      </div>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'var(--text-secondary)', marginTop: '2rem' }}>
        Правило: минимум 3 конкурента — изучить лично. Остальных — через AI-анализ.
      </p>
    </>
  )
}
