import PresentationShell from '../../components/PresentationShell'
import type { SlideProps } from '../../components/PresentationShell'
import type { ComponentType } from 'react'

import Slide01Title from './slides/Slide01Title'
import Slide02Author from './slides/Slide02Author'
import Slide03Plan from './slides/Slide03Plan'
import Slide04Tweet from './slides/Slide04Tweet'
import Slide05PhraseVizhu from './slides/Slide05PhraseVizhu'
import Slide06PhraseGovoryu from './slides/Slide06PhraseGovoryu'
import Slide07PhraseZapuskayu from './slides/Slide07PhraseZapuskayu'
import Slide08PhraseWorks from './slides/Slide08PhraseWorks'
import Slide09Meme from './slides/Slide09Meme'
// Slide10Reasons removed (Предпосылки к развитию)
import Slide11SimplEnd from './slides/Slide11SimplEnd'
import Slide12Evolution from './slides/Slide12Evolution'
import Slide13Available from './slides/Slide13Available'
import Slide14Possibilities from './slides/Slide14Possibilities'
import Slide15Limitations from './slides/Slide15Limitations'
import Slide16Map from './slides/Slide16Map'
import Slide17ErrorCost from './slides/Slide17ErrorCost'
import Slide18Methodology from './slides/Slide18Methodology'
import Slide19CompetitorIntro from './slides/Slide19CompetitorIntro'
import Slide20WhyAnalyze from './slides/Slide20WhyAnalyze'
import Slide21HowToFind from './slides/Slide21HowToFind'
import Slide22WhatToAnalyze from './slides/Slide22WhatToAnalyze'
// Slide23AnalysisTools removed (дублирует «Как искать»)
import Slide24PrototypeIntro from './slides/Slide24PrototypeIntro'
import SlideBrowserAgents from './slides/SlideBrowserAgents'
import Slide25WhatIsPrototype from './slides/Slide25WhatIsPrototype'
// Slide26CloudTools removed (Облачные инструменты)
import Slide27HowTheyWork from './slides/Slide27HowTheyWork'
import SlideHarvi from './slides/SlideHarvi'
import Slide28LiveDemo from './slides/Slide28LiveDemo'
// Slide29PrototypeMethod removed (Методология: от промпта до прототипа)
import Slide30Summary from './slides/Slide30Summary'

const slides: ComponentType<SlideProps>[] = [
  Slide01Title,
  Slide02Author,
  Slide03Plan,
  Slide04Tweet,
  Slide05PhraseVizhu,
  Slide06PhraseGovoryu,
  Slide07PhraseZapuskayu,
  Slide08PhraseWorks,
  Slide09Meme,
  Slide11SimplEnd,
  Slide12Evolution,
  Slide13Available,
  Slide14Possibilities,
  Slide15Limitations,
  Slide16Map,
  Slide17ErrorCost,
  Slide18Methodology,
  Slide19CompetitorIntro,
  Slide20WhyAnalyze,
  Slide21HowToFind,
  Slide22WhatToAnalyze,
  Slide24PrototypeIntro,    // Создание прототипа
  SlideBrowserAgents,       // NEW: Почему браузерные агенты?
  Slide25WhatIsPrototype,
  Slide27HowTheyWork,       // Как работают
  SlideHarvi,               // NEW: harvi.pro
  Slide28LiveDemo,
  Slide30Summary,
]

export default function CentralUniversityPage() {
  return <PresentationShell slides={slides} />
}
