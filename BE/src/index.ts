import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import schedule from 'node-schedule';
import { taskRouter } from './components/task/task.routes';
import { actualAchievementsRouter } from './components/actualAchivements/actualAchievements.routes';
import { actualAchieveItemsRouter } from './components/achiveItems/achieveItem.routes';
import { manageTaskStatus, updateTaskStatus } from './components/challenge/challenge';
import { calculateAchievements } from './components/actualAchivements/actualAchivements';


const PORT = process.env.PORT || 3003;
const app = express();

const httpServer = createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('user connected');
  // socket.emit('message', { manny: 'hey how are you?'});
  socket.on('task status', (data) => {
    updateTaskStatus(data);
    manageTaskStatus(data);
    calculateAchievements(data.challengeId);
  })
});

schedule.scheduleJob('00 00 * * *',
  async () => {
    io.sockets.on('task status', (data: any) => {
      updateTaskStatus(data);
      manageTaskStatus(data);
      calculateAchievements(data.challengeId);
    });
  });


app.use(express.json());
app.get('/api/', (request, response) => {
  response.json('OK')
})
app.use('/api', taskRouter);
app.use('/api', actualAchievementsRouter);
app.use('/api', actualAchieveItemsRouter);

httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`))