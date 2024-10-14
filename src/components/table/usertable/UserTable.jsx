import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import userImage from '../../../images/placeholder_image.png'
import { ProfileWrapper } from '../../header/Header.style';
import axios from 'axios';


export default function UserTable() {

  const [userData, setUserData] = React.useState([])

  const fetchUserData = async () =>{
    try {
      const res = await axios.get(process.env.REACT_APP_URL+ '/api/users');
      console.log('users: ',  res.data);
      setUserData(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(()=>{
    fetchUserData();
  }, []);
  


  return (
    <TableContainer component={Paper} style={{borderRadius: '15px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Picture</b></TableCell>
            <TableCell align="left"><b>Username</b></TableCell>
            <TableCell align="left"><b>Posts</b></TableCell>
            <TableCell align="left"><b>Email</b></TableCell>
            <TableCell align="left"><b>User Role</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((data, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <ProfileWrapper>
                   {!data.photo ? 
                   <img src={userImage} alt="" srcset="" />:
                   <img src={`${process.env.REACT_APP_URL}/images/${data.photo}`} alt="" srcset="" />}
                </ProfileWrapper>
              </TableCell>
              <TableCell align="left">{data.username}</TableCell>
              <TableCell align="left">{data.posts}</TableCell>
              <TableCell align="left">{data.email}</TableCell>
              <TableCell align="left">{data.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



