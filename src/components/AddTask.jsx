import { useState } from 'react';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import { CircleOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

export default function AddTask({ addTask, theme }) {
  const [taskName, setTaskName] = useState('');
  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <Box sx={{ backgroundColor: theme ? 'rgba(40,40,40,0.7)' : 'rgba(220,220,220,0.8)', boxShadow:'0px 0px 20px black', transition:'0.3s', ":focus-within":{backgroundColor: theme? 'rgba(10,10,10,0.7)':'rgba(255,255,255,0.8)'} }} className='w-[100%] border-[1px] border-transparent shadow-md focus-within:border-[#1976d2] backdrop-blur-md sticky bottom-0 mx-auto mt-1 mb-2 pt-1 rounded-md flex justify-center'>
      <FormControl fullWidth sx={{ width: '99%', paddingBottom: '0px' }} variant="standard">
        <Input
          id="standard-adornment-amount"
          startAdornment={<Button sx={{ color: 'white', marginRight: '10px' }} onClick={handleAddTask}><CircleOutlined sx={{ fontSize: '30px', color: theme? 'white':'black', transition:'0.3s' }} /></Button>}
          placeholder='Add a Task'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          sx={{ color: theme? 'white' : 'black', fontSize: '18px', paddingBottom: '5px' }}
        />
      </FormControl>
    </Box>
  );
}
