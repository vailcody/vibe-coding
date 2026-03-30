import type { SlideProps } from '../../../components/PresentationShell'

export default function Slide06PhraseGovoryu({}: SlideProps) {
  return (
    <div className="slide-phrase" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center' }}>
      <h2 className="phrase-text reveal">Говорю что-то</h2>
    </div>
  )
}
