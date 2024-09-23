import React, {useState} from 'react';
import './style.css';
import NavBar from './NavBar'

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
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
<link rel="stylesheet" 
href="https://fonts.googleapis.com/icon?family=Material+Icons" />

const MainPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const [status , setStatus ] = React.useState('');

    return (
        <>

        <NavBar></NavBar>

        <p class="fs-2 text-center mt-4">Task's</p>

        <div className='form-container'>

            {/* input */}
            <Box
            component="form"
            className="input-form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
            noValidate
            >
                <TextField
                    id="standard-multiline-flexible"
                    label="Task Title"
                    multiline
                    maxRows={6}
                    variant="standard"
                    sx={{
                        // Change the underline color
                        '& .MuiInput-underline:before': {
                        borderBottomColor: '#31363F',  // Default underline color
                        },
                        '& .MuiInput-underline:hover:before': {
                        borderBottomColor: '#31363F',  // Hover color
                        },
                        '& .MuiInput-underline:after': {
                        borderBottomColor: '#31363F',  // Underline color when focused
                        },
                        
                        // Change the label color
                        '& .MuiInputLabel-root': {
                        color: 'gray',  // Default label color
                        
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                        color: '#31363F',  // Label color when focused
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
                        renderInput={(params) => (
                            <TextField 
                                {...params} 
                               
                            />
                        )}
                    />
                </Box>
            </LocalizationProvider>


            {/* status */}
            <Box sx={{ marginTop: '10px',  width: '180px'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status }
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
            <Stack direction="row" spacing={3} sx={{ marginTop: '22px', cursor: 'pointer' }} >
                <AddCircleIcon sx={{ fontSize: '30px'}} />
            </Stack>

        </div>

        {/* list */}
        <div class='mt-5'>

            <div className='to-do-list'>
                <p class="fs-2 text-center mt-4">To Do</p>

                <div className='list-container'>

                </div>
            </div>

            <div className='doing-list'>
                <p class="fs-2 text-center mt-4">Doing</p>

                <div className='list-container'>
                    
                </div>
            </div>

            <div className='done-list'>
                <p class="fs-2 text-center mt-4">Done</p>

                <div className='list-container'>
                
            </div>
        </div>
            
        </div>

        </>

    )

}

export default MainPage;