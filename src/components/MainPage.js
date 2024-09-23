import React, { useState } from 'react';
import './style.css';
import NavBar from './NavBar';

// Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// datepicker
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// status picker
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// add button
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// delete icon
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MainPage = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState('');
  const [tasks, setTasks] = useState({ todo: [], doing: [], done: [] });

  const handleAddTask = () => {
    if (!taskTitle || !status) {
      alert("Please fill in both the task title and status.");
      return;
    }

    const newTask = {
      title: taskTitle,
      date: selectedDate ? selectedDate.format('MM/DD/YYYY') : null,
      status: status,
    };

    // Add task to the respective category
    if (status === 10) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        todo: [...prevTasks.todo, newTask],
      }));
    } else if (status === 20) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        doing: [...prevTasks.doing, newTask],
      }));
    } else if (status === 30) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        done: [...prevTasks.done, newTask],
      }));
    }

    // Clear the form after adding the task
    setTaskTitle('');
    setSelectedDate(null);
    setStatus('');
  };

  const handleChangeTaskStatus = (task, newStatus) => {
    const removeTask = (list, taskToRemove) => list.filter((t) => t !== taskToRemove);

    setTasks((prevTasks) => {
      let updatedTasks = { ...prevTasks };

      if (task.status === 10) {
        updatedTasks.todo = removeTask(prevTasks.todo, task);
      } else if (task.status === 20) {
        updatedTasks.doing = removeTask(prevTasks.doing, task);
      } else if (task.status === 30) {
        updatedTasks.done = removeTask(prevTasks.done, task);
      }

      const updatedTask = { ...task, status: newStatus };

      if (newStatus === 10) {
        updatedTasks.todo = [...updatedTasks.todo, updatedTask];
      } else if (newStatus === 20) {
        updatedTasks.doing = [...updatedTasks.doing, updatedTask];
      } else if (newStatus === 30) {
        updatedTasks.done = [...updatedTasks.done, updatedTask];
      }

      return updatedTasks;
    });
  };

  const renderTask = (task) => (
    <div key={task.title} className="task-item">
        <div className='item1'>
            <p>{task.title}</p>
        </div>
        <div className='item2'>
            <p>{task.date}</p>
        </div>
      <FormControl className="custom-form-control">
        <Select
            value={task.status}
            onChange={(e) => handleChangeTaskStatus(task, e.target.value)}
            className="custom-select"
        >
            <MenuItem value={10}>To Do</MenuItem>
            <MenuItem value={20}>Doing</MenuItem>
            <MenuItem value={30}>Done</MenuItem>
        </Select>
      </FormControl>

      <DeleteForeverIcon className='delete-icon'></DeleteForeverIcon>
    </div>
  );

  return (
    <>
      <NavBar />
      <p className="fs-3 text-center mt-4">Tasks</p>

      <div className='form-container'>
        {/* input */}
        <Box
          component="form"
          className="input-form"
          noValidate
        >
          <TextField
            id="standard-multiline-flexible"
            label="Task Title"
            multiline
            maxRows={6}
            variant="standard"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            sx={{
              '& .MuiInput-underline:before': { borderBottomColor: '#31363F' },
              '& .MuiInput-underline:hover:before': { borderBottomColor: '#31363F' },
              '& .MuiInput-underline:after': { borderBottomColor: '#31363F' },
              '& .MuiInputLabel-root': { color: 'gray' },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#31363F',
                fontWeight: 'bold',
              },
            }}
          />
        </Box>

        {/* datepicker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ marginTop: '10px', width: '180px' }}>
            <DatePicker
              label="Select a date"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </LocalizationProvider>

        {/* status */}
        <Box sx={{ marginTop: '10px', width: '180px' }}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              label="Status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value={10}>To Do</MenuItem>
              <MenuItem value={20}>Doing</MenuItem>
              <MenuItem value={30}>Done</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* add button */}
        <Stack direction="row" spacing={3} sx={{ marginTop: '22px', cursor: 'pointer' }} onClick={handleAddTask}>
          <AddCircleIcon sx={{ fontSize: '30px' }} />
        </Stack>
      </div>

      {/* list */}
      <div className='container-list-items'>
        {/* To Do list */}
        <div className='to-do-list'>
          <p className="fs-3 text-center mt-4">To Do</p>
          <div className='list-container'>
            {tasks.todo.map(renderTask)}
          </div>
        </div>

        {/* Doing list */}
        <div className='doing-list'>
          <p className="fs-3 text-center mt-4">Doing</p>
          <div className='list-container'>
            {tasks.doing.map(renderTask)}
          </div>
        </div>

        {/* Done list */}
        <div className='done-list'>
          <p className="fs-3 text-center mt-4">Done</p>
          <div className='list-container'>
            {tasks.done.map(renderTask)}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
