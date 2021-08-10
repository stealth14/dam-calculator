
export function validateInput(value : string, newValue: number){

    //prevents the user from entering multiple decimal separators
    if(newValue.toString() === "," && value.includes(",")) return false;

    //prevents the user from entering a leading zero
    if(value == "" && newValue.toString() === "0") return false;

    return true;
}
