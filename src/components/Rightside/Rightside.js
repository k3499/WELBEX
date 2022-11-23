import './Rightside.css';

function Rightside() {
  return (
    <div className="rightside">
      <p className="rightside__title">Вместе с 
      <span className="rightside__title-important-free">бесплатной </span><span className="rightside__title-important-talk">консультацией</span> мы дарим:</p>
      <div className="rightside__features-box">
        <div className="rightside__features-box-item">
          <strong className="rightside__features-box-title">Виджеты</strong>
          <p className="rightside__features-box-subtitle">30 готовых решений</p>
        </div>
        <div className="rightside__features-box-item">
          <strong className="rightside__features-box-title">Dashboard</strong>
          <p className="rightside__features-box-subtitle">с показателями вашего бизнеса</p>
        </div>
        <div className="rightside__features-box-item">
          <strong className="rightside__features-box-title">Skype Аудит</strong>
          <p className="rightside__features-box-subtitle">отдела продаж и CRM системы</p>
        </div>
        <div className="rightside__features-box-item">
          <strong className="rightside__features-box-title">35 дней</strong>
          <p className="rightside__features-box-subtitle">использования CRM</p>
        </div>
      </div>
      <a href="#" className="rightside__button">Получить консультацию</a>
    </div>
  );
}

export default Rightside;
