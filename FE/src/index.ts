import { io } from 'socket.io-client';
import './index.scss';

const socket = io('http://localhost:3003');

// eslint-disable-next-line import/prefer-default-export
export const firstRender = () => {
  // client-side
  socket.on('connect', () => {
    console.log('socket connected');
    socket.emit('task status', {
      challengeId: 1,
      taskId: 21,
      status: 1,
      updated: new Date(),
    });

    socket.on("message", (message) => {
      console.log(message); // world
    });
  });

  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = '<h1 class="h1">Hello, World!!!</h1>';
  }
};

firstRender();
