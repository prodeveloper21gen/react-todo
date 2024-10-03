import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { BlurCircular, Delete, Done, Edit, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import AddTask from './AddTask';
let blur = false
function createData(id, taskName, taskDesc, completed, stared) {
  return { id, taskName, taskDesc, completed, stared };
}

export function Row(props) {
  const { row, toggleCompleted, toggleStared, deleteTask, editTask, theme } = props;
  const [open, setOpen] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editTaskName, setEditTaskName] = React.useState(row.taskName);
  const [editTaskDesc, setEditTaskDesc] = React.useState(row.taskDesc);

  const handleRowClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  const handleEdit = () => {
    if (isEditing) {
      editTask(row.id, editTaskName, editTaskDesc);
    }
    setIsEditing(!isEditing);
  };
  return (
    <React.Fragment>
      <Button sx={{ color: row.completed ? '#333' : '#999', textTransform: 'none', textAlign: 'start', cursor: 'default', ":active": { scale: 0.98 }, marginTop: '5px', transition: '0.5s', display: 'block', width: '100%', padding: '0', borderRadius: '10px' }} key={row.id}>
        <Box
          sx={{
            display: 'flex', wordBreak: 'break-word',
            opacity: row.completed ? 0.9 : 1,
            backgroundColor: theme
              ? (row.completed ? 'rgba(0,0,0,0.9)' : 'rgba(20,20,20,0.95)')
              : (row.completed ? 'rgba(180,180,180,0.9)' : 'rgba(240,240,240,0.95)'),
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: theme
                ? (row.completed ? 'rgba(0,0,0,0.9)' : 'rgba(40,40,40,0.95)')
                : (row.completed ? 'rgba(180,180,180,0.9)' : 'rgba(255,255,255,0.98)'),
            },
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: '0.5s'
          }}>
          <Box className='flex items-center w-[100%]'>
            <TableCell sx={{ color: theme ? 'white' : 'black', transition: '0.3s', borderBottom: '0px' }}>
              <Checkbox
                checked={row.completed}
                onChange={() => toggleCompleted(row.id)}
                sx={{ color: theme ? 'white' : 'black', transition: '0.3s' }}
              />
            </TableCell>
            <TableCell sx={{ color: theme ? 'white' : 'black', transition: '0.3s', width: '100%', fontSize: '18px', borderBottom: '0px' }}>
              {isEditing ? (
                <TextField
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                  sx={{
                    color: theme ? 'white' : 'black',
                    width: '100%',
                    padding: '5px',
                    border: theme ? '1px solid white' : '1px solid black',
                    borderRadius: '10px',
                    '& .MuiInputBase-input': { color: theme ? 'white' : 'black', fontSize: '18px' },
                    '& .MuiInputBase-input::placeholder': { color: 'gray' }
                  }}
                  variant="standard"
                />
              ) : (
                <Typography sx={{ fontWeight: '600', fontSize: '18px', textDecoration: row.completed ? 'line-through' : 'none', color: row.completed ? '#666' : theme ? 'white' : 'black' }}>{row.taskName}</Typography>
              )}
            </TableCell>
          </Box>
          <TableCell sx={{ color: theme ? 'white' : 'black', transition: '0.3s', borderBottom: '0px', display: 'flex' }}>
            <Button sx={{ color: 'white', borderRadius: '30px' }} onClick={handleRowClick}>
              {open ? <ExpandLess sx={{ color: theme ? 'white' : 'black', transition: '0.3s' }} /> : <ExpandMore sx={{ color: theme ? 'white' : 'black', transition: '0.3s' }} />}
            </Button>
            {row.completed ?
              <Button sx={{ color: 'red', borderRadius: '30px' }} onClick={() => deleteTask(row.id)}><Delete sx={{ color: theme ? 'red' : 'red', transition: '0.3s' }} /></Button> :
              <label className="container">
                <input checked={row.stared} onClick={() => toggleStared(row.id)} type="checkbox" />
                <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z" /></g></g></svg>
              </label>
            }
          </TableCell>
        </Box>
        <Box sx={{ opacity: row.completed ? 0.8 : 1, backgroundColor: theme ? '#00000099' : 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', transition: '0.3s', borderRadius: '0 0 10px 10px', width: '98%', marginX: 'auto' }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, wordBreak: 'break-word' }}>
              <Box className="flex justify-between">
                <Typography variant="h6" gutterBottom component="div" sx={{ color: theme ? 'white' : 'black', transition: '0.3s' }}>
                  Description
                </Typography>
                <Box className='flex justify-between'>
                  {row.completed ?
                    <div></div> :
                    <Button sx={{ color: 'white', borderRadius: '30px' }} onClick={handleEdit}>
                      {isEditing ? <Done sx={{ fontWeight: '900', fontSize: '30px', color: theme ? 'white' : 'black', transition: '0.3s' }} /> : <Edit sx={{ fontWeight: '900', fontSize: '30px', color: theme ? 'white' : 'black', transition: '0.3s' }} />}
                    </Button>
                  }
                  {row.completed ?
                    <div></div> :
                    <Button sx={{ color: 'white', borderRadius: '30px' }} onClick={() => deleteTask(row.id)}><Delete sx={{ color: theme ? 'white' : 'black', transition: '0.3s' }} /></Button>
                  }
                </Box>
              </Box>
              {isEditing ? (
                <TextField
                  value={editTaskDesc}
                  onChange={(e) => setEditTaskDesc(e.target.value)}
                  sx={{
                    color: theme ? 'white' : 'black',
                    width: '100%',
                    padding: '5px',
                    border: theme ? '1px solid white' : '1px solid black',
                    borderRadius: '10px',
                    '& .MuiInputBase-input': { color: theme ? 'white' : 'black', fontSize: '16px', lineHeight: 2.05 },
                    '& .MuiInputBase-input::placeholder': { color: 'gray' }
                  }} multiline={true}
                  variant="standard"
                  placeholder="Add description"
                />
              ) : (
                <Typography variant="body2" sx={{ color: theme ? 'white' : 'black' }}>
                  {row.taskDesc ? (
                    row.taskDesc.split('\n').map((line, index) => (
                      <Typography variant="body2" sx={{ color: theme ? 'white' : 'black', transition: '0.3s', fontSize: '16px', paddingY: '5.5px' }} key={index}>
                        {line}
                        {index < row.taskDesc.split('\n').length - 1 && <br />}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" sx={{ color: theme ? 'white' : 'black', fontStyle: 'italic' }}>
                      Add your Description
                    </Typography>
                  )}
                </Typography>
              )}
            </Box>
          </Collapse>
        </Box>
      </Button>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    taskName: PropTypes.string.isRequired,
    taskDesc: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    stared: PropTypes.bool.isRequired,
  }).isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  toggleStared: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default function DataTable({ searchTerm, filterStatus, theme }) {
  const [rows, setRows] = React.useState(initialRows);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleRowClick = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };
  const deleteAllTasks = () => {
    // notification before deleting
    const result = window.confirm('Are you sure you want to delete all tasks?');
    if (result) {
      setRows([]);
    }
  };

  let filteredRows = rows.filter((row) => {
    const matchesSearch = row.taskName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || (filterStatus === 'completed' && row.completed) || (filterStatus === 'incomplete' && !row.completed) || (filterStatus === 'stared' && row.stared);
    return matchesSearch && matchesStatus;
  });

  const addTask = (taskName, taskDesc) => {
    const newTask = createData(rows.length + 1, taskName, taskDesc, false);
    setRows((prevRows) => [...prevRows, newTask]);
  };

  const toggleCompleted = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, completed: !row.completed } : row
      )
    );
  };

  const toggleStared = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, stared: !row.stared } : row
      )
    );
  };


  const deleteTask = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const editTask = (id, taskName, taskDesc) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, taskName, taskDesc } : row
      )
    );
  };

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '0px 20px 10px 20px' }}>
      <Box>
        <Box sx={{ width: '100%' }}>
          <Box className="flex flex-col-reverse" sx={{ width: '100%' }}>
            {filteredRows.map((row) => (
              <Row key={row.id} row={row} theme={theme} toggleCompleted={toggleCompleted} toggleStared={toggleStared} deleteTask={deleteTask} editTask={editTask} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: theme ? '#00000090' : '#ffffff90' }} className='sticky mt-2 bottom-0 rounded-md p-1'>
        <Box className='flex gap-x-1 items-center'>
          <AddTask addTask={addTask} theme={theme} />
          <Button sx={{ color: 'white', borderRadius: '30px', backdropFilter: 'blur(100px)', backgroundColor: theme ? '#00000090' : '#ffffff90' }} onClick={handleRowClick}>
            {menuOpen ? <ExpandLess sx={{ color: theme ? 'white' : 'black', transition: '0.3s' }} /> : <ExpandMore sx={{ color: theme ? 'white' : 'black', transition: '0.3s' }} />}
          </Button>
        </Box>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit>
          <Box className='flex gap-x-1 flex-wrap'>
            <Button sx={{ color: theme ? 'red' : '#e22', marginBottom: '5px', fontWeight: '600', backgroundColor: theme ? '#00000090' : '#ffffff90', borderRadius: '30px', backdropFilter: 'blur(100px)' }} onClick={deleteAllTasks}>
              <Delete sx={{ color: theme ? 'red' : '#e22', transition: '0.3s' }} /> Delete All Tasks
            </Button>
            <Button sx={{ color: theme ? 'white' : 'black', marginBottom: '5px', fontWeight: '600', backgroundColor: theme ? '#00000090' : '#ffffff90', borderRadius: '30px', backdropFilter: 'blur(100px)' }} onClick={() => {
              blur = !blur;
              blur?document.querySelector('#container').style.backdropFilter = 'blur(10px)': document.querySelector('#container').style.backdropFilter = 'blur(0px)'
            }}><BlurCircular />Blur theme</Button>
          </Box>
        </Collapse>
      </Box>
    </TableContainer>
  );
}

const initialRows = [];