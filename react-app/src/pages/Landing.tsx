import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Venue {
  id: string
  label: string
  lessons: {
    to: string
    external?: boolean
    title: string
    description: string
    meta: string
  }[]
}

const venues: Venue[] = [
  {
    id: 'course',
    label: 'Курс',
    lessons: [
      { to: '/lesson-1', title: 'Занятие 1', description: 'Создаём прототип', meta: '1 час · 19 марта' },
      { to: '/lesson-2', title: 'Занятие 2', description: 'Оживляем прототип в Cursor', meta: '2 часа · 24 марта' },
      { to: '/lesson-3', title: 'Занятие 3', description: 'SDD + Свой MCP-сервер', meta: '2 часа · 26 марта' },
    ],
  },
  {
    id: 'central-university',
    label: 'Центральный университет',
    lessons: [
      {
        to: '/vibe-coding/lecture-central-university/',
        external: true,
        title: 'Лекция',
        description: 'Вайб-кодинг: от идеи до продукта',
        meta: '1.5 часа · 30 марта',
      },
    ],
  },
]

export default function Landing() {
  const [active, setActive] = useState('course')
  const current = venues.find(v => v.id === active)!

  return (
    <div className="landing-page">
      <h1>Вайб-кодинг</h1>
      <p className="landing-subtitle">Константин Чуйков · 2026</p>

      <div className="tabs">
        {venues.map(v => (
          <button
            key={v.id}
            className={`tab${active === v.id ? ' active' : ''}`}
            onClick={() => setActive(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="lessons-grid">
        {current.lessons.map(l =>
          l.external ? (
            <a key={l.to} href={l.to} className="lesson-card">
              <h2>{l.title}</h2>
              <p>{l.description}</p>
              <div className="hours">{l.meta}</div>
            </a>
          ) : (
            <Link key={l.to} to={l.to} className="lesson-card">
              <h2>{l.title}</h2>
              <p>{l.description}</p>
              <div className="hours">{l.meta}</div>
            </Link>
          )
        )}
      </div>
    </div>
  )
}
