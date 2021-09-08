import React from 'react'


const Notifications = ({notifications}) => {

  console.log(notifications)

  let results = notifications.slice(0,4).sort((a,b) => a.createdAt - b.createdAt)

    return (
       <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { results && results.map((item,index) =>{
              return <li key={index}>
                <span className="blue-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">{item.createdAt}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Notifications
