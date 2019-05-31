import React from 'react';

function Message(props) {
    return (
        <article className="column">
            <div className="notification is-primary">
                <div className="content">
                    <h3>{ props.author }</h3>
                    <p>{ props.message }</p>
                    <p className="has-text-secondary">{ props.date }</p>
                </div>
            </div>
        </article>
    );
}

export default Message;