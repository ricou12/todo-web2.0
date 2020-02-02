/* ------------------------------------------
        RENVOI L'ETAT DU CHECKBOX 
------------------------------------------- */
export const stateCheckBox = (state) => {
    if (state) {
        return {
            "etat":"checked",
            "color":"gray"
        };
    } else {
        return {
            "etat":"",
            "color":"white"
        };
    }
}