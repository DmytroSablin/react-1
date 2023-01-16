import React from "react";
import classes from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Bill
                </div>
                <div className={classes.dialog}>
                    Soul
                </div>
                <div className={classes.dialog}>
                    Tim
                </div>
                <div className={classes.dialog}>
                    Johny
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are u?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs