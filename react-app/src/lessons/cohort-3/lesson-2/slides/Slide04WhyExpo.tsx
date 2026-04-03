import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide04WhyExpo({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">04</span>
      <h2 className="reveal">Почему Expo для вайб-кодинга</h2>
      <ul className="content-list stagger-list">
        <li><strong>Expo Go</strong> — мгновенный preview на телефоне по QR-коду, без сборки и аккаунтов</li>
        <li><strong>EAS Build</strong> — облачная сборка: не нужен Mac для iOS-билда, всё в браузере</li>
        <li><strong>Managed workflow</strong> — нативный код спрятан, агент работает только с JS/TS-файлами</li>
        <li><strong>Огромная экосистема</strong> — готовые SDK для камеры, микрофона, уведомлений, геолокации</li>
        <li><strong>Модели отлично знают</strong> React Native + Expo — качественная генерация кода</li>
      </ul>
      <div className="quote reveal">
        Всё, что может сломаться или поменяться — делайте на бэкенде. Бэкенд поправили и выкатили за минуты. Обновление мобилки через сторы = минимум 2 дня проверки.
      </div>
    </>
  )
}
