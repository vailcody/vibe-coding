import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide21HowToFind({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">A2</span>
      <h2 className="reveal">Как искать конкурентов</h2>
      <div className="card-grid reveal">
        <div className="card">
          <h3>🔍 Perplexity</h3>
          <p>AI-поиск с источниками. Быстро даёт список конкурентов с описанием и ссылками.</p>
        </div>
        <div className="card">
          <h3>🤖 ChatGPT Deep Research</h3>
          <p>Глубокое исследование рынка. Анализирует десятки источников и структурирует выводы.</p>
        </div>
        <div className="card">
          <h3>📊 Google</h3>
          <p>Поиск по ключевым словам ниши. Смотрим кто в топе, кто рекламируется.</p>
        </div>
      </div>
      <div className="reveal" style={{ marginTop: '2rem', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent)', padding: '1.2rem 1.5rem', borderRadius: '0 8px 8px 0' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(0.85rem, 1.3vw, 1rem)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Промпт для старта:</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'var(--text-primary)', fontStyle: 'italic' }}>"Найди топ-10 конкурентов в нише X, их плюсы/минусы, количество пользователей, способ монетизации"</p>
      </div>
    </>
  )
}
