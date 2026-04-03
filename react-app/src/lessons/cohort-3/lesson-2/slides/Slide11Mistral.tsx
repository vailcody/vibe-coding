import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide11Mistral({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">11</span>
      <h2 className="reveal">Транскрибация через Mistral</h2>
      <div className="card-grid stagger-list">
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Почему Mistral?</h3>
          <ul className="content-list">
            <li>Работает без VPN в России</li>
            <li>Регистрация по российскому номеру телефона</li>
            <li>Есть LLM-модели и модели транскрибации</li>
            <li>Щедрый бесплатный тир — хватит для личных проектов</li>
          </ul>
        </div>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h3>Как это работает</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              ['📱', 'Мобилка', 'записывает аудио'],
              ['⬇️', '', ''],
              ['⚡', 'FastAPI', 'принимает файл'],
              ['⬇️', '', ''],
              ['🤖', 'Mistral', 'возвращает текст'],
              ['⬇️', '', ''],
              ['🗄️', 'База данных', 'сохраняет заметку'],
              ['⬇️', '', ''],
              ['📱', 'Мобилка', 'показывает транскрипцию'],
            ].map(([icon, title, desc], i) => {
              if (title === '') return (
                <div key={i} style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>↓</div>
              )
              return (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'var(--bg-primary)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '6px',
                  padding: '0.4rem 0.7rem',
                  fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)'
                }}>
                  <span>{icon}</span>
                  <strong>{title}</strong>
                  <span style={{ color: 'var(--text-secondary)' }}>— {desc}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
