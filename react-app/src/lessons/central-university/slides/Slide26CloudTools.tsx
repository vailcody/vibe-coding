import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide26CloudTools({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">B2</span>
      <h2 className="reveal">Облачные инструменты</h2>
      <div className="card-grid reveal">
        <div className="card">
          <h3>🇷🇺 Harvi.pro</h3>
          <p>Российская команда, работает без VPN, оплата картой РФ. Корпоративные тарифы, поддержка на русском.</p>
        </div>
        <div className="card">
          <h3>🌐 Replit</h3>
          <p>Мощная облачная среда с полноценным бэкендом. Подходит для более сложных прототипов. Встроенный деплой.</p>
        </div>
        <div className="card">
          <h3>✨ Lovable / v0</h3>
          <p>Топ UI из коробки. Lovable — полное приложение, v0 от Vercel — компоненты на React. Красивый дизайн без усилий.</p>
        </div>
      </div>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
        Все работают в браузере — ничего не нужно устанавливать. Результат готов за минуты.
      </p>
    </>
  )
}
