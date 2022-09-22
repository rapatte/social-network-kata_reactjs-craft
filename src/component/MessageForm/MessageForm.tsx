import React from 'react';
import messageService from '../../service/message';
import './messageForm.css';

function MessageForm() {

  const handleSubmit = async (message: any) => {
    await messageService.postMessage(message)    
  }

  return (
    <div className='messageForm'>
        <h3>Poster un message</h3>
        <form 
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                const target = e.target as typeof e.target & {
                    author: { value: string };
                    message: { value: string };
                };
                const author = target.author.value;
                const message = target.message.value;
                handleSubmit({author: author, message: message});
            }}>
            <label>Auteur : <input type="text" name='author' /></label>
            <label>Message : <input type="text" name='message' /></label>
            <input type="submit" value="Envoyer" />
        </form>
    </div>
  )
}

export default MessageForm;
