import { Card, makeStyles, Tooltip, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    
    img: {
        height: 400,
        width: '100%',
        objectFit: 'cover'
    },
    background: {
        backgroundColor:'black'
    }
})

const Character = ({ item }) => {
    console.log(item);
    const classes = useStyle();
    return (
        <Card className={classes.background}>
            <Tooltip title={
                    <>
                        <Typography>Name:  {item.name}</Typography>
                        <Typography>DOB: {item.birthday}</Typography>
                        <Typography>Occupation: {item.occupation}</Typography>
                        <Typography>Status: {item.status}</Typography>
                        <Typography>Nickname: {item.nickname}</Typography>
                        <Typography>Portrayed Character: {item.portrayed}</Typography>
                        <Typography>Season Appearance: {item.appearance}</Typography>        
                    </>
                }
            
                arrow placement="top">
                <img src={item.img} className={classes.img} alt = "character" />
            </Tooltip>
        </Card>
    )
}

export default Character;