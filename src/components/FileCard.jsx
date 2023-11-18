import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import fileLogo from '../assets/images/pdf.png';

export default function FileCard({ onClose, fileTitle, pusherName, pusherDate }) {
        return (
                <Card sx={{ maxWidth: 345, p: 1, m: 2, fontFamily: 'Cairo' }}>
                        <CardHeader
                                sx={{ fontFamily: 'Cairo' }}
                                avatar={<Avatar sx={{ bgcolor: red[500], m: 1, }} aria-label="recipe">F</Avatar>}
                                action={
                                        <IconButton aria-label="settings" onClick={onClose}>
                                                <MoreVertIcon />
                                        </IconButton>
                                }
                                title={pusherName}
                                subheader={pusherDate}
                        />
                        <CardMedia
                                component="img"
                                height="194"
                                image={fileLogo}
                                alt="Paella dish"

                        />
                        <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{
                                        fontFamily: 'Cairo'
                                }}>
                                        {fileTitle}
                                </Typography>
                        </CardContent>
                </Card>
        );
}
