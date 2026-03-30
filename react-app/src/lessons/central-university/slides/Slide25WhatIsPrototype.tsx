import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide25WhatIsPrototype({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">B1</span>
      <h2 className="reveal">Что такое прототип?</h2>
      <ul className="content-list stagger-list">
        <li><strong>Design-first подход</strong> — сначала делаем интерфейс, потом логику. Так дешевле проверить идею.</li>
        <li><strong>Имитация приложения</strong> — выглядит как настоящее, но не имеет реального бэкенда. Кнопки работают, данные статичные.</li>
        <li><strong>Цель — валидация идеи</strong> — показать пользователям, собрать обратную связь, найти проблемы до написания кода.</li>
        <li><strong>Экономия времени и денег</strong> — переделать прототип в 10 раз дешевле, чем переделать готовый продукт.</li>
        <li><strong>Инструмент переговоров</strong> — показываем инвесторам, партнёрам, заказчикам без реализации.</li>
      </ul>
    </>
  )
}
