export const validate = (value,regEx) => {
    if((new RegExp(regEx)).test(value))
        return true;
    else 
        return false;

}