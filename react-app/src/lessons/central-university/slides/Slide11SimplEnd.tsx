import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide11SimplEnd({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
      <h2 className="phrase-text reveal" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>Но простота<br />быстро закончилась</h2>
    </div>
  )
}
