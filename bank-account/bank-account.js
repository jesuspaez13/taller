export class BankAccount {
  constructor(name='Undefined',type='Savings') {
    // let activeFlag, accountBalance,
    this.lockFlag=false;
    this.accountName=name;
    this.accountType='Savings';
  }

  open(name='Undefined',type='Savings') {
    if(this.lockFlag===true){
      throw new ValueError ('Account is locked for another transaction')
    } else if (this.activeFlag===true){
      throw new ValueError ('Account is already active')
    }else {
      this.lockFlag=true;
      this.activeFlag=true;
      this.accountBalance=0;
      this.accountName=name;
      this.accountType=type;
      this.lockFlag=false;
    }    
  }
  
  close() {
    if(this.lockFlag===true){
      throw new ValueError ('Account is locked for another transaction')
    } else if (this.activeFlag===false||this.activeFlag===undefined){
        throw new ValueError('Account is already closed')
    } else {
      this.lockFlag=true;
      this.accountBalance=0; //assumes cash paid out
      this.activeFlag=false;
      this.lockFlag=false;
    }
  }

  deposit(amount) {
     if(this.lockFlag===true){
      throw new ValueError ('Account is locked for another transaction')
    } else if (this.activeFlag===false){
        throw new ValueError('Account is closed')
    } else if (amount<0){
      throw new ValueError ('invalid amount')   ;   
    } else {
      this.lockFlag=true;
      this.accountBalance+=amount;
      this.lockFlag=false;
    }
  }

  withdraw(amount) {
    if(this.lockFlag===true){
      throw new ValueError ('Account is locked for another transaction')
    } else if (this.activeFlag===false){
        throw new ValueError('Account is closed')
    } else if(this.accountBalance<amount){
      throw new ValueError ('Withdrawl exceeds balance')
    } else if (amount<0){
      throw new ValueError ('invalid amount')   ;   
    } else
    {
      this.lockFlag=true;
      this.accountBalance-=amount;
      this.lockFlag=false;
    }
  }

  get balance() {
    if (this.activeFlag===false){
      throw new ValueError ('Account is closed')
    }
    return this.accountBalance;     
  }
}

export class ValueError extends Error {
  constructor(msg) {
    super(('Bank account error:'+msg));
  }
}