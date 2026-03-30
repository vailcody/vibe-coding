import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide22WhatToAnalyze({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">A3</span>
      <h2 className="reveal">Что анализировать</h2>
      <div className="card-grid reveal">
        <div className="card">
          <h3>👤 Пользовательский опыт</h3>
          <p>Как легко разобраться? Что нравится пользователям? Что раздражает? Читаем отзывы в App Store, Product Hunt, Reddit.</p>
        </div>
        <div className="card">
          <h3>⚙️ Фичи и функционал</h3>
          <p>Что умеет продукт? Какие фичи ключевые, а какие лишние? Чего не хватает?</p>
        </div>
        <div className="card">
          <h3>💰 Монетизация</h3>
          <p>Тарифы, freemium/trial, способ оплаты, средний чек. Какая модель работает в нише?</p>
        </div>
        <div className="card">
          <h3>🎯 Слабые места</h3>
          <p>Негативные отзывы — золото. Неудобный интерфейс, дорогие тарифы, слабая поддержка — это возможности для нас.</p>
        </div>
      </div>
    </>
  )
}
