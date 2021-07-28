class Form
{
    constructor()
    {
this.button1 = createButton('PLANT THE SAPLINGS');
  this.button1.position(160,330);
  this.button1.style('background', 'lightgrey');    

  this.button2 = createButton('DUMP THE TRASHCANS');
  this.button2.position(160,300);
  this.button2.style('background', 'lightgrey');

  
  

  
    }

    display()
    {
       
    }
    hide1()
    {
        this.button1.hide()
        
    }
    hide2()
    {
        this.button2.hide()
    }

    create()
    {

        if(gameState === PLANT)
        {

            background(EndGround)
        this.button1 = createButton('PLANT THE SAPLINGS');
        this.button1.position(160,330);
        this.button1.style('background', 'lightgrey');    
      
        this.button2 = createButton('DUMP THE TRASHCANS');
        this.button2.position(160,300);
        this.button2.style('background', 'lightgrey');
        
        this.button1.mousePressed(() =>
        {
        
          boy.destroy()
        Mangotree.visible = true;
        Mangotree.scale =0.5
      
         sunflower.visible = true;
         sunflower.scale =0.3
      
        papayatree.visible = true;
        papayatree.scale =0.3
       
        this.button1.hide()
        form1.hide1()
        this.button1.position(780,330);
        this.button1.style('background', 'lightgrey');    
        
        })

        this.button2.mousePressed(() =>
        {
        
          boy.destroy()
        
       
        trashcan.visible = true
        trashcan.scale = 0.3

        this.button2.hide()
        form1.hide2()
        this.button2.position(780,300);

        })
    }
    }
    
}