import React, { useEffect, useState } from 'react'
import timelineService from '../../service/timeline'
import MessageForm from '../MessageForm/MessageForm'

function Timeline() {
    const [timeline, setTimeline] = useState([])
    const [error, setError] = useState('')

    const getTimeline = async () => {
        try {
            const timelineReceived: any = await timelineService.getTimeline();
            setTimeline(timelineReceived.data)            
            setError('')
        } catch (e: any) {
            setError(e)
        }
    }
    useEffect(() => {
        getTimeline();
    }, [])

  return (
    <>
      <h1>Timeline</h1>
      <h5>Retourner sur la <a href='/home'>page d'accueil</a></h5>
      <h4>{error}</h4>
      {timeline.map((comment: any, index: number) => (
        <div key={index}>{comment.author} : {comment.message}</div>
      ))}
      <MessageForm />
    </>
  )
}

export default Timeline