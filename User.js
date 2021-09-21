class User{
    constructor(){
        this.index=null;
        this.name=null;
    }
    getCount(){
        var userCountRef = database.ref('userCount')
        userCountRef.on("value",(data)=>{
            userCount=data.val();
        })
    }
    updateCount(count){
     database.ref('userCount').update({
         userCount:count
     })
    }
    update(){
        var userindex="users/user" + this.index;
        database.ref(userindex).set({
            name:this.name
        })
    }
}