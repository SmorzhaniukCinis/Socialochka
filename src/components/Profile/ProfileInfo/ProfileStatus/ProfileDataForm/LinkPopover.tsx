import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import s from "./ProfileDataForm.module.css";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
        button:  {
            padding: 0,
            background: 0,
            width: 20
        }
    }),
);

type props = {
contactLink: string | null
URL: string | null
setURL: (link:string)=> void
name: string
linkTitle: string
link: string
}

export const LinkPopover: React.FC<props> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div>
            <Button className={classes.button} aria-describedby={id} variant="contained" color="default" onClick={handleClick}>
                <img  title={props.linkTitle} className={s.link} alt={'icon'} src={props.link}/>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                    {/*@ts-ignore*/}
                    <input type="text" defaultValue={props.contactLink} onInput={(e) => {
                        props.setURL(e.currentTarget.value)
                        console.log(e.currentTarget.value)
                    }}/>
                </Typography>
            </Popover>
        </div>
    );
}