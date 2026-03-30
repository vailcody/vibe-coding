import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide19CompetitorIntro({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
      <h2 className="phrase-text reveal" style={{ fontSize: 'clamp(2rem, 6vw, 5.5rem)' }}>Анализ<br />конкурентов</h2>
    </div>
  )
}
