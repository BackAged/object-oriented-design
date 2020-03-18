import { CheckingAccount } from "../inheritance/checkingAccount";
import { BusinessChecking } from "../inheritance/businessChecking";

const checkingAcc = new CheckingAccount();

checkingAcc.chargeFee();

const businesChecking = new BusinessChecking();
console.log(businesChecking.chargeFee);