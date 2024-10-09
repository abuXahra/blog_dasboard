import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import userImage from '../../../images/professional_passport.png'
import { ProfileWrapper } from '../../header/Header.style';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function createUserData(userImage, username, posts, email, useRole) {
    return { userImage, username, posts, email, useRole };
  }
// Sample data for the table
const userData = [
    createUserData(userImage, 'Abu Amjad', 10, 'abdulmuminisah79@gmail.com', 'user'),
    createUserData(userImage, 'Abu Amjad', 10, 'abdulmuminisah79@gmail.com', 'user'),
    createUserData(userImage, 'Abu Amjad', 10, 'abdulmuminisah79@gmail.com', 'user'),
    createUserData(userImage, 'Abu Amjad', 10, 'abdulmuminisah79@gmail.com', 'user'),
];

export default function UserTable() {
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
                    <img src={data.userImage} alt="" srcset="" />
                </ProfileWrapper>
              </TableCell>
              <TableCell align="left">{data.username}</TableCell>
              <TableCell align="left">{data.posts}</TableCell>
              <TableCell align="left">{data.email}</TableCell>
              <TableCell align="left">{data.useRole}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



