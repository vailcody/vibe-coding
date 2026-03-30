import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide30Summary({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">14</span>
      <h2 className="reveal">Итоги</h2>
      <ul className="content-list stagger-list">
        <li>Вайб-кодинг — суперсила для быстрой проверки идей</li>
        <li>Анализ конкурентов — первый шаг перед созданием продукта</li>
        <li>Прототип — дешевле ошибиться на стадии UI, чем переделывать код</li>
      </ul>
      <div className="reveal" style={{ marginTop: '2rem', background: 'var(--bg-secondary)', border: '2px solid var(--accent)', borderRadius: '10px', padding: '1.5rem 2rem' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'var(--text-primary)', marginBottom: '0.8rem' }}>🏠 Домашнее задание:</p>
        <ol style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
          <li>Выбери нишу для своего продукта</li>
          <li>Найди 5-10 конкурентов с помощью Perplexity или ChatGPT Deep Research</li>
          <li>Прокликай минимум 3 конкурента лично</li>
          <li>Сделай прототип своего продукта в Harvi.pro или Lovable</li>
        </ol>
      </div>
      <div className="big-text reveal">Вопросы?</div>
    </>
  )
}
