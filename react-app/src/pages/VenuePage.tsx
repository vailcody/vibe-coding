import { Link } from 'react-router-dom'

interface LessonCard {
  to: string
  title: string
  description: string
  meta: string
}

interface VenuePageProps {
  title: string
  lessons: LessonCard[]
}

export default function VenuePage({ title, lessons }: VenuePageProps) {
  return (
    <div className="landing-page">
      <Link to="/" className="back-link" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        marginBottom: '2rem',
        transition: 'color 0.2s',
      }}>
        ← Назад
      </Link>
      <h1>{title}</h1>
      <p className="landing-subtitle">Константин Чуйков · 2026</p>

      <div className="lessons-grid">
        {lessons.map(l => (
          <Link key={l.to} to={l.to} className="lesson-card">
            <h2>{l.title}</h2>
            <p>{l.description}</p>
            <div className="hours">{l.meta}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
