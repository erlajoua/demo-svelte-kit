import { json } from '@sveltejs/kit';

export const GET = async () => {
  const greetings = [
    'Bonjour !',
    'Hello !',
    'Hola !',
    'Ciao !'
  ];
  
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  
  try {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Paris');
    const timeData = await response.json();
    
    return json({
      greeting: randomGreeting,
      timestamp: timeData.datetime
    });
  } catch (error) {
    return json({
      greeting: randomGreeting,
      timestamp: new Date().toISOString()
    });
  }
};