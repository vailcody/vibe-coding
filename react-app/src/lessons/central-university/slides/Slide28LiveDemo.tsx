import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide28LiveDemo({}: SlideProps) {
  return (
    <div className="center-slide" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
      <div className="geo-square" style={{ width: 200, height: 200, bottom: '5%', left: '5%', opacity: 0.08 }} />
      <div className="geo-line" style={{ width: 3, height: 200, top: '10%', right: '10%' }} />
      <span className="slide-number reveal" style={{ position: 'absolute', top: 'var(--slide-padding)', left: 'var(--slide-padding)' }}>Live Demo</span>
      <p className="subtitle reveal" style={{ marginBottom: '0.5rem' }}>Создаём прототип прямо сейчас</p>
      <div className="dramatic reveal">Поехали!</div>
    </div>
  )
}
