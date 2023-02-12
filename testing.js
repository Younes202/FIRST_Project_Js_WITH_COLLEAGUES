

function Activity(amount) {
    this.amount = amount
    this.SetAmount = function(value){
        if (value<0 || value ==0)
        {
            return false
        }
        else{
            this.amount = value
            return true
        }   
    }
     this.getAmount=function (){
        return this.amount
    }
   
}

function Payment(amount, receiver) {
    this.Activity(amount)
    this.receiver = receiver
    this.setReceiver = function(val)
    {
        this.receiver = val
    }
    this.getReceiver = function()
    {
        return this.receiver
    }
}

function Refund(amount, sender) {
        this.sender = sender
        this.Activity = amount
         this.SetSender = function(sender)
        {
        this.sender = receiver
        }
    this.getSender = function()
    {
        return this.receiver
    }
        

}
