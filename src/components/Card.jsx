import { Bookmark } from 'lucide-react'
import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="badge-time">{props.time}</span>
        <button className="bookmark-btn">
          <Bookmark size={20} strokeWidth={2.5} />
        </button>
      </div>
      
      <div className="card-body">
        <h3 className="company-name">{props.company}</h3>
        <h2 className="card-title">Senior Software Engineer</h2>
        <div className="card-tags">
          <span className="tag">Full Time</span>
          <span className="tag">Remote</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="salary">
          <span className="amount">$200k</span> / year
        </div>
        <div className="location">San Francisco, CA</div>
      </div>
    </div>
  )
}

export default Card