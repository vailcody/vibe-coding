import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide03Approaches({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">03</span>
      <h2 className="reveal">Как создают мобильные приложения</h2>
      <div className="card-grid stagger-list">
        <div className="card">
          <h3>Нативная разработка</h3>
          <p>Swift / Kotlin — максимальная производительность, полный доступ к API устройства. Отдельный код для iOS и Android.</p>
        </div>
        <div className="card" style={{ borderColor: 'var(--accent)' }}>
          <h3>React Native + Expo ⭐</h3>
          <p>Один проект — iOS и Android. Агенты отлично знают этот стек. <strong>Наш выбор.</strong></p>
        </div>
        <div className="card">
          <h3>Flutter</h3>
          <p>Google-фреймворк. Отличная производительность. Кодинг-агенты тоже умеют писать на Flutter — разницы для вайб-кодинга почти нет.</p>
        </div>
        <div className="card">
          <h3>PWA / WebView</h3>
          <p>Самый простой путь — обёртка над веб-сайтом. Ограниченный доступ к функциям устройства (камера, микрофон и др.).</p>
        </div>
      </div>
    </>
  )
}
