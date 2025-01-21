import { useState, useEffect, useRef } from 'react';
import {
    Box,
    IconButton,
    Paper,
    TextField,
    Button,
    Typography,
    List,
    ListItem,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const wsRef = useRef(null);

    useEffect(() => {
        if (isChatOpen) {
            wsRef.current = new WebSocket('ws://localhost:5000');

            wsRef.current.onopen = () => {
                console.log('Connected to WebSocket');
            };

            wsRef.current.onmessage = (event) => {
                const message = JSON.parse(event.data);
                setMessages((prev) => [...prev, message]);
            };
        }

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [isChatOpen]);

    const sendMessage = () => {
        if (inputMessage.trim() && wsRef.current) {
            const messageData = {
                text: inputMessage,
                sender: 'user',
                timestamp: new Date(),
            };
            wsRef.current.send(JSON.stringify(messageData));
            setMessages((prev) => [...prev, messageData]);
            setInputMessage('');
        }
    };

    const ChatButton = () => (
        <IconButton
            onClick={() => setIsChatOpen(!isChatOpen)}
            color="primary"
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': { bgcolor: 'primary.dark' },
            }}
        >
            {isChatOpen ? <CloseIcon /> : <ChatIcon />}
        </IconButton>
    );

    if (!isChatOpen) {
        return <ChatButton />;
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                width: 320,
                height: 480,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 3,
                borderRadius: 2,
                bgcolor: 'background.paper',
            }}
        >
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 2,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h6">Customer Support</Typography>
                <IconButton
                    onClick={() => setIsChatOpen(false)}
                    sx={{ color: 'white' }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    p: 2,
                }}
            >
                <List>
                    {messages.map((msg, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            }}
                        >
                            <Paper
                                elevation={1}
                                sx={{
                                    p: 1,
                                    maxWidth: '70%',
                                    bgcolor: msg.sender === 'user' ? 'primary.main' : 'grey.200',
                                    color: msg.sender === 'user' ? 'white' : 'text.primary',
                                }}
                            >
                                <Typography>{msg.text}</Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        display: 'block',
                                        textAlign: 'right',
                                        color: msg.sender === 'user' ? 'primary.light' : 'text.secondary',
                                    }}
                                >
                                    {new Date(msg.timestamp).toLocaleTimeString()}
                                </Typography>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box
                sx={{
                    p: 2,
                    borderTop: '1px solid',
                    borderColor: 'grey.300',
                }}
            >
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        variant="outlined"
                        placeholder="Type a message..."
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={sendMessage}
                        disableElevation
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ChatInterface;
