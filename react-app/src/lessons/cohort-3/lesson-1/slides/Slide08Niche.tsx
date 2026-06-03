import type { SlideProps } from '../../../../components/PresentationShell'

export default function Slide08Niche({}: SlideProps) {
  return (
    <>
      <span className="slide-number reveal">08</span>
      <h2 className="reveal">Как выбрать нишу?</h2>
      <div className="card-row stagger-list">
        <div className="card">
          <h3>1. Решай свою боль</h3>
          <p>Иди в свою доменную экспертизу или экспертизу клиента/заказчика. Не иди туда, где нет компетенций.</p>
          <p style={{ marginTop: '0.75rem', opacity: 0.6, fontSize: '0.9rem' }}>
            <em>«Ваш «секрет» — это глубокое понимание своей профессиональной ниши»</em><br />
            — Питер Тиль
          </p>
        </div>
        <div className="card">
          <h3>2. Сегментируйся узко</h3>
          <p>Не «рынок CRM», а «CRM для фитнес-студий». Не делай общий продукт для всех.</p>
          <p style={{ marginTop: '0.75rem', opacity: 0.6, fontSize: '0.9rem' }}>
            Маленькая группа, которая <strong>ОЧЕНЬ</strong> хочет — лучше большой, которая «неплохо бы».<br />
            <em>(Facebook — только с Гарварда, Microsoft — только с владельцев Altair)</em>
          </p>
        </div>
        <div className="card highlighted">
          <h3>3. Иди туда, где есть конкуренты</h3>
          <p>Конкуренты = есть рынок, есть платящие пользователи и наработанный опыт.</p>
          <p style={{ marginTop: '0.75rem', opacity: 0.6, fontSize: '0.9rem' }}>
            <em>«Плохой рынок убивает даже отличный продукт. Хороший рынок «вытаскивает» продукт»</em><br />
            — Marc Andreessen
          </p>
        </div>
      </div>
      <p className="reveal" style={{ marginTop: '1rem', opacity: 0.6, fontSize: '0.9rem' }}>
        <a href="https://t.me/vibe_coding/491" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
          t.me/vibe_coding/491
        </a>
      </p>
    </>
  )
}
