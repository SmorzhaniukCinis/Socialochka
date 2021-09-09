import React, {FC} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import avatar from "../../../../defaultData/avatarDefoult.png";
import s from './Modal.module.css'


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            alignContent: 'center',
            position: 'absolute',
            width: 1200,
            height: 640,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

type props = {
    profile: any
}

const SimpleModal: FC<props> = (props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const body = (
    //     <div style={modalStyle} className={classes.paper}>
    //         <h2 id="simple-modal-title">Text in a modal</h2>
    //         <p id="simple-modal-description">
    //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //         </p>
    //         <SimpleModal />
    //     </div>
    // );

    return (
        <div>
            <img className={s.avatar} onClick={handleOpen} src={(props.profile.photos && props.profile.photos.small) || avatar}
                 alt="avatarPhoto"/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p className={s.container}>
                        <img className={s.bigAva} src={(props.profile.photos && props.profile.photos.large) || avatar}
                             alt="avatarPhoto"/>
                    </p>
                </div>
            </Modal>
        </div>
    );
}
export default SimpleModal