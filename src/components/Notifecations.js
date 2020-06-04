import React from 'react';

function Notifications({tasks}) {
  return (
    <div className="s-card-1">
        <h3 className="s-danger-text">Notifecations</h3>
        {tasks && tasks.map(task=> {
            return(
                <div className="s-d-flex s-align-center"  key={task.id}>
                <input type="checkbox" className="s-checkbox-switch s-primary s-m-5" />
            <div className="s-p-10 ">{task.id}</div>
                <button className="s-btn s-btn-info-outline">View</button>
                </div>
            )
        })}
        

        <div className="s-d-flex s-align-center">
           <input type="checkbox" className="s-checkbox-switch s-primary s-m-5" />
           <div className="s-p-10 ">Sweep the house</div>
           <button className="s-btn s-btn-info-outline">View</button>
        </div>
    </div>
  );
}

export default Notifications;
