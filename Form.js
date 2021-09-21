
class Form {
    constructor() {
      
    }
  
    display(){
      background(bgImg)
      var heading = createElement('h1');
      heading.html('RELAX-0-METRE')
      heading.position(displayWidth/2-50,20)
      
      var button1 = createButton('SIGN UP');
      var button2 = createButton('SIGN IN');
      var button3 = createButton('GUEST');
      
     
      button1.position(displayWidth/2, displayHeight/2);
      button1.size(130, 30);
      button2.position(displayWidth/2, displayHeight/2+50);
      button2.size(130, 30);
      button3.position(displayWidth/2, displayHeight/2+100);
      button3.size(130, 30);
  //SIGN UP
      button1.mousePressed(function(){
       
        button1.remove();
        button2.remove();
        button3.remove();
        var Name = createInput("Name");
        var email = createInput("email");
        var phone = createInput("Phone no");
        var password = createInput("password");
       
        var submit = createButton('SUBMIT');
        Name.position(displayWidth/2, displayHeight/2);
        email.position(displayWidth/2, displayHeight/2+50);
        phone.position(displayWidth/2, displayHeight/2+100);
        password.position(displayWidth/2, displayHeight/2+150);
        submit.position(displayWidth/2+20, displayHeight/2+200);
        submit.size(130, 30);
        submit.mousePressed(function(){
       
          Name.hide();
          email.hide();
          phone.hide();
          password.hide();
          submit.hide();
        //  user.name=Name.value();
        //  userCount+=1;
         // user.index=userCount
         // user.updateCount(userCount)
         // user.update();

          var username = Name.value();
          var greeting = createElement('h2');
          var con= createButton('CONTINUE');
          greeting.html("Hello! " + username +  " Welcome to RELAX-0-METER")
          greeting.position(displayWidth/2-100, displayHeight/2-100);
          con.position(displayWidth/2+50, displayHeight/2);
          con.mousePressed(()=>{
           
            con.hide();
            greeting.hide();
            gameState=1;
          })
        });
       
      });
      //SIGN IN
      button2.mousePressed(function(){
       
        button1.hide();
        button2.hide();
        button3.hide();
        var Name1 = createInput("Name");
        var email1 = createInput("email");
        var password1 = createInput("Password");
        
        var submit1 = createButton('SUBMIT');
       
        Name1.position(displayWidth/2, displayHeight/2);
        email1.position(displayWidth/2, displayHeight/2+50);
        password1.position(displayWidth/2, displayHeight/2+100);
        submit1.position(displayWidth/2+20, displayHeight/2+200);
        submit1.size(130, 30);
        submit1.mousePressed(function(){
       
        Name1.hide();
          email1.hide();
         
          password1.hide();
          submit1.hide();
          var name = Name1.value();
          var con= createButton('CONTINUE');
          var greeting = createElement('h2');
          greeting.html("Hello! " + name +  " Welcome Back to RELAX-0-METER" )
          greeting.position(displayWidth/2-150, displayHeight/2)
          con.position(displayWidth/2+50, displayHeight/2+90);
          con.mousePressed(()=>{
           
            con.hide();
            greeting.hide();
            gameState=1;
          })
        });
       
      });
      button3.mousePressed(function(){
       
        button1.hide();
        button2.hide();
        button3.hide();
       
         var greeting = createElement('h3');
         var con=createButton('CONTINUE')
        greeting.html("Hello!! Welcome to RELAX-0-METER")
        greeting.position(displayWidth/2-50, displayHeight/2)
        con.position(displayWidth/2+50, displayHeight/2);
        con.mousePressed(()=>{
         
          con.hide();
          greeting.hide();
          gameState=1;
        })
      });
  
  
    }
  }
  